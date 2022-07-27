import React from 'react'
import { useSelector } from 'react-redux'
import { getCart } from 'redux/slices/cartSlice'
import Item from './Item'
import { useDispatch } from 'react-redux'
import { clearCart } from 'redux/slices/cartSlice'
import Modal from 'components/Modal'
import { openModal } from 'redux/slices/modalSlice'

const Cart = () => {

    const cart = useSelector(getCart)
    const dispatch = useDispatch()

    if (cart.amount < 1) {
        return (
            <section>
                <header>
                    <h2 className="text-3xl text-center">Your bag is empty</h2>
                </header>
            </section>
        )
    }

  return (
    <section>
        <header>
            <h2 className="text-3xl text-center">Your Bag</h2>
        </header>
        <div>
            {cart.items.map(item => {
                return <Item key={item.id} {...item} />
            })}
        </div>
        <footer className='text-center'>
            <hr />
            <div className="flex items-center justify-center w-full text-3xl">
                <h3>Total : </h3>
                <h3>$ {cart.total.toFixed(2)}</h3>
            </div>
            <button className='px-4 py-3 my-2 rounded bg-teal-200/50' onClick={() => dispatch(openModal())}>Clear Cart</button>
        </footer>
        <Modal />
    </section>
  )
}

export default Cart