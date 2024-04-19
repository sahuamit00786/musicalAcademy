'use client'
import React from 'react'
import Link from 'next/link'
import courseData from '../data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient'

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

const FeaturedCourses = () => {

    const featuredCourses = courseData.courses.filter
    ((course:Course)=>course.isFeatured)

  return (
    <div className='py-12 bg-gray-900 py-[100px] px-[60px]'>
        <div>
            <h2 className='text-green-600 text-center'>FEATURED COURSES</h2>
            <h1 className='mt-2 text-center text-lg'>LEARN WITH THE BEST</h1>
        </div>
        <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                {
                    featuredCourses.map((course:Course)=>(
                        <div key={course.id} className='flex justify-center'>
                            <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                    <p>{course.title}</p>
                                    <p>{course.description}</p>
                                    <Link href={`/courses/${course.slug}`}>
                                        Learn more
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='mt-20 text-center'>
            <Link href={'/'} className='border rounded-[12px] px-9 py-3 hover:text-gray-900 hover:bg-white duration-200 '>
                View all courses
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses