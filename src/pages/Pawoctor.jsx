import React from 'react'
import { FlipWords } from '../components/Ace-ui/Flip-words'
import dog4 from '../assets/images/dog4.jpg'
import dog7 from '../assets/images/dog7.jpg'
import { TextGenerateEffect } from '../components/Ace-ui/TextGenerate';
import { PlaceholdersAndVanishInput } from '../components/Ace-ui/PlaceHolder';
import PagesFooter from '../sections/PagesFooter';

function Pawoctor() {

  const placeholders = [
    "Are you curious about your pet's overall health and well-being?",
    "Do you have any questions about your pet’s diet and nutrition?",
    "Is there a behavior or habit your pet has that you’re unsure about?",
    "Do you have any concerns about your pet's dental health?",
    "Would you like advice on how to keep your pet calm during visits to the clinic?",
  ];
 
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  const words = ["Vet ?", "Blue Cross ?", "Animal Clinic ?"];
  const word2 = "At our animal clinic, we understand that pets are more than just animals they're cherished members of your family. Our dedicated team of veterinarians and animal care specialists is committed to providing top-notch medical care with a gentle touch. Whether it’s a routine check-up, emergency treatment, or specialized care, we combine state-of-the-art technology with years of experience to ensure your pet’s health and happiness.";
  const word1 = "At our animal clinic, we understand that pets are more than just animals they're cherished members of your family. Our dedicated team of veterinarians and animal care specialists is committed to providing top-notch medical care with a gentle touch. Whether it’s a routine check-up, emergency treatment, or specialized care, we combine state-of-the-art technology with years of experience to ensure your pet’s health and happiness."
  return (
    <>
      <div className='flex justify-center items-center flex-col'>
        <div>
          <div className="text-5xl mx-auto font-normal text-neutral-600   flex flex-1 justify-center items-center">
            Looking for {" "}
            <FlipWords words={words} />
          </div>
        </div>
        <div className='flex flex-row w-full  '>
          <div className='flex flex-1 w-[60%] justify-center py-32'>
            <div className=' font-poppins font-extralight px-12'>
              <TextGenerateEffect words={word1}  />
            </div>
          </div>
          <div className='flex flex-1 w-[40%] justify-center items-center pt-6'>
            <img src={dog4} alt="dog4" height={200} width={720} className='rounded-lg shadow-2xl h-[350px] w-[620px]' />
          </div>
        </div>


        <div className='flex flex-row w-full  '>
          <div className='flex flex-1 w-[60%] justify-center items-center pt-6'>
            <img src={dog7} alt="dog4" height={200} width={720} className='rounded-lg shadow-2xl h-[350px] w-[620px]' />
          </div>
          <div className='flex flex-1 w-[40%] justify-center py-32'>
            <div className='text-md font-poppins font-extralight px-12'>
              <TextGenerateEffect words={word2}  /> 
            </div>
          </div>
        </div>

        <div className='px-4 flex flex-1 flex-col justify-center py-4 gap-y-3'>
          <h2 className='pl-24 font-poppins font-semibold'>Want to Know , but doesnot Know what to know</h2>
          <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
        </div>
        <div className=' mt-10 w-full'>
          <PagesFooter />
        </div>
      </div>
    </>
  )
}

export default Pawoctor