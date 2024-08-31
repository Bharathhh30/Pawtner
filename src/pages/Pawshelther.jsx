import React from 'react'
import { BackgroundBeamsWithCollision } from '../components/Ace-ui/Beams'

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../components/Ace-ui/Text-reveal";
import PagesFooter from '../sections/PagesFooter';


function Pawshelther() {

  return (
    <>
      <div className='flex flex-1 justify-center flex-col'>
        

        <div className="flex items-center justify-center  h-[40rem] rounded-2xl w-full">
          <TextRevealCard
            text="Slide this Woof          "
            revealText="Love is a four-legged word."
          >
            <TextRevealCardTitle>
            Every animal deserves a place to call home, where love, safety, and comfort are always in abundance
            </TextRevealCardTitle>
            <TextRevealCardDescription>
            The soul is the same in all living creatures, although the body of each is different.
            </TextRevealCardDescription>
          </TextRevealCard>
        </div>

        <div>
          <BackgroundBeamsWithCollision>
            <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            Paws are made for holding, not {" "}
              <div className="relative mx-auto w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] flex flex-1 justify-center flex-col">
                <div className=" left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className="">wandering alone.</span>
                </div>
                
              </div>
            </h2>
          </BackgroundBeamsWithCollision>
        </div>
        <div>
          <PagesFooter />
        </div>
    
      </div>
    </>
  )
}

export default Pawshelther