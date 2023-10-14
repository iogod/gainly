import React from 'react'
import SignInUI from './SignInUI'
import Bulls from "../imgs/bulls.png"

function SignInPage() {
  return (
    <div className='h-screen   w-full bg-slate-600'>
        <div className=' grid grid-rows-1 grid-cols-2 h-full w-full mx-12 justify-start items-center '>
            <div className=''>
                <img className='w-1/2 m-auto' src={Bulls}></img>
            </div>
            {/* <SignInUI className='  '/> */}
           
        </div>
    </div>
  )
}

export default SignInPage