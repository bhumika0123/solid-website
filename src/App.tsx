import type { Component } from 'solid-js'
import right from './assets/right.png'

// i'll need to change the domain and get a new one
const App: Component = () => {
  return (
    <div class='px-28 py-14'>
      <div class='text-right underline'>wtf?</div>
      <div class='flex justify-center text-center py-20 mt-40'>
        <div class='flex flex-col justify-center items-center w-1/3'>
          <div class='flex py-8 items-center justify-center relative w-full'>
            <div class='mr-10 border-neutral-700 border-2 px-10 py-3 rounded-xl text-2xl'>
              <p>jwifi</p>
            </div>
            {/* <p class='text-zinc-500 absolute text-base'>developed by @edydee</p> */}
          </div>
          <div class='mb-3'>
            <p class='text-lg'>
              Logging in college's WiFi every now and then could be annoying at
              times, especially when you need to type in credentials each time.
            </p>
          </div>

          <div class='mb-5'>
            <p class='text-lg'>
              So, here is a solution for our university WiFi, a tool that will
              automatically log you in each time you start your system.
            </p>
          </div>

          <div>
            <button class='bg-black text-white px-5 py-3 rounded-lg'>
              Download for MacOS
            </button>
          </div>
        </div>
        {/* <div class='relative w-1/2'>
          <img class='absolute top-0 left-0' src={right} alt='' />
        </div> */}
      </div>
    </div>
  )
}

export default App
