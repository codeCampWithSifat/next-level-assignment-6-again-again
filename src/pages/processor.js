import React from 'react'
import RootLayout from './components/layout/RootLayout'

const Processor = () => {
  return (
    <div>Processor</div>
  )
}

export default Processor

Processor.getLayout = function getLayout (page) {
  return (
      <RootLayout>{page}</RootLayout>
  )
}