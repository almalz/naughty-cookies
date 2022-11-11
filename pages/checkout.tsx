import { NextPage } from 'next'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { Accordion, AccordionItem, AccordionPanel } from '@chakra-ui/react'
import { SectionComponent, useCheckout } from '../lib/checkout/provider'
import { SectionPanel } from '../components/CheckoutForm/SectionPanel'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
const CheckoutProvider = dynamic(() => import('../lib/checkout/provider'), {
  ssr: false,
})

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
      <div className="my-8 px-8 pb-8 sm:px-[20%] sm:pb-16 lg:px-[25%]">
        <div className="flex flex-col gap-8 pt-8 md:gap-16 md:pt-16">
          <Link href="/cart">
            <a className="ml-2 font-body  text-purple-700 hover:text-pink-500">
              ← Retour au panier
            </a>
          </Link>
          <a>
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
          <Accordion
            defaultIndex={[0]}
            index={[currentSectionId]}
            onChange={(index) => setCurrentSectionId(index as number)}
          >
            {filteredSections.map(({ label, value, id }) => {
              const Section = SectionComponent[id]
              return (
                Section && (
                  <AccordionItem
                    key={label}
                    className={clsx(
                      id === currentSectionId
                        ? 'border-none'
                        : 'rounded-md border-2 border-purple-700'
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

export default CheckoutPage
