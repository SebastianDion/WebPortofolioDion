"use client";

import WorkSliderBtns from "@/components/WorkSliderBtns";

 import {easeIn, motion} from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

import { BsGithub} from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; 

import Link from "next/link";
import Image from "next/image";


const projects =[
  {
    num: '01',
    category: 'Mobile Development',
    title:'Bonk Toys',
    description:"In my flutter project, I made an app named Bonk Toys. This app is an e-commerce app that sells Hot Toys. Bonk Toys also gives description to the Toys that are in stocks so user can insert it into their cart. Bonk Toys use Firebase Service as it’s login authentication. I designed the app layouts using Figma.",
    stack: [
      {name: 'Flutter'},
      {name: 'Firebase'},
      {name: 'Figma'}
    
    ],
    image:'/BonkToys.png',
    live:'',
    github: 'https://github.com/SebastianDion/Bonk-Toys',
  },
  {
    num: '02',
    category: 'Mobile Development',
    title:'Harco Mobile',
    description:'In this project, i made an app called Harco Mobile. Harco Mobile is an e-commerce app that sells hardware and electronics where user can buy using cart system like Harco Glodok, but in an e-commerce app. User can login and sign in using their accounts and save their data using local SQlite. This app is made using android studio. This app uses Firebase Service as it’s Map service (shows map on the app).',
    stack: [
      {name: 'Kotlin'},
      {name: 'Firebase'},
      {name: 'Figma'}
    
    ],
    image:'/HarcoMobile.png',
    live:'',
    github: 'https://github.com/SebastianDion/HarcoMobile',
  },
  {
    num: '03',
    category: 'Web Development',
    title:'Sebastian Dion Web Portofolio',
    description:'I made this web using React, I learn react and tailwind by building this project. The deployment that i use is vercel. This web will showcase my work, contacts, and information.',
    stack: [
      {name: 'React'},
      {name: 'TailwindCss'},
      {name: 'Css3'}
    
    ],
    image:'/WebDion.png',
    live:'',
    github: '',
  },
  {
    num: '04',
    category: 'Web Development',
    title:'Willify',
    description:'Using HTML, CSS, and JavaScript i create a web for buying music it is called Willify. This website acts like a Spotify but instead of listening to music user are prompted to buy the music that are available. This website is inspired by Spotify but i designed the website using my own style and color, I also used Figma before building the website.',
    stack: [
      {name: 'React'},
      {name: 'TailwindCss'},
      {name: 'Css3'}
    
    ],
    image:'/Willify.png',
    live:'',
    github: 'https://github.com/SebastianDion/WillifyHCI',
  },
  {
    num: '05',
    category: 'Mobile Development',
    title:'JollyCat',
    description:'JollyCat is an E-commerece app for buying and lookit at cats on mobile app. For this app, I made this in Kotlin using their SQlite as the cart system.',
    stack: [
      {name: 'Kotlin'},
      {name: 'FireBase'},
      {name: 'Figma'}
    
    ],
    image:'/JollyCat.png',
    live:'',
    github: 'https://github.com/SebastianDion/JollyCat',
  },
  {
    num: '06',
    category: 'Mobile Development',
    title:'Goedamlift',
    description:'Goedamm Lift is a VR Horror game. This app was made in Unity using C# to apply the physics to the objects and Blender as itsmain asset making.',
    stack:  [
      {name: 'Unity'},
      {name: 'Blender'},
    
    ],
    image:'/GoedamLift.png',
    live:'',
    github: 'https://github.com/SebastianDion/UnityVR',
  },
  {
    num: '06',
    category: 'SoftWare Development',
    title:'PyGame',
    description:'Learning the basics of PyGame I successfully made a working PyGame',
    stack:  [
      {name: 'Python'},
      {name: 'PyGame'},
    ],
    image:'/Pygame.png',
    live:'',
    github: 'https://github.com/SebastianDion/GameTest1',
  },
  {
    num: '07',
    category: 'SoftWare Development',
    title:'Kalkulator Umur',
    description:'With this program i managed to win participant with the best project award.',
    stack:  [
      {name: 'Python'},

    ],
    image:'/calc.png',
    live:'',
    github: 'https://github.com/SebastianDion/Kalkulator-Umur-Python',
  },
  {
     num: '08',
    category: 'SoftWare Development',
    title:'Class Management',
    description:'This is my first ever software program using java and implementing OOP. Use the github repo to see my work!!!',
    stack:  [
      {name: 'Java'},

    ],
    image:'/java.jpeg',
    live:'',
    github: 'https://github.com/SebastianDion/JavaSmallPROJECTMid1',
  },



]

const Work = () => {
  const[project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) =>{
    //Get Curr slide index
    const currentIndex = swiper.activeIndex;
    //Update project state based on current slide index
    setProject(projects[currentIndex])
  }
  return (
  <motion.section initial ={{opacity:0}} 
  animate={{opacity: 1, transition:{delay: 2, duration: 0.4, ease: "easeIn"},
}}
  className="p-8 min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
        <div className="flex flex-col gap-[20px] h-[50%] ">
          {/* Outline numbernya */}
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
          {/* Project Category */}
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} Project</h2>
          {/* Project desc */}
          <p className="text-white/60">{project.description}</p>
          {/* Stack */}
          <ul className="flex gap-4 ">

            {project.stack.map((item,index)=>{
              return <li key={index} className="text-xl text-accent">
                <span className="bg-black rounded px-2 py-2 text-sm">{item.name}</span>
                {/* Remove the last comma */}
                {/* {index !== project.stack.length - 1 && ","} */}

              </li>
            }
            )}
          </ul>
          {/* Border */}
            <div className="border border-white/20"></div>
            {/* Buttons */}
            <div className="flex items-center gap-4">
              {/* Github Repo */}
              <Link href={project.github}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github Repo</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
               </Link>
            </div>
        </div>
        </div>
      

        
        <div className="w-full xl:w-[50%]">

         <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
            {projects.map((project, index )=>{
              return( <SwiperSlide key={index} className="w-full">
                <div className="h-[460px] relative group flex justify-center items-center bg-transparent ">
                {/* Overlay */}
                <div className="absolute top-0 bottom-0 w-full h-full bg-transparent z-10 ">

                </div>
                <div className="relative w-full h-full">
                  {/* Image */}
                    <Image src={project.image} fill className="object-scale-down rounded-lg" alt=""/>
                 
                </div>
                </div>
              </SwiperSlide>
              );
            })}
            {/* Swiper Buttons */}
            <WorkSliderBtns ContainerStyles="flex gap-2 absolute right-0 bottom-[calc(10%_-_22px)] xl:bottom-10 z-20 w-full justify-between xl:w-max xl:justify-none" 
            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded"/>
          </Swiper>
          </div>
      </div>
    </div>
  </motion.section>);
};

export default Work