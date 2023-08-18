import React from 'react'
import RootLayout from '@/components/layout/RootLayout'

const Monitor = () => {
  return (
    <div>Monitor</div>
  )
}

export default Monitor

Monitor.getLayout = function getLayout (page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}