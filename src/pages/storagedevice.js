import React from 'react'
import RootLayout from '@/components/layout/RootLayout'

const StorageDevice = () => {
  return (
    <div>StorageDevice</div>
  )
}

export default StorageDevice

StorageDevice.getLayout = function getLayout (page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}