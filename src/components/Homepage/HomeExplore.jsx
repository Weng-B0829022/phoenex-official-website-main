'use client'
import React from 'react'
import Explore1 from "@/images/home/explore1.png"
import Image from "next/image"
import { Player  } from 'video-react';
const HomeExplore = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center mx-5 lg:mx-20 gap-10 my-40">
      <div className="w-full space-y-7 flex-grow-1 text-center lg:text-start ">
        <h2 className="text-3xl lg:text-5xl">Explore the Excitement</h2>
        <p className="text-cblue font-semibold text-lg lg:text-xl">Dive into Thrilling Video Content</p>
        <p className="text-clightGray leading-loose">Embark on a visual journey that captivates your senses. Our video section is a treasure trove of  excitement, featuring content that ranges from heart-pounding adventures to laugh-out-loud <br/> moments. Immerse yourself in a world of captivating narratives and stunning visuals that promise to <br/> keep you on the edge of your seat.</p>
        <button className="blue-btn">Start watching now!</button>
      </div>
      <div className="w-[80%] m-auto">
        {/* <Image src={Explore1} /> */}
        <Player
          playsInline
          poster="https://res.cloudinary.com/dpbpykpwi/image/upload/v1709621732/phoenex-official-website/owxw2macmezxr5vxydbs.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
    </div>
  )
}

export default HomeExplore