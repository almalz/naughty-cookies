import { NextSeo } from 'next-seo'
import { SeoField } from '../../types/generated/graphql'
import { DebugIndicatior } from '../DebugIndicator'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

export type LayoutProps = {
  seo?: SeoField
  noIndex?: boolean
  slug?: string
  hideNavbar?: boolean
}

const BASE_URL = process.env.DOMAIN_NAME

const Layout: React.FC<LayoutProps> = ({
  children,
  seo,
  noIndex = false,
  slug,
  hideNavbar = false,
}) => {
  return (
    <>
      <NextSeo
        noindex={noIndex}
        title={seo?.title || 'Naughty cookies'}
        description={seo?.description || 'Naughty cookies'}
        openGraph={{
          title: seo?.title || 'Naughty cookies',
          description: seo?.description || 'Naughty cookies',
          url: `${BASE_URL}/${slug}`,
          type: 'website',
        }}
      />
      <DebugIndicatior />
      {!hideNavbar && <Navbar />}
      {children}
      <Footer />
    </>
  )
}

export default Layout
