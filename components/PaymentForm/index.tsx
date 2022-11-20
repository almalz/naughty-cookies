import { PaymentMethod, StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useState, useEffect, FormEventHandler } from 'react'
import { Button } from '@chakra-ui/react'
import { useCart } from '../../lib/store'
import { OrderSummary } from './OrderSummary'
import clsx from 'clsx'
import { handleConfirmOrderPayement } from '../../lib/store/checkout/order'

const PaymentForm: React.FC<{
  onComplete: (value: string) => void
}> = ({ onComplete }) => {
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState<string | undefined>()
  const [processing, setProcessing] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()
  const { cart } = useCart()

  useEffect(() => {
    const createPaymentIntent = async () => {
      await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart }),
      })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setClientSecret(data.clientSecret)
        })
        .catch((error) => {
          console.error(error)
          // setError(error)
        })
    }

    createPaymentIntent()
  }, [cart])

  const cardStyle = {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#32325d',
      },
    },
    invalid: {
      fontFamily: 'Arial, sans-serif',
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  }

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty)
    console.log(event.error)
    setError(event.error ? event.error.message : '')
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setProcessing(true)

    const card = elements?.getElement(CardElement)

    let payload

    if (stripe && card && cart?.account?.email && elements) {
      try {
        payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement)!,
          },
        })
      } catch (error) {
        setError(`Payment failed : ${error}`)
        console.error(error)
      }
    }

    if (payload?.error) {
      setError(`Payment failed ${payload?.error.message}`)
      setProcessing(false)
    } else if (
      payload?.paymentIntent &&
      payload.paymentIntent.status === 'succeeded'
    ) {
      try {
        await handleConfirmOrderPayement({
          paymentIntentId: payload?.paymentIntent.id,
          paymentMethodId: (
            payload?.paymentIntent.payment_method as PaymentMethod
          ).id,
        })
        setProcessing(false)
        setSucceeded(true)
        setError(undefined)
      } catch (error) {
        setError(`Payment failed ${error}`)
        setProcessing(false)
      }
    }
  }

  return (
    <>
      <OrderSummary />
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="my-4 rounded-md border-2 border-pink-500 bg-pink-100 p-4 text-white"
      >
        <CardElement
          id="card-element"
          options={{
            style: cardStyle,
            hidePostalCode: true,
          }}
          onChange={handleChange}
        />
        <div className="flex justify-center pt-8">
          <Button
            type="submit"
            disabled={disabled || succeeded}
            isLoading={processing}
            id="submit"
            color="white"
            bg="purple.700"
            _hover={{ background: '#805AD5' }}
            mb="16px"
          >
            Procéder au paiement
          </Button>
        </div>
        {error && (
          <div className={clsx('card-error', 'text-[#fa655a]')} role="alert">
            {error}
          </div>
        )}
        <p className={succeeded ? 'result-message' : 'result-message hidden'}>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            Stripe dashboard.
          </a>
          Refresh the page to pay again.
        </p>
      </form>
    </>
  )
}

export default PaymentForm
