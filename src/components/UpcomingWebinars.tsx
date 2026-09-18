import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: 'Understanding Music Theory',
    description:
      'Dive deep into the fundamentals of music theory and enhance your musical skills.',
  },
  {
    title: 'Mastering the Guitar',
    description:
      'Learn essential guitar techniques, chords, and playing styles from experienced musicians.',
  },
  {
    title: 'The Art of Vocal Training',
    description:
      'Discover professional vocal techniques and improve your pitch, tone, breathing, and confidence.',
  },
  {
    title: 'Introduction to Piano',
    description:
      'Learn the basics of piano playing, understand chords, and start creating beautiful melodies.',
  },
  {
    title: 'Music Production Essentials',
    description:
      'Explore the fundamentals of music production, recording, mixing, and creating professional tracks.',
  },
  {
    title: 'Songwriting Masterclass',
    description:
      'Learn how to turn your ideas into meaningful songs with better lyrics, melodies, and arrangements.',
  },
  {
    title: 'Rhythm and Drumming',
    description:
      'Improve your sense of rhythm and learn essential drumming patterns used across different music genres.',
  },
  {
    title: 'Live Performance Skills',
    description:
      'Build confidence on stage and learn practical techniques for delivering powerful live performances.',
  },
]
function UpcomingWebinars() {
  return (
    <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
            </h2>

            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
            </p>
        </div>

        <div className="mt-10">
            <HoverEffect 
							items={featuredWebinars.map((webinar) => (
								{
									title: webinar.title,
									description: webinar.description,
									link: "/"
								}
							))}
						/>
        </div>

        <div className="mt-10 text-center">
            <Link
							href="/"
							className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-teal-500/50 bg-teal-500/10 text-teal-400 font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-teal-500 hover:text-black hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/25"
						>
							View All Webinars
						</Link>
        </div>

        </div>
    </div>
	)
}

export default UpcomingWebinars
