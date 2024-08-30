import React from 'react'
import { AnimatedTooltip } from '../components/Ace-ui/Animatedtooltip'
import bharath from '../assets/images/bharath.jpg'
import Hemanth from '../assets/images/Hemanth.jpg'

function Team() {

    const people = [
        {
          id: 1,
          name: "Bharath",
          designation: "22EG110D57",
          image:
            "https://media.licdn.com/dms/image/v2/D5603AQFy5AxGtTPdBw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712835646645?e=1730332800&v=beta&t=5kx0Y4VTfqlkglI4YtCsIWpS7BfliWb4hiuxoTTFceM",
       },
        {
          id: 2,
          name: "Yashna",
          designation: "30-04-2005",
          image:
            "https://i.pinimg.com/736x/ae/1c/27/ae1c27c1b96f319fea79a86708a835a9.jpg",
        },
        {
          id: 3,
          name: "Hemanth ",
          designation: "22EG110D50",
          image:
                // {Hemanth}
            "https://i.postimg.cc/fWPGv7tz/Screenshot-2024-08-30-203214.png",
        },
        {
          id: 4,
          name: "Akshay ",
          designation: "22EG110D49",
          image:
            "https://i.postimg.cc/Tw6whMxs/Whats-App-Image-2024-08-29-at-22-16-15-ce443148.jpg",
        },
        {
          id: 5,
          name: "Akshitha",
          designation: "22EG110D51",
          image:
            "https://i.postimg.cc/CK1yNcNK/Screenshot-2024-08-30-203325.png",
        },
        {
          id: 6,
          name: "Yashaswini ",
          designation: "22EG110D32",
          image:
          "https://i.postimg.cc/6qbsFShq/Screenshot-2024-08-30-210809.png",
        },
      ];
  return (
    <>
        <div className='flex flex-1 flex-col gap-y-16 justify-center relative overflow-hidden items-center  my-[50px] py-[100px]'>
            <div className='flex flex-1 justify-center'>
                <p className='font-semibold text-3xl text-yellow-600'>Team - Hi Nanna</p>
            </div>
            <div className="flex flex-row items-center justify-center mb-2 w-full">
                <AnimatedTooltip items = {people}/>
            </div>
        </div>
    </>
  )
}

export default Team