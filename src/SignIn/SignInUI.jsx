import React from 'react'

function SignInUI() {
  return (<div className='m-12  w-3/4'>
    <div className='text-5xl mb-12'>Corny Subtitle </div>
    <div className='flex flex-col gap-5 justify-center text-center'>
        
        <input className='rounded w-1/2 m-auto'></input>
        <input className='rounded w-1/2 m-auto'></input>
       
        <button > Sign In</button>
        <div>or</div>
        <div className='flex flex-row justify-evenly gap-2'>
            <div>Google Button</div>
            <div>Twitter Button</div>
        </div>
        <div >Sign Up</div>
    </div>
    </div>
  )
}

export default SignInUI