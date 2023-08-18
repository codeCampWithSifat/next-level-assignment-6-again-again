import React from 'react'
import RootLayout from '@/components/layout/RootLayout'

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