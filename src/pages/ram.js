import React from 'react'
import RootLayout from './components/layout/RootLayout'

const Ram = () => {
  return (
    <div>Ram</div>
  )
}

export default Ram

Ram.getLayout = function getLayout (page) {
  return (
      <RootLayout>{page}</RootLayout>
  )
}