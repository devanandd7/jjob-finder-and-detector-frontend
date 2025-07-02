import React from 'react'
import Navbar from './navbar'
import SecondPage from './secondPage'
import SplinePreviewTwo from './SplinePreviewTwo'
import SplinePreview from './SplinePreview'

const All = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Example Navbar usage */}
      <Navbar />

      <div className="flex flex-col w-full">
        <div className="h-screen w-full flex items-center justify-center bg-blue-600 text-white text-4xl font-bold">
          <SplinePreviewTwo />
        </div>
        <div className="h-screen w-full flex items-center justify-center bg-red-600 text-white text-4xl font-bold">
       <seccondPage />
        </div>
        <div className="h-screen w-full flex items-center justify-center bg-green-600 text-white text-4xl font-bold">
          {/* <SplinePreview /> */}
        </div>
      </div>
    </div>
  )
}

export default All