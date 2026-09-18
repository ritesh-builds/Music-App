'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
const musicSchoolTestimonials = [
  {
    quote:
      "This music school completely changed the way I understand music. The teachers are amazing and very supportive.",
    name: "Rahul Sharma",
    title: "Guitar Student",
  },
  {
    quote:
      "The instructors explain everything so clearly. I improved my skills much faster than I expected.",
    name: "Ananya Verma",
    title: "Piano Student",
  },
  {
    quote:
      "Amazing learning experience with great teachers and a friendly environment. I look forward to every class.",
    name: "Aman Kumar",
    title: "Vocal Student",
  },
  {
    quote:
      "I had never played the guitar before joining this school. The step-by-step lessons helped me build confidence quickly.",
    name: "Priya Mehta",
    title: "Guitar Student",
  },
  {
    quote:
      "The piano classes are engaging and easy to follow. My teacher always encourages me to experiment and improve.",
    name: "Arjun Malhotra",
    title: "Piano Student",
  },
  {
    quote:
      "The vocal training has helped me improve my pitch, confidence, and overall singing technique. Highly recommended!",
    name: "Sneha Kapoor",
    title: "Vocal Student",
  },
  {
    quote:
      "What I love most is the friendly atmosphere. Everyone is passionate about music, and the teachers genuinely care about students.",
    name: "Vikram Singh",
    title: "Drums Student",
  },
  {
    quote:
      "Joining this music school was one of the best decisions I made. The lessons are practical, enjoyable, and motivating.",
    name: "Neha Gupta",
    title: "Keyboard Student",
  },
];
function MusicSchoolTestimonialCards() {
	return (
  <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
{/* <h2 className="text-3xl m-10 md:text-4xl font-bold text-center bg-linear-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-8 tracking-tight">
  Hear our Harmony: Voices of success
</h2> */}
		<h2 className="text-3xl m-10 md:text-4xl font-bold text-center text-white mb-8 tracking-tight">
  		Hear our Harmony: Voices of success
		</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        <InfiniteMovingCards
          items={musicSchoolTestimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  </div>
)
}

export default MusicSchoolTestimonialCards;
