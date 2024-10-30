import Image from 'next/image';

import  ParticleContainer from '../components/ParticlesContainer'
import  ProjectBtn from '../components/ProjectsBtn'
import  Avatar from '../components/Avatar'

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'
const Home = () => {
  return ( <div className='bg-primary/60 h-full' >
    {/* texrt */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto '>
        {/* title */}
        <h1>Transforming Ideas <br />Into{''}
        <span className='text-accent'>Digital Reality</span>
         </h1>
         {/* subtitle */}
         <motion.p
         variants={fadeIn('down',0.4)}
         initial="hidden" animate="show "
         exit='hidden'
         className='hidden xl:flex'> className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>lorem45 ye we will do soon we weil jij iwjijw ijojojo iwjojojwo owowo owjojw owowo owkow owkwkw wkwk wokwok wkkwok wokwkkw owokwko
         </motion.p>
         <div className='flex justify-center xl:hidden relative'>
          <ProjectBtn />
         </div>

         <motion.div 
         variants={fadeIn('down',0.4)}
         initial="hidden" animate="show "
         exit='hidden'
         className='hidden xl:flex'>
          <ProjectBtn />
         </motion.div>

      </div>
    </div>
  </div>
  )
};

export default Home;
