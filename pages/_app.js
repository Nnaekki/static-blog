import Format from '@/layout/Format'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Format>
  <Component {...pageProps} />
  </Format>
  </>
  )
}

