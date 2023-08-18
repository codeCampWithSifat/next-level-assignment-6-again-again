import RootLayout from '@/components/layout/RootLayout'
import React from 'react'

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