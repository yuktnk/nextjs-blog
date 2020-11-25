// import '../styles/global.css'
// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }




import '../styles/global.css'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}