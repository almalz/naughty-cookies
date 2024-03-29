import { useRadioGroup } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useCart } from '../../lib/store'
import { Cart } from '../../lib/store/cart/api'
import {
  SwellShippingService,
  SwellShippingServices,
} from '../../lib/store/cart/types'
import { RadioCard, RadioCardSkeleton } from './RadioCard'

const ARRAY_NUM = 3

const ShippingMethod: React.FC<{
  onComplete: (value: string) => void
}> = ({ onComplete }) => {
  const [shippingMethods, setshippingMethods] = useState<
    SwellShippingService[] | undefined
  >()
  const [loading, setLoading] = useState<boolean>(false)
  const { goToCart } = useCart()

  useEffect(() => {
    const getOptions = async () => {
      setLoading(true)
      let res
      try {
        res = (await Cart.getShippingMethods()) as SwellShippingServices
        setshippingMethods(res.services)
      } catch (error) {
        console.error(error)
        goToCart(true)
      }
      setLoading(false)
    }
    getOptions()
  }, [goToCart])

  const handleSelect = async (value: string) => {
    const shippingMethodsId = shippingMethods?.find((s) => s.name === value)?.id
    if (shippingMethodsId) {
      setLoading(true)
      await Cart.applyShipping(shippingMethodsId)
      onComplete(value)
      setLoading(false)
    }
  }

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'shippingMethods',
  })

  const group = getRootProps()

  return (
    <div
      className="grid auto-rows-min grid-cols-1 gap-2 md:grid-cols-2"
      {...group}
    >
      {shippingMethods
        ? shippingMethods.map(({ name, description, price }) => {
            const radio = getRadioProps({ value: name })
            return (
              <RadioCard
                key={name}
                {...radio}
                loading={loading}
                onClick={() => handleSelect(name)}
              >
                <div className="flex items-center">
                  <div className="flex-1">
                    <span className="mb-4 font-body font-bold">{name}</span>
                    <p className="font-body text-sm">{description}</p>
                  </div>
                  <span className="ml-4 font-body font-semibold">{`${price}€`}</span>
                </div>
              </RadioCard>
            )
          })
        : Array.from(Array(ARRAY_NUM).keys()).map((card: number) => (
            <RadioCardSkeleton key={card} />
          ))}
    </div>
  )
}

export default ShippingMethod
