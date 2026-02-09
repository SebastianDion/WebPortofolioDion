"use client";



import { RiFlutterFill, RiNotionFill } from "react-icons/ri"; 
import { SiKotlin, SiTailwindcss, SiMysql, SiObsidian, SiNotepadplusplus, SiWebflow } from "react-icons/si"; 
import { FaSwift, FaHtml5, FaCss3, FaReact, FaFigma,   FaPython, FaJava, FaJs } from "react-icons/fa"; 
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io"; 
import { TbBrandCpp } from "react-icons/tb";
import { FaUnity } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";


//Info ttg servisku
const services =[
  {
    num: '01',
    title: 'Mobile Development',
    description:'Proficient in building mobile applications using Flutter, Kotlin, Swift, and Unity. Experienced in creating cross-platform apps with a focus on performance and user experience.',
    icons:[<RiFlutterFill key="1" />, <SiKotlin key="2" />, <FaSwift key="3"/>, <FaUnity key="4" />, <FaReact key="5" />],
  },
  {
    num: '02',
    title: 'Web Development',
    description:'I started web development in early highschool and finally got the chance of making this project using react at 5th semester. Below is what i have learned.',
    icons: [<FaHtml5 key="1" />, <FaCss3 key="2" />, <IoLogoJavascript key="3" />, <FaReact key="4" />,<SiTailwindcss key="5" />,<FaFigma key="6" />,<SiWebflow key="7" />       ],
  },
  {
    num: '03',
    title: 'Software Development',
    description:'Although I mainly do app developments, I also study software development fundamentals (algorithm, database, and basics). Below are my language preference.',
    icons: [ <FaJs key="1" />, <FaGolang key="2" />, <FaPython key="3" />, <TbBrandCpp key="4" />, <SiMysql key="5" />, <FaJava key="6" /> , <SiMongodb key="7"/>],
  },
  {
    num: '04',
    title: 'Note Taking',
    description:'Of course, without these tools, I wouldnt be able to memorize everything. So I dedicate the whole 5 semester to learn many note taking methods.',
    icons: [<RiNotionFill key="1" />,  <SiObsidian key="2" />, <SiNotepadplusplus key="3" />],
  }
];

import { motion } from 'framer-motion';




const Services = () => {
  return  <section className="min-h-[80vh] p-8 flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
      className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        {services.map((services, index)=>{
          return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
            {/* Top */}
            <div className="w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold 
              text-outline text-transparent group-hover:text-outline-hover transition-all duration-500"
              >{services.num}</div>
            </div>
            {/* Title */}
            <h2 className="text-[42px] font-bold leading-none text-white 
            group-hover:text-accent transition-all duration-500">{services.title}</h2>
            {/* Desc */}
            <p className="text-white/60 text-xs text-justify">{services.description}</p>
            {/*Icon*/}
           <div className="flex gap-2">
           {services.icons.map((icon, idx) => (
                <span key={idx} className="text-3xl">{icon}</span> 
              ))}
           </div>
      
     
        
            {/* Border */}
            <div className="border-b border-white/20 w-full"></div>

          </div>
        })}
      </motion.div>
    </div>
  </section>;
  
};

export default Services