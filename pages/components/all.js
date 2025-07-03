import React, { lazy, Suspense, useState, useEffect } from 'react'
import Navbar from './navbar'
import SecondPage from './secondpage2'
import Page3 from './page3'
import Page4 from './page4'
import Intro from './intro'
import TextCarouselPage from './crousal'
import CardRevealPage from './cardanime'
import ImageTextRevealPage from './image3d'

const SplinePreviewTwo = lazy(() => import('./SplinePreviewTwo'))
const SplinePreview = lazy(() => import('./SplinePreview'))

const All = () => {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => setShowIntro(false), 7000)
      return () => clearTimeout(timer)
    }
  }, [showIntro])

  if (showIntro) {
    return (
      <div className="w-full min-h-screen bg-black text-white flex items-center justify-center">
        <Intro />
      </div>
    )
  }

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
        <TextCarouselPage />
        <div className="min-h-screen w-full bg-green-600 text-white text-4xl font-bold">
          <Suspense fallback={<div>Loading 3D...</div>}>
            <CardRevealPage />
          </Suspense>
        </div>
        <div className="min-h-screen w-full bg-green-600 text-white text-4xl font-bold">
          <Suspense fallback={<div>Loading 3D...</div>}>
            <ImageTextRevealPage />
          </Suspense>
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