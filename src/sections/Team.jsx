import React from 'react'
import { AnimatedTooltip } from '../components/Ace-ui/Animatedtooltip'
import bharath from '../assets/images/bharath.jpg'

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
          name: "Hemanth Rawat",
          designation: "22EG110D50",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          name: "Akshay Laddu",
          designation: "22EG110D49",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 5,
          name: "Akshitha",
          designation: "22EG110D51",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        },
        {
          id: 6,
          name: "Yashaswini Yadav",
          designation: "22EG110D32",
          image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        },
      ];
  return (
    <>
        <div className='flex flex-1 flex-col gap-y-16 justify-center relative overflow-hidden items-center  my-[50px] py-[100px]'>
            <div className='flex flex-1 justify-center'>
                <p className='font-semibold text-3xl text-yellow-600'>Team - Hi Nanna</p>
            </div>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items = {people}/>
            </div>
        </div>
    </>
  )
}

export default Team