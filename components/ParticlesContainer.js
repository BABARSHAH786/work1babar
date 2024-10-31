import {Particles} from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React,{useCallback} from 'react';
const ParticlesContainer = () => {
  //init
  const particleInit = useCallback(async (engine )=>{

  },[]);
  const particleLoaded =useCallback(async()=>{},[]);

  return (
  <Particles ClassName='w-full h-full absolute translate-2-0' id='tsparticles' init={particleInit} loaded={particleLoaded}
  options={{
    fullScreen:{enable:false},
    background:{
      color:{
        value:'',
      },
    },
    fpsLimit:120,
    interactivity:{
      events:{
        onClick:{
          enable:false,
          mode:'push',
        },
        onhover:{
          enable:true,
          mode:'repulse'
        },
        resize:true,
      },
      modes:{
        push:{quantity:90},
        repulse:{
          distance:200,
          duration:0.4,
        },
        particles:{
          color:{
            value:'#e68e2e'
          }
        }
      },
    }
  }} />
  )
};

export default ParticlesContainer;
