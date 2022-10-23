import type { Component } from 'solid-js'
import right from './assets/right.png'

const App: Component = () => {
  return (
    <div class='px-28 py-14'>
      <div class='text-right underline'>wtf?</div>
      <div class='flex justify-between py-20'>
        <div class='flex flex-col w-1/2 justify-center pb-28'>
          <div class='flex py-8 items-center'>
            <div class='mr-10 border-neutral-700 border-2 px-8 py-3 rounded-xl text-xl'>
              JWi-Fi
            </div>
            <p class='text-zinc-500'>developed by @edydee</p>
          </div>
          <div class='mb-3'>
            <p class='text-xl'>
              Logging in college's WiFi every now and then could be annoying at
              times, especially when you need to type in credentials each time.
            </p>
          </div>

          <div class='mb-4'>
            <p class='text-xl'>
              So, here is a solution for our university WiFi, a tool that will
              automatically log you in each time you start your system.
            </p>
          </div>

          <div>
            <button class='bg-black text-white px-5 py-3 rounded-lg'>
              Download for Debian
            </button>
          </div>
        </div>
        <div>
          <img src={right} alt='' />
        </div>
      </div>
    </div>
  )
}

export default App
