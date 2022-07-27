import React from 'react'
import { useSelector } from 'react-redux'
import { getCart } from 'redux/slices/cartSlice'
import { ShoppingBagIcon } from '@heroicons/react/solid'

const Navbar = () => {

    const cart = useSelector(getCart)

  return (
    <nav className="flex items-center justify-between w-full p-5 text-white bg-zinc-800">
        <h1 className="text-2xl">Redux Toolkit</h1>
        <div>
            <div className="relative px-1">
                <ShoppingBagIcon className="w-8 h-8" />
                <p className="absolute grid w-6 h-6 rounded-full place-items-center -right-2 -top-2 bg-zinc-600">
                    {cart.amount}
                </p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar