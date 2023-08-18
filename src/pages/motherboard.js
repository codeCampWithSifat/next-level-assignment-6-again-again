import React from 'react'
import RootLayout from '@/components/layout/RootLayout'

const MotherBoard = () => {
  return (
    <div>MotherBoard</div>
  )
}

export default MotherBoard

MotherBoard.getLayout = function getLayout (page) {
  return (
      <RootLayout>{page}</RootLayout>
  )
}