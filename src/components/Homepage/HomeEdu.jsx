import React from 'react'
import EduImg from "@/images/home/edu.png"
import Image from "next/image"
import { Player } from "video-react"
const HomeEdu = () => {
  return (
    <div className="m-5 lg:m-20 space-y-5">
      <div className="flex flex-col text-center lg:flex-row items-center justify-between gap-5">
        <h1>Educational Insights in Every Frame</h1>
        <button className="blue-btn">Start watching now!</button>
      </div>
      <div className="pt-5 lg:pt-0">
        <p className="text-clightGray text-center">Expand your knowledge horizon with our educational video section. Each video is a gateway to new insights and discoveries, presenting complex concepts in an engaging and easily digestible format. From science and technology to history and culture, our collection of videos is designed to inspire curiosity and foster a love for learning.</p>
      </div>
      <div className="pt-5">
        {/* <Image className="w-full" src={EduImg} /> */}
        <Player
          playsInline
          poster="https://res.cloudinary.com/dpbpykpwi/image/upload/v1709628343/phoenex-official-website/zdhbqfp0yakkjepavktt.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
    </div>
  )
}

export default HomeEdu