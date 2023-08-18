import RootLayout from '@/components/layout/RootLayout'
import React from 'react'

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