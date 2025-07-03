import React, { lazy, Suspense } from 'react'
import Navbar from './navbar'
import SecondPage from './secondpage2'

const SplinePreviewTwo = lazy(() => import('./SplinePreviewTwo'))
const SplinePreview = lazy(() => import('./SplinePreview'))

const All = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="flex flex-col w-full">
        <div className="h-screen w-full flex items-center justify-center bg-blue-600 text-white text-4xl font-bold">
          <Suspense fallback={<div>Loading 3D...</div>}>
            <SplinePreviewTwo />
          </Suspense>
        </div>
        <div className="w-full bg-red-600 text-white text-4xl font-bold">
          <SecondPage />
        </div>
        <div className="min-h-screen w-full bg-green-600 text-white text-4xl font-bold">
          <Suspense fallback={<div>Loading 3D...</div>}>
            <SplinePreview />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default All