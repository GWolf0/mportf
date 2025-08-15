import { useEffect, useState } from "react";

export default function(fadeInElemsClassName:string=".fade-in-elem"){
    const [fadeInElems,setFadeInElems]=useState<HTMLElement[]>([]);
    
    useEffect(()=>{
        setFadeInElems(Array.from(document.querySelectorAll(fadeInElemsClassName)));
        return ()=>{
            window.removeEventListener('scroll',checkFadeIn);
            window.removeEventListener('resize',checkFadeIn);
            window.removeEventListener('load',checkFadeIn);
        }
    },[]);
    useEffect(()=>{
        window.addEventListener('scroll',checkFadeIn);
        window.addEventListener('resize',checkFadeIn);
        window.addEventListener('load',checkFadeIn);
    },[fadeInElems]);

    function checkFadeIn(){//console.log("check",fadeInElems.length)
        fadeInElems.forEach(elem=>{
          if(isElementInViewport(elem)){
            elem.classList.add('fade-in');
          }
        });
    }
    function isElementInViewport(el:HTMLElement){
      const factor=1.35;
        const rect=el.getBoundingClientRect();
        return (
          rect.top>=0&&rect.left>=0&&
          rect.bottom<=(window.innerHeight*factor||document.documentElement.clientHeight*factor)&&
          rect.right<=(window.innerWidth||document.documentElement.clientWidth)
        );
    }

    return null;

}

