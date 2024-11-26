import React from 'react'

const IncubationProgress = () => {
  const progresses = [
    {
      title:  'Prototype Development',
      description: 'Turning ideas into reality! Witness the creation of prototypes that pave the way for groundbreaking solutions.'
    },
    {
      title:  'Strategic Partnerships',
      description: 'Forge ahead with strategic alliances! Explore the partnerships that enhance project capabilities and market reach.'
    },
    {
      title:  'User Testing Triumphs',
      description: 'Validation at its best! Celebrate the positive outcomes and lessons learned from rigorous user testing phases. '
    },
    {
      title:  'Funding Milestones',
      description: 'Fueling innovation! Stay updated on funding achievements that empower projects to reach new heights.'
    },
  ]
  return (
    <div className="mx-5 my-10 lg:m-20">
      <div className="text-center lg:text-start">
      <h2 className="text-2xl font-bold">Program Progress</h2>
      <p className="text-clightGray mt-5 pb-7">Track the incredible journey of our ongoing incubation projects, marked by key milestones and breakthrough moments.</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 mt-20 relative ">
        <div className="absolute w-full h-3 rounded-lg bg-cgray -top-10"></div>
        {
          progresses.map((progress, i)=>{
            return(
              <div key={i} className="mt-5">
                <div className="hidden lg:block absolute w-7 h-7 -top-12 rounded-full bg-cblue "></div>
                <p className="font-semibold text-xl text-cblue">{progress.title}</p>
                <p className="text-clightGray leading-loose mt-3">{progress.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default IncubationProgress