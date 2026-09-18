"use client"
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructors = [
  {
    id: 1,
    name: 'Elena Briggs',
    designation: 'Vocal Coach',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  },
  {
    id: 2,
    name: 'James Carter',
    designation: 'Guitar Instructor',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1'
  },
  {
    id: 3,
    name: 'Sophia Williams',
    designation: 'Piano Instructor',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1'
  },
  {
    id: 4,
    name: 'Daniel Morgan',
    designation: 'Drum Instructor',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d'
  },
  {
    id: 5,
    name: 'Olivia Parker',
    designation: 'Music Theory Teacher',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce'
  },
  {
    id: 6,
    name: 'Lucas Anderson',
    designation: 'Violin Instructor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
  }
];

function Instructores() {
  return (
    <div className="relative h-160 overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
                Meet Our Instructors
            </h1>

            <p className="text-lg md:text-xl text-gray-200 text-center max-w-2xl">
                Discover the talented professionals who will guide your musical journey.
            </p>

            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructores
