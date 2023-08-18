import RootLayout from '@/components/layout/RootLayout'
import React from 'react'

const Others = () => {
  return (
    <div>Others</div>
  )
}

export default Others

Others.getLayout = function getLayout (page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}