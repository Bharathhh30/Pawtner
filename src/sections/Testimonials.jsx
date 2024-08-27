import React from 'react'
import { useState , useEffect } from 'react';
import { InfiniteMovingCards } from "../components/Ace-ui/MovingCards";

function Testimonials() {

    const testimonials = [
        {
          quote:
            "Milo is the most curious cat we've ever met! He's always exploring, playing with his toys, and keeping us entertained with his antics. We couldn't have asked for a better feline friend.",
          name: "Justin",
          title: "A playful and curious friend!",
        },
        {
          quote:
            "Luna is such a gentle and affectionate cat. She loves to curl up next to us and purrs her heart out. We love having her around and can't believe how much she completes our home!",
          name: "Varsha",
          title: "The sweetest cuddle buddy!",
        },
        {
          quote: "Adopting Buddy was a game-changer. His wagging tail and happy face greet us every day, and his loyalty is unmatched. We are so grateful to have him as a part of our family.",
          name: "Yashna",
          title: "Unconditional love and companionship!",
        },
        {
          quote:
            "Charlie has been a fantastic addition to our family. She's playful, affectionate, and has the cutest little personality. She's truly the light of our lives!",
          name: "Viraj",
          title: "Our little bundle of energy!",
        },
        {
          quote:
            "Adopting Pluto 🐶 has brought so much joy into our lives. He's loving, loyal, and always ready for a new adventure. We can't imagine our home without him now!",
          name: "Mahi",
          title: "The best decision ever!",
        },
      ];

  return (
    <>
        <div className='flex flex-1 flex-col gap-y-16 justify-center relative overflow-hidden items-center bg-white my-[90px] py-[100px]'>
            <div className='flex flex-1 justify-center' >
                <p className='text-6xl font-palanquin font-extrabold'>Real Stories from <span className='font-montserrat text-[#B95D2F]'>Real People</span></p>
                
            </div>

            <div>
                <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                />
            </div>
        </div>
    </>
  )
}

export default Testimonials