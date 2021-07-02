import { useAnalytics } from '@happykit/analytics'

function MyApp({ Component, pageProps }) {
  useAnalytics({ publicKey: 'analytics_pub_dc90afac1d' })
  return <Component {...pageProps} />
}

export default MyApp
