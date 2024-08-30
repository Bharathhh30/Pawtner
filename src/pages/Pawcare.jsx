import React from 'react'
import {  TypewriterEffectSmooth } from '../components/Ace-ui/Typewritter-effect'
import { LayoutGrid } from '../components/Ace-ui/Layout-grid';
import delievery from '../assets/icons/delievery.png'
import gaurentee from '../assets/icons/guarentee.png'
import return1 from '../assets/icons/return1.png'
import support from '../assets/icons/support.png'
import PawCard from '../components/PawCard';
import PagesFooter from '../sections/PagesFooter';
// import OfferCards from '../components/OfferCards';
// import catfood from '../assets/images/catfood.jpg'
// import dogfood from '../assets/images/dogfood.jpg'
// import petbed from '../assets/images/petbed.jpg'
// import petclothes from '../assets/images/petclothes.jpg'


const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life Hi Nanna.
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life Hi Nanna.
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life Hi Nanna.
      </p>
    </div>
  );
};
const SkeletonEight = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life Hi Nanna.
      </p>
    </div>
  );
};
const SkeletonNine = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life Hi Nanna Yashna.
      </p>
    </div>
  );
};
const SkeletonTen = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life Hi Nanna Yashna.
      </p>
    </div>
  );
};
const SkeletonEleven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life Hi Nanna Yashna.
      </p>
    </div>
  );
};
const SkeletonTwelve = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life Hi Nanna Yashna.
      </p>
    </div>
  );
};





function Pawcare() {
  const words = [
    {
      text: " Best",
    },
    
    {
      text: " care ",
    },
    {
      text: "products ",
    },
    {
      text: "provided",
    },
    {
      text: "by",
    },
    {
      text: "Pawtner.",
      className: "text-[#B95D2F]",
    },
  ];

  
   
  const cards1 = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "https://img.freepik.com/free-photo/flat-lay-toys-with-food-bowl-fur-brush-dogs_23-2148949620.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "https://img.freepik.com/free-photo/pet-accessories-still-life-concept-with-pet-dry-food_23-2148949564.jpg",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "https://img.freepik.com/premium-photo/pet-care-concept-various-pet-accessories-tools-yellow-background-flat-lay_154515-6903.jpg",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "https://t3.ftcdn.net/jpg/06/83/12/80/360_F_683128030_F6cIlImFH0cvxfUPqFDIKsSOaYyEATRJ.jpg",
    },
  ];
  const cards2 = [
    {
      id: 5,
      content: <SkeletonFive />,
      className: "md:col-span-2",
      thumbnail:
        "https://media.istockphoto.com/id/1331089236/photo/large-gray-cat-washes-in-a-basin.jpg?s=612x612&w=0&k=20&c=m3gk_lTCT5Gu4tIyrMsEbiqV7dhPYO_3i_dswLIkE8M=",
    },
    {
      id: 6,
      content: <SkeletonSix />,
      className: "col-span-1",
      thumbnail:
        "https://img.freepik.com/free-photo/smart-feeder-pets-still-life_23-2151310885.jpg",
    },
    {
      id: 7,
      content: <SkeletonSeven />,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0JTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 8,
      content: <SkeletonEight />,
      className: "md:col-span-2",
      thumbnail:
        "https://cfimg.wowcher.co.uk/cdn-cgi/image/height=487,width=727,quality=85,format=auto/https://static.wowcher.co.uk/images/deal/29797806/1207750.jpg",
    },
  ];
  const cards3 = [
    {
      id: 9,
      content: <SkeletonNine />,
      className: "md:col-span-2",
      thumbnail:
        "https://blog.converted.in/hubfs/Pet%20Products%20eCommerce%20Trends.jpg",
    },
    {
      id: 10,
      content: <SkeletonTen />,
      className: "col-span-1",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ts7m3SOPHyIozMe42bldlvStazou9DbYLw&s",
    },
    {
      id: 11,
      content: <SkeletonEleven />,
      className: "col-span-1",
      thumbnail:
        "https://www.smurfitkappa.com/-/m/images/page-hero-610-x-350/pet-food.png?rev=16e0d518495f49d4997c4eded517bf28",
    },
    {
      id: 12,
      content: <SkeletonTwelve />,
      className: "md:col-span-2",
      thumbnail:
        "https://bellyrubs.in/cdn/shop/files/1510_by_450_banner.png?v=1715245333&width=750",
    },
  ];
  return (
    <>
      <div className='flex flex-1 flex-col justify-center'>
        <div className='flex flex-1 justify-center'>
          <TypewriterEffectSmooth words={words}/>
        </div>

        <div className="h-screen py-20 w-full">
          <LayoutGrid cards={cards1} />
          <LayoutGrid cards={cards2} />
          <LayoutGrid cards={cards3} />
          <div className='flex flex-1 flex-row justify-between gap-6 px-24 my-4'>
            <PawCard iconUrl={delievery} iconAlt="delievery" heading="Free Delievery" subtext="Free delievery on all orders"/>
            <PawCard iconUrl={gaurentee} iconAlt="gaurentee" heading="Quality Gaurentee" subtext="Quality products gaurenteed"/>
            <PawCard iconUrl={return1} iconAlt="return" heading="Easy Return" subtext="Easy return policy"/>
            <PawCard iconUrl={support} iconAlt="support" heading="24/7 Support" subtext="24/7 customer support"/>
          </div>

          <div className='mt-5'>
            <PagesFooter />
          </div>
          
        </div>

        

      </div>
    </>
  )
}

export default Pawcare