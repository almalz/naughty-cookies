import swell from '../swell'
import { SwellCart, SwellCartItem } from './types'
import { simplifyCartItem } from './utils'

export const Cart = {
  get: async () => {
    try {
      return (await swell.cart.get()) as SwellCart
    } catch (error) {
      console.error(error)
    }
  },

  addItem: async ({
    product_id,
    quantity,
  }: {
    product_id: string
    quantity: number
  }) => {
    try {
      return await swell.cart.addItem({
        product_id,
        quantity,
      })
    } catch (error) {
      console.error(error)
    }
  },

  updateItem: async (product_id: string, options: { quantity: number }) => {
    try {
      return await swell.cart.updateItem(product_id, {
        options,
      })
    } catch (error) {
      console.error(error)
    }
  },

  updateAllItems: async (items: SwellCartItem[]) => {
    try {
      return await swell.cart.setItems(simplifyCartItem(items))
    } catch (error) {
      console.error(error)
    }
  },

  removeItem: async (product_id: string) => {
    try {
      return await swell.cart.removeItem(product_id)
    } catch (error) {
      console.error(error)
    }
  },

  emptyCart: async () => {
    try {
      return await swell.cart.setItems([])
    } catch (error) {
      console.error(error)
    }
  },

  applyCoupon: async (coupon: string) => {
    try {
      return await swell.cart.applyCoupon(coupon)
    } catch (error) {
      console.error(error)
      return false
    }
  },

  removeCoupon: async () => {
    try {
      return await swell.cart.removeCoupon()
    } catch (error) {
      console.error(error)
      return false
    }
  },
  addCartMetadata: async (metadata: any) => {
    try {
      await swell.cart.update({
        metadata: metadata,
      })
    } catch (error) {
      console.error(error)
    }
  },
}
