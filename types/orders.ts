export type SwellOrderCreatedWebhook = {
  model: 'orders'
  type: 'order.created'
  data: {
    cart_id: string
    test: boolean
    items: [[Object], [Object], [Object]]
    billing: {
      name: string
      first_name: string
      last_name: string
      address1: string
      address2?: string
      city: string
      state?: string
      zip: string
      country: string
      phone: string
      card: [Object]
      method: string
      intent: [Object]
      account_card_id: string
    }
    shipping: {
      first_name: string
      last_name: string
      address1: string
      address2: string
      city: string
      country: string
      zip: string
      phone: string
      state?: string
      account_address_id: string
      name: string
      service: string
      service_name: string
      price?: number
    }
    shipment_rating: {
      date_created: string
      fingerprint: string
      services: any[]
    }
    shipment_discount?: number
    schedule?: any
    coupon_code?: string
    coupon_id?: string
    discounts: [[Object]]
    taxes: any
    item_tax_included?: any
    shipment_tax?: any
    shipment_tax_included?: any
    promotion_ids?: any[]
    account_id: string
    account_logged_in?: any
    account_info_saved?: any
    account_credit_applied: boolean
    account_credit_amount: number
    giftcards?: any
    currency: string
    display_currency?: any
    display_locale?: any
    notes: null
    comments?: string
    gift?: any
    gift_message?: any
    metadata?: any
    shipment_delivery: boolean
    date_trial_end?: any
    sub_total: number
    shipment_price: number
    shipment_total: number
    item_tax: number
    tax_included_total: number
    item_discount: number
    discount_total: number
    grand_total: number
    item_quantity_returned: number
    return_item_total: number
    return_item_tax: number
    return_item_tax_included: number
    return_total: number
    payment_balance: number
    paid: boolean
    refunded: boolean
    item_quantity_delivered: number
    item_quantity_deliverable: number
    delivered: boolean
    item_quantity: number
    item_quantity_canceled: number
    item_quantity_cancelable: number
    item_quantity_shipment_deliverable: number
    item_quantity_returnable: number
    item_quantity_invoiced: number
    item_quantity_invoiceable: number
    item_quantity_credited: number
    item_quantity_creditable: number
    item_shipment_weight: number
    shipment_tax_included_total: number
    tax_total: number
    giftcard_total: number
    guest: boolean
    authorized_payment_id: string
    date_created: string
    hold: boolean
    closed: boolean
    status: string
    payment_total: number
    refund_total: number
    number: string
    id: string
  }
  date_created: string
  date_updated: string
  webhooks_pending: number
  id: string
}