import { Component, createSignal } from 'solid-js'
import './index.css'
import main from './assets/main.png'

const Footer: Component = () => {
  return (
    <div class='bg-grey absolute py-1 text-center bottom-0 w-screen'>
      <p class='text-sm text-grey1 cursor-pointer'>
        developed by @aadityarajkumawat 🚀
      </p>
    </div>
  )
}

const App: Component = () => {
  const [page, setPage] = createSignal('jwifi')

  return (
    <div class='bg-black h-screen'>
      <div class='flex flex-col items-end w-screen px-20 py-10'>
        <div
          class={`text-white underline cursor-pointer`}
          onClick={() => setPage(page() === 'jwifi' ? 'wtf?' : 'jwifi')}
        >
          {page() === 'jwifi' ? 'wtf?' : 'jwifi'}
        </div>
      </div>

      {page() === 'jwifi' ? (
        <div class='w-screen flex flex-col items-center'>
          <p class='underline text-2xl mb-2'>jwifi</p>
          <p class='text-lg text-grey1'>no more logging into Wi-Fi</p>

          <div class='w-full relative flex'>
            <img class={`m-auto relative main-anim-in`} src={main} alt='' />
            <div class='relative shade-over-main shade-anim-in'></div>
            <div class='text-center absolute bg-black w-screen h-64 left-0 bottom-0'>
              <div class='w-1/3 m-auto py-10'>
                <p class='text-lg mb-5'>
                  Logging in college's WiFi every now and then could be annoying
                  at times, especially when you need to type in credentials each
                  time.
                </p>
                <p class='text-lg'>
                  So, here is a solution for our university Wi-Fi, a tool that
                  will keep you logged in forever, so don't have to the annoying
                  login anymore.
                </p>
              </div>

              <button class='bg-blue-600 rounded-md py-4 px-24'>
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div class='w-screen flex flex-col items-center'>
          <div class='w-screen text-center px-10 mb-10'>
            <p class='text-2xl'>wtf?</p>
          </div>
          <div class='w-full relative flex px-20 justify-center'>
            <img class={`relative`} src={main} alt='' />
            <div class='mt-10 w-1/3'>
              <p class='mb-5 text-lg'>
                I initially developed this as a personal project where I had a
                script running in the background to ensure that the user stays
                logged in, eventually I realized it won't be a bad idea to
                convert this complicated bash script + cron job system into an
                easy to configure tool.
              </p>

              <p class='mb-5 text-lg'>
                This is when I started to think about jwifi, and decided to
                build it for all major platforms (Linux, MacOS and Windows). It
                works as a background job that handles automatic login
                synchronous and non-blocking.
              </p>

              <p class='mb-2 text-lg'>Features:</p>
              <ol class='text-lg'>
                <li>1. Autostart on power on.</li>
                <li>2. Update Credentials.</li>
                <li>
                  3. No login required even on router change, truly eliminates
                  login step, even moving across blocks does not affect.
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default App
