'use client'
import React from 'react'
import courseData from "../data/music_cources.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Course {
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)
  return (
    <div className="py-12 bg-black">
    <div>
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>

        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>
    </div>

    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {featuredCourses.map((course: Course) => (
          <div key={course.id} className="flex justify-center">
            <BackgroundGradient
              className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
            >
              <div className="p-4 sm:p-6 flex flex-col items-center text-center grow">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  {course.description}
                </p>
                <Link href={`/courses/${course.slug}`}>
                  Learn More
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-20 text-center">
      <Link
        href="/courses"
        className="inline-flex items-center justify-center rounded-lg border border-teal-500/50 bg-teal-500/10 px-6 py-3 text-sm font-semibold text-teal-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-400 hover:bg-teal-500 hover:text-black hover:shadow-lg hover:shadow-teal-500/25"
      >
        View All Courses →
      </Link>
    </div>
  </div>
  )
}

export default FeaturedCourses

