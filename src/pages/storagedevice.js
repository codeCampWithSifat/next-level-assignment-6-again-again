import RootLayout from '@/components/layout/RootLayout'
import React from 'react'

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