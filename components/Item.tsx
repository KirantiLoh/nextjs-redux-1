import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseItem, decreaseItem, removeItem } from 'redux/slices/cartSlice'
import { Item } from 'typings'

const Item = ({id, title, price, img, amount}: Item) => {

    const dispatch = useDispatch()

  return (
    <article className="flex w-full px-4 py-2">
        <div className='relative w-32 h-32'>
            <Image src={img} alt={title} layout='fill' />
        </div>
        <div className='flex items-start justify-between w-full'>
            <div className='flex flex-col items-start justify-evenly'>
                <h3>{title}</h3>
                <h3>$ {price}</h3>
                <button onClick={() => dispatch(removeItem(id))} className='my-2 text-teal-600'>Remove</button>
            </div>
            <div className="px-2 text-center">
                <button onClick={() => dispatch(increaseItem(id))}>
                    <ChevronUpIcon className="w-8 h-8 text-teal-600" />
                </button>
                <p>{amount}</p>
                <button onClick={() => dispatch(decreaseItem(id))}>
                    <ChevronDownIcon className="w-8 h-8 text-teal-600"/>
                </button>
            </div>
        </div>
        
    </article>
  )
}

export default Item