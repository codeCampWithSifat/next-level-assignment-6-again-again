import RootLayout from '@/components/layout/RootLayout'
import React from 'react'

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