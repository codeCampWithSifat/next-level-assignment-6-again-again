import React from 'react'
import RootLayout from './components/layout/RootLayout'

const PowerSupply = () => {
  return (
    <div>PowerSupply</div>
  )
}

export default PowerSupply

PowerSupply.getLayout = function getLayout (page) {
  return (
      <RootLayout>{page}</RootLayout>
  )
}