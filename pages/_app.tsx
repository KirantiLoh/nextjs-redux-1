import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from 'redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    {/* <Provider store={store}> */}
      <Component {...pageProps} />
    {/* </Provider> */}
  </>
  )
}

export default wrapper.withRedux(MyApp)
