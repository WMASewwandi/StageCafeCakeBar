import React, { useContext } from 'react'

const CartTotal = () => {


  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <h1>Cart Total</h1>

        </div>

        <div className='flex flex-col gap-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                

            </div>
            <hr />

            <div className='flex justify-between'>
                <p>shipping Fee</p>
                

            </div>
            <hr />


            <div className='flex justify-between'>
                <b>Total</b>
                

            </div>

        </div>

    </div>
  )
}

export default CartTotal