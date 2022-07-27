import type { NextPage } from 'next'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Navbar from 'components/Navbar'
import Cart from 'components/Cart'
import { calculateTotal, getCart, getCartItems } from 'redux/slices/cartSlice'
import { AppDispatch, wrapper } from 'redux/store'

const Home: NextPage = () => {

  const { items } = useSelector(getCart)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [items])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Cart />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    let data = await store.dispatch(getCartItems())
    return {
      props: {}
    }
})
