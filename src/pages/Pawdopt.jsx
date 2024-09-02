import React from 'react'
import dog3 from '../assets/images/dog3.jpg'
import dogcard1 from '../assets/images/dog-card-1.jpg'
import dogcard2 from '../assets/images/dog-card-2.jpg'
import dogcard4 from '../assets/images/dog-card-6.jpg'
import dogcard5 from '../assets/images/dog-card-5.jpg'
import catcard1 from '../assets/images/cat-card-8.jpg'
import catcard2 from '../assets/images/cat-card-9.jpg'
import catcard3 from '../assets/images/cat-card-10.jpg'
import catcard4 from '../assets/images/cat-card-4.jpg'
import { FlipWords } from '../components/Ace-ui/Flip-words'
import { CardBody, CardContainer, CardItem } from '../components/Ace-ui/3d-Card';
import PagesFooter from '../sections/PagesFooter'


function Pawdopt() {

  const words = ["Furry Friend ?", "Woof Buddy ?", "Tail-wagger ?", "Pawed Partner ?"];


  return (
    <>
      <div className='flex flex-1 flex-col justify-center'>
        <div className='flex flex-1 justify-center items-center '>
          <img src= {dog3} alt="dog 3 image" className='shadow-xl rounded-md '/>
        </div>

        <div className="h-[20rem] flex justify-center items-center px-4">
          <div className="text-6xl mx-auto font-normal text-neutral-600 gap-y-3 pl-6 ">
            Want a
            <FlipWords words={words} /> <br />
            Don't Shop, Adopt!
          </div>
        </div>

        <div className='flex flex-1 flex-wrap justify-evenly gap-3'>
          <CardContainer className="inter-var w-[500px] ">
            <CardBody className="bg-gray-50 relative group/card flex flex-1 flex-col dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="50" className='w-full flex justify-center items-center flex-col mt-8 '>
              
              <img
                    src={dogcard1}
                    height="900"
                    width="900"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
              <h1 className='text-xl font-semibold gap-x-2 px-2 text-[#B95D2F]'>Pluto - A Golden Retriver</h1>
              <h1 className='text-lg font-semibold gap-x-2 px-2'>2 year old boy , Very Active and Friendly.</h1>
              <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit est ipsum vitae expedita temporibus reprehenderit, iure animi provident laudantium impedit, assumenda atque voluptate mollitia! Excepturi molestias animi laboriosam impedit iusto?</p>
              <button className='bg-[#B95D2F] px-4 py-2 text-white mt-6 shadow-xl ring ring-slate-900/5 rounded-2xl'>Wanna Adopt</button>
              </CardItem>
            </CardBody>
          </CardContainer>


          <CardContainer className="inter-var w-[500px] ">
            <CardBody className="bg-gray-50 relative group/card flex flex-1 flex-col dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="50" className='w-full flex justify-center items-center flex-col mt-8 '>
              
              <img
                    src={catcard1}
                    height="900"
                    width="900"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
              <h1 className='text-xl font-semibold gap-x-2 px-2 text-[#B95D2F]'>Whiskers - Maine Coon</h1>
              <h1 className='text-lg font-semibold gap-x-2 px-2'>Whiskers is a sociable Maine Coon with a friendly.</h1>
              <p className='pt-4'>Whiskers is a sociable Maine Coon with a friendly, laid-back demeanor. Known for their large size and tufted features, Maine Coons are gentle giants who get along well with kids and other pets.
              </p>

              <button className='bg-[#B95D2F] px-4 py-2 text-white mt-6 shadow-xl ring ring-slate-900/5 rounded-2xl'>Wanna Adopt</button>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var w-[500px] ">
            <CardBody className="bg-gray-50 relative group/card flex flex-1 flex-col dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="50" className='w-full flex justify-center items-center flex-col mt-8 '>
              
              <img
                    src={dogcard2}
                    height="900"
                    width="900"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
              <h1 className='text-xl font-semibold gap-x-2 px-2 text-[#B95D2F]'>Leo - A Labrodour Retriver</h1>
              <h1 className='text-lg font-semibold gap-x-2 px-2'>Leo is a playful and energetic Labrador Retriever with a love for outdoor adventures.</h1>
              <p className='pt-4'>Leo's loyalty and eagerness to please make him an ideal family pet, great with kids, and always ready for a game of fetch or a swim in the lake. His intelligence and trainable nature also make him a perfect candidate for service and therapy work.</p>

              <button className='bg-[#B95D2F] px-4 py-2 text-white mt-6 shadow-xl ring ring-slate-900/5 rounded-2xl'>Wanna Adopt</button>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var w-[500px] ">
            <CardBody className="bg-gray-50 relative group/card flex flex-1 flex-col dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="50" className='w-full flex justify-center items-center flex-col mt-8 '>
              
              <img
                    src={catcard2}
                    height="900"
                    width="900"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
              <h1 className='text-xl font-semibold gap-x-2 px-2 text-[#B95D2F]'>Luna - A Sphynx cat</h1>
              <h1 className='text-lg font-semibold gap-x-2 px-2'>2 year old boy , Very Active and Friendly.</h1>
              <p className='pt-4'>Luna is a unique Sphynx cat with a striking hairless look and a warm, affectionate personality. Known for their playful and attention-loving nature, Sphynx cats like Luna thrive on snuggles and companionship. She’s ideal for those seeking a distinctive and close-knit pet.</p>

              <button className='bg-[#B95D2F] px-4 py-2 text-white mt-6 shadow-xl ring ring-slate-900/5 rounded-2xl'>Wanna Adopt</button>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var w-[500px] ">
            <CardBody className="bg-gray-50 relative group/card flex flex-1 flex-col dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="50" className='w-full flex justify-center items-center flex-col mt-8 '>
              
              <img
                    src={dogcard4}
                    height="900"
                    width="900"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
              <h1 className='text-xl font-semibold gap-x-2 px-2 text-[#B95D2F]'>Luna - A Samoyed</h1>
              <h1 className='text-lg font-semibold gap-x-2 px-2'>Luna , 5 Year Old Tail Wagger</h1>
              <p className='pt-4'>Luna is a striking Samoyed with a friendly demeanor and distinctive white coat. Known for their social and gentle nature, Samoyeds like Luna are affectionate and playful, making her a joyful addition to an active and loving family.
              </p>

              <button className='bg-[#B95D2F] px-4 py-2 text-white mt-6 shadow-xl ring ring-slate-900/5 rounded-2xl'>Wanna Adopt</button>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var w-[500px] ">
            <CardBody className="bg-gray-50 relative group/card flex flex-1 flex-col dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="50" className='w-full flex justify-center items-center flex-col mt-8 '>
              
              <img
                    src={catcard3}
                    height="900"
                    width="900"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
              <h1 className='text-xl font-semibold gap-x-2 px-2 text-[#B95D2F]'>Bella - A Ragdoll Cat</h1>
              <h1 className='text-lg font-semibold gap-x-2 px-2'>Bella is a charming Ragdoll cat </h1>
              <p className='pt-4'>Bella's affectionate nature and calm demeanor make her a great companion for both adults and children. She loves to be held and cuddled, often following her owners around the house.</p>

              <button className='bg-[#B95D2F] px-4 py-2 text-white mt-6 shadow-xl ring ring-slate-900/5 rounded-2xl'>Wanna Adopt</button>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var w-[500px] ">
            <CardBody className="bg-gray-50 relative group/card flex flex-1 flex-col dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="50" className='w-full flex justify-center items-center flex-col mt-8 '>
              
              <img
                    src={dogcard5}
                    height="900"
                    width="900"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
              <h1 className='text-xl font-semibold gap-x-2 px-2 text-[#B95D2F]'>Sunny - A Golden Retriver</h1>
              <h1 className='text-lg font-semibold gap-x-2 px-2'>Sunny is the perfect blend of friendliness and intelligence.</h1>
              <p className='pt-4'> Golden Retrievers like Sunny are playful, loyal, and great with kids and pets. They thrive in active families, enjoying walks, fetch, and playful antics.
              </p>

              <button className='bg-[#B95D2F] px-4 py-2 text-white mt-6 shadow-xl ring ring-slate-900/5 rounded-2xl'>Wanna Adopt</button>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var w-[500px] ">
            <CardBody className="bg-gray-50 relative group/card flex flex-1 flex-col dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="50" className='w-full flex justify-center items-center flex-col mt-8 '>
              
              <img
                    src={catcard4}
                    height="900"
                    width="900"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
              <h1 className='text-xl font-semibold gap-x-2 px-2 text-[#B95D2F]'>Oliver - A Scottish Fold Cat</h1>
              <h1 className='text-lg font-semibold gap-x-2 px-2'>Oliver is a sweet and affectionate Scottish Fold cat</h1>
              <p className='pt-4'>Oliver is laid-back and enjoys lounging around the house, but he also has a playful side, especially when chasing after his favorite toy. His gentle and adaptable personality makes him well-suited for a variety of households</p>

              <button className='bg-[#B95D2F] px-4 py-2 text-white mt-6 shadow-xl ring ring-slate-900/5 rounded-2xl'>Wanna Adopt</button>
              </CardItem>
            </CardBody>
          </CardContainer>

          
        </div>

        <div>
        <div className='bg-white'>
            <PagesFooter />
          </div>
        </div>
      </div>
    </>
  )
}


export default Pawdopt