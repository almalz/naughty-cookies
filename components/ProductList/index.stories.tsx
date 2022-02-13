import React from 'react'
import { Story, Meta } from '@storybook/react'

import ProductList, { ProductListProps } from '.'
import { Product, File } from '../../types'

export default {
  title: 'ProductList',
  component: ProductList,
} as Meta<ProductListProps>

const Template: Story<ProductListProps> = (args) => <ProductList {...args} />

const pictures: Array<File> = [
  {
    url: 'https://www.datocms-assets.com/62800/1644160176-screenshot-2022-02-06-at-16-09-05.png',
    alt: 'Cookies aux pépites de chocolat noir',
  },
]

const product: Product = {
  id: 12412,
  name: 'Cookies aux pépites de chocolat noir',
  description:
    'Pâte à cookie nature, pépites de chocolat noir, insert fondant au beurre de cacahuète',
  unitPrice: 3,
  pictures: pictures,
}

export const Primary = Template.bind({})
Primary.args = { products: [product, product, product] }