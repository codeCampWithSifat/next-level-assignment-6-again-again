/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import RootLayout from '@/components/layout/RootLayout'
import React from 'react'

const HomePage = () => {
  return (
   <>
     <div className="hero h-[1000px] mt-25  bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://freepngimg.com/download/computer_pc/5-2-computer-pc-png-clipart.png"
            className="lg:w-1/2 md:w-4/5 sm:w-4/5 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Chose Your Own Computer</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi. n deleniti eaque aut
              repudiandae et a id nisi. Provident cupiditate voluptatem et in.
              Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
   </>
  )
}

export default HomePage

HomePage.getLayout = function getLayout (page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}