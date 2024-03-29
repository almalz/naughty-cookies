import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { Accordion, AccordionItem, AccordionPanel } from '@chakra-ui/react'
import { SectionComponent, useCheckout } from '../lib/store/checkout/provider'
import { SectionPanel } from '../components/CheckoutForm/SectionPanel'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { H1 } from '../components/Typography'
// @ts-ignore
import swellNode from 'swell-node'
import { SwellCart } from '../lib/store/cart/types'

const CheckoutProvider = dynamic(
  () => import('../lib/store/checkout/provider'),
  {
    ssr: false,
  }
)

const Checkout: React.FC = () => {
  const {
    sections,
    currentSectionId,
    setCurrentSectionId,
    nextSection,
    setValue,
  } = useCheckout()

  const filteredSections = sections.slice(0, currentSectionId + 1)

  return (
    <Layout hideNavbar noIndex={true} slug="checkout">
      <div className="my-8 px-8 pb-8 sm:px-[20%] sm:pb-16 xl:px-[25%]">
        <div className="flex flex-col pt-8 md:pt-16">
          <div className="pt-16">
            <Link href="/cart">
              <a className="ml-2 font-body  text-purple-700 hover:text-pink-500">
                ← Retour au panier
              </a>
            </Link>
          </div>
          <a className="pt-16">
            <div className="imageContainer relative ml-2 w-16 md:w-1/4">
              <Image
                src="/images/purple_round_logo.svg"
                alt="logo"
                layout="fill"
                className="image"
                priority
              />
            </div>
          </a>
          <div className="pt-16 pb-4 pl-4 text-purple-700">
            <H1>Finalisation de la commande</H1>
          </div>
          <Accordion
            defaultIndex={[0]}
            className="flex flex-col gap-8"
            index={[currentSectionId]}
            onChange={(index) => setCurrentSectionId(index as number)}
          >
            {filteredSections.map(({ label, value, id }) => {
              const Section = SectionComponent[id]
              return (
                Section && (
                  <AccordionItem
                    key={label}
                    border="none"
                    className={clsx(
                      id === currentSectionId
                        ? 'my-4 border-none sm:my-8'
                        : 'rounded-md'
                    )}
                  >
                    <h2>
                      <SectionPanel
                        label={label}
                        value={value}
                        isOpen={currentSectionId === id}
                      />
                    </h2>
                    <AccordionPanel pb={4}>
                      <Section
                        onComplete={(value) => {
                          setValue(id, value)
                          nextSection()
                        }}
                      />
                    </AccordionPanel>
                  </AccordionItem>
                )
              )
            })}
          </Accordion>
        </div>
      </div>
    </Layout>
  )
}

const CheckoutPage: NextPage = () => (
  <CheckoutProvider>
    <Checkout />
  </CheckoutProvider>
)

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  swellNode.init(
    process.env.NEXT_PUBLIC_SWELL_STORE_ID,
    process.env.SWELL_SECRET_KEY
  )

  const { cartId } = query

  if (!cartId) {
    return {
      redirect: {
        permanent: false,
        destination: '/cart',
      },
    }
  }

  const cart: SwellCart = await swellNode.get('/carts/{id}', {
    id: cartId,
  })

  if (!cart || !cart.items || (cart.items && cart.items.length < 1)) {
    return {
      redirect: {
        permanent: false,
        destination: '/cart',
      },
    }
  }

  return {
    props: {},
  }
}

export default CheckoutPage
