import { HiArrowNarrowLeft } from 'react-icons/hi'
import { Button } from '../Button'
import { SwellCart } from '../../lib/store/cart/types'
import { CartpageRecord } from '../../types/generated/graphql'
import { CouponsManager } from '../CouponsManager'
import { useRouter } from 'next/router'
import { useCart } from '../../lib/store'

export type CartSummaryProps = {
  cart: SwellCart
  pageContent: CartpageRecord
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price)
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  cart,
  pageContent,
}) => {
  const router = useRouter()
  const { goToCheckout } = useCart()

  return (
    <div className="flex flex-col gap-8 py-8 px-12 lg:px-[20%]">
      <CouponsManager pageContent={pageContent} />
      <div className="flex flex-col gap-2 font-body text-xl text-purple-700">
        <div className={`flex flex-row ${!cart.coupon && 'font-bold'}`}>
          <span className="flex-1">{pageContent.subtotalLabel} :</span>
          <span>{formatPrice(cart.subTotal)}</span>
        </div>
        {cart.coupon && (
          <>
            <div className="flex flex-row">
              <span className="flex-1">{pageContent.discountLabel} :</span>
              <span>{formatPrice(-cart.discountTotal)}</span>
            </div>
            <div className="flex flex-row font-bold">
              <span className="flex-1">{pageContent.totalLabel} :</span>
              <span>{formatPrice(cart.grandTotal || cart.subTotal)}</span>
            </div>
          </>
        )}
        <div>
          <span className="font-body text-xs font-bold italic">
            {pageContent.shippingFeesInstructions}
          </span>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-4">
        <Button
          color="pink"
          className="px-2 py-2"
          onClick={() => goToCheckout()}
        >
          {pageContent.checkoutCtaLabel}
        </Button>
        <Button
          color="purple"
          className="border-0"
          onClick={() => router.push('/drop')}
        >
          <span className="flex items-center gap-2">
            <HiArrowNarrowLeft />
            {pageContent.backButtonLabel}
          </span>
        </Button>
      </div>
    </div>
  )
}