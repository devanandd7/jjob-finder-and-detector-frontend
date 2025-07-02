import React from 'react'
import Navbar from './navbar'
import SecondPage from './secondPage'
import SplinePreviewTwo from './SplinePreviewTwo'
import SplinePreview from './SplinePreview'

const All = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <div className="flex flex-col w-full">
        {/* First section: full screen, centered */}
        <div className="h-screen w-full flex items-center justify-center bg-blue-600 text-white text-4xl font-bold">
          <SplinePreviewTwo />
        </div>
        {/* Second section: dynamic height, grows with content */}
        <div className="w-full bg-red-600 text-white text-4xl font-bold">
          <SecondPage />
        </div>
        {/* Third section: at least full screen, grows if needed */}
        <div className="min-h-screen w-full bg-green-600 text-white text-4xl font-bold">
          <SplinePreview />
        </div>
      </div>
    </div>
  )
}

export default All