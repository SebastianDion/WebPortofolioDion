import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi'

//Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col p-2 xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Software Developer</span>
          <h1 className="h1">Hello I'm <br/><span className="text-accent">Sebastian Dion</span></h1>
          <p className="max-w-[600px] mb-9 text-white/80 text-sm text-justify">Hello,
           my name is Sebastian Dion. I'm a 5th semester student looking for internship opportunities.
           I possess strong solving skills, continuous learning mindset, and experience in mobile application development.
            I am committed to applying my knowledge and skills in the technology industry and contributing to innovative projects. 
            Down below are my links, feel free to contact me for any collaborations.</p>
            {/* Btn and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <a href="/Resume.pdf" download className="flex items-center gap-2">
                <span>Download CV </span><FiDownload className="text-xl" /></a></Button>

                <div className="mb-8 xl:mb-0">
                  <Social ContainerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base
                  hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                  </div>
              
            </div>
        </div>
        
        {/* Photo */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>;
};

export default Home