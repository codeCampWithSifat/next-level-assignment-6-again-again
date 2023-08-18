import RootLayout from '@/components/layout/RootLayout'
import React from 'react'

const HomePage = () => {
  return (
    <div className='text-4xl text-violet-900'>HomePage</div>
  )
}

export default HomePage

HomePage.getLayout = function getLayout (page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}