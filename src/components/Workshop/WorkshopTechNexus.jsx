import Image from "next/image"
import React from 'react'
import NexusImg from "@/images/workshop/tech_nexus_video.png"
import { Player } from "video-react"
const WorkshopTechNexus = () => {
  return (
    <div className="m-5 lg:m-20 mt-36 text-center lg:text-start">
      <div className="flex flex-col lg:flex-row  gap-10 items-center justify-between">
        <h2 className="text-3xl lg:text-5xl font-bold">Tech Nexus: Unveiling Tomorrow's Innovation</h2>
        <button className="blue-btn">Start watching now!</button>
      </div>
      <p className="text-clightGray leading-loose py-10">Dive into the future with our video section, offering exclusive event previews and dynamic marketing highlights. From behind-the-scenes insights to tech visionary interviews, experience the essence of "Tech Nexus" – where innovation meets anticipation. It's not just an event; it's a visual journey into tomorrow's technology.</p>
      <div>
        {/* <Image src={NexusImg} /> */}
        <Player
          playsInline
          poster="https://res.cloudinary.com/dpbpykpwi/image/upload/v1709628343/phoenex-official-website/zdhbqfp0yakkjepavktt.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
    </div>
  )
}

export default WorkshopTechNexus