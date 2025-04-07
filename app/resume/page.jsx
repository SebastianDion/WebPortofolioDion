"use client";


//About Data
const about = {
  title: 'About Me', 
  description: "Below are my contacts and information",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Sebastian Dion"
    },
    {
      fieldName: "Instagram",
      fieldValue: "@Sebastiandion_"
    },
    {
      fieldName: "Semester",
      fieldValue: "5th"
    },
    {
      fieldName:"LINE",
      fieldValue: "andimgone"
    },
    {
      fieldName: "Place of Origin",
      fieldValue: "Jakarta Pusat"
    },
    {
      fieldName: "Email",
      fieldValue: "Closed for now"
    },
    {
      fieldName: "Language",
      fieldValue: "Indonesia, English, Japanese(Basic)"
    },
    {
      fieldName: "Major",
      fieldValue: "Mobile Application & Technology"
    },
  ]
};

//Experience data
const experience = {
  icon: '',
  title: 'My Experience',
  description: "Besides my education journey, I also worked and gained experience through working and voulenteers",
  items:[
    {
      company: "BINUS University",
      position: "Education Counselor",
      duration: "2023 - 2024",
    },
    {
      company: "BINUS University",
      position: "Student",
      duration: "2022 - Now",
    },
    {
      company: "SMA Kolese Gonzaga",
      position: "Gonzaga Festival PUBG Competition Committee",
      duration: "2021 - 2021",
    },
    {
      company: "SMP Regina Pacis",
      position: "Band Member",
      duration: "2017 - 2019",
    }
  ]
}

//Education Data
const education = {
  icon:'',
  title: 'My Education & Knowledge', 
  description: "Throughout my university journey i gathered and learned many experiences, these are some of the proofs from many experiences that I got.",

  items: [
    {
      institute:"Binus University" ,
      degree: "Mobile Application & Technology",
      duration: "2022 - Now",
    },
    {
      institute:"iSwift" ,
      degree: "GoLang Beginner Cohort 3",
      duration: "2024",
    },
    {
      institute:"Compfest" ,
      degree: "COMPFEST 14Xcelerate seminar",
      duration: "2022",
    },
    {
      institute:"BuildWithAngga" ,
      degree: "Flutter Mobile Apps",
      duration: "2024",
    },
    {
      institute:"ExPy 2022 Python Bootcamp" ,
      degree: "Participant with the Best Project",
      duration: "2022",
    },
    {
      institute:"ExPy 2022 Python Bootcamp" ,
      degree: "Completion as a participant",
      duration: "2022",
    },
    {
      institute:"Udemy" ,
      degree: "Beginning C++ Programming-From Beginner to Beyond",
      duration: "2022 - 2024",
    },

  ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import { ScrollArea } from '@/components/ui/scroll-area';

import { motion } from 'framer-motion';

const Resume = () => {
  return <motion.div initial = {{opacity: 0}} animate ={{
    opacity: 1, transition:{delay: 2.4, duration: 0.4, ease:"easeIn"}
  }}
  className="p-8 min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  > 
    <div className="container mx-auto">
      <Tabs defaultValue="experience" 
      className="flex flex-col xl:flex-row gap-[60px]">

        <TabsList className="flex flex-col w-full max-w-[200px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>

        {/* Content */}
        <div className="min-h-[70vh] w-full">
          {/* Exp */}
          <TabsContent value="experience" className ="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
             <h3 className="text-4xl font-bold">{experience.title}</h3> 
             <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
             <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((item, index)=>{
                  return (
                     <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className='text-accent'>{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                    <div className="flex items-center gap-3">
                      {/* dot */}
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60">{item.company}</p>
                    </div>
                  </li>)
                })}
              </ul>
              </ScrollArea>
            </div>
          </TabsContent>

             {/* Education */}
             <TabsContent value="education" className ="w-full">
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
             <h3 className="text-4xl font-bold">{education.title}</h3> 
             <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
             <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {education.items.map((item, index)=>{
                  return (
                     <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className='text-accent'>{item.duration}</span>
                    <h3 className="text-l max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                    <div className="flex items-center gap-3">
                      {/* dot */}
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60">{item.institute}</p>
                    </div>
                  </li>)
                })}
              </ul>
              </ScrollArea>
            </div>
          </TabsContent>

             {/* About me */}
             <TabsContent value="about" className ="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item,index)=>{
                  return <li key={index} className="flex items-center justify center xl:justify-start gap-4">
                      <span className="text-white/60 text-xs">{item.fieldName}</span>
                      <span className="text-l">{item.fieldValue}</span>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>

        </div>
      </Tabs>
    </div>
  </motion.div>
};

export default Resume