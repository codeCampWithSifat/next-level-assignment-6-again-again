import RootLayout from '@/components/layout/RootLayout'
import React from 'react'

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