import { RefObject, useEffect, useRef, useState } from 'react'
import useFadeIn from '../hooks/useFadeIn';
import ProjectDetails from '../comps/ProjectDetails';
import { PortfolioDataDef} from '../types';
import FeaturedSection from '../comps/FeaturedSection';
import ProjectCard from '../comps/ProjectCard';

interface HomePagePropsDef{
    data:PortfolioDataDef,
}
function HomePage({data}:HomePagePropsDef){
    const infoSectionRef:RefObject<HTMLElement>=useRef(null);
    const featuredSectionRef:RefObject<HTMLElement>=useRef(null);
    const projectsSectionRef:RefObject<HTMLElement>=useRef(null);

    const [activeSection,setActiveSection]=useState<number>(0);
    const [openedProjectIdx,setOpenedProjectIdx]=useState<number>(-1);

    useFadeIn();

    useEffect(()=>{
    },[openedProjectIdx]);

    function setSection(sectionIdx: number) {
        setActiveSection(sectionIdx);

        if(infoSectionRef.current && featuredSectionRef.current && projectsSectionRef.current){
            const target : HTMLElement = sectionIdx === 0 ? infoSectionRef.current : 
                sectionIdx === 1 ? featuredSectionRef.current :
                projectsSectionRef.current;
            target.scrollIntoView({behavior:"smooth"});
        }
    }

    function onOpenProject(projectIdx:number){
        setOpenedProjectIdx(projectIdx);
    }
    function onCloseProject(){
        setOpenedProjectIdx(-1);
    }

    return (
        <div className='w-full min-h-screen bg-lightes'>
            {/* <Background /> */}
            <div className='fixed left-0 top-0 right-0 bottom-0' style={{zIndex: "-1"}}>
                <video src={`./bg.mp4?v=${new Date().valueOf()}`} autoPlay muted loop className='w-full h-full object-cover'></video>
            </div>

            <header className='z-20 sticky bg-lightest shadow-sm top-0 left-0 w-full h-14 py-4 flex items-center justify-center gap-4 bordr-b border-dashed border-semitrans'>
                <button onClick={()=>setSection(0)} className={`px-6 py-2 underline bg-lighter rounded transition-transform ${activeSection===0?'text-primary opacity-100 scale-105 border border-primary':'text-dark'} uppercase`}>About</button>
                <div className='h-full bg-semitrans mx-2' style={{width:'1px'}}></div>
                <button onClick={()=>setSection(2)} className={`px-6 py-2 underline bg-lighter rounded transition-transform ${activeSection===1?'text-primary opacity-100 scale-105 border border-primary':'text-dark'} uppercase`}>Projects</button>
            </header>

            {/* // info section */}
            <div className='mx-auto relative bg-lighte' style={{width:'min(1280px,99vw)'}}>
                <section ref={infoSectionRef} className='w-full h-screen borde-b border-dased border-semitrans px-2 md:px-4 py-6 mt-6 flex flex-col justify-center items-center'>
                        <h1 className={`text-3xl md:text-5xl text-darker text-center font-extralight tracking-widest`}>AMANZOUL Mohcine,</h1>
                        <h2 className={`text-3xl md:text-5xl text-darker text-center font-extralight tracking-widest`}>FullStack Web <span className='text-primary'>Developer</span></h2>
                        <p className='fade-in-elem mt-8 text-dark font-light text-center tracking-widest'>
                            &lt; Engineering ideas into reality. /&gt;
                        </p>
                        
                        <button onClick={()=>setSection(1)} className={`mt-6 px-10 py-4 border border-dark text-dark rounded hover:oapcity-70 hover:-translate-y-1 hover:text-primary transition-transform uppercase`}>
                            Featured Projects
                        </button>
                        
                        <div className='w-full flex items-center justify-center gap-4 py-2 mt-12'>
                            {
                                data.links.map((l,i)=>(
                                    <a key={i} href={l.url} target='_blank' className='w-10 h-10 flex items-center justify-center rounded-full bg-lightest text-dark shadow-sm hover:text-primary'>
                                        <i className={l.icon}></i>
                                    </a>
                                ))
                            }
                        </div>
                </section>
            </div>

            <hr />

            {/* // featured section */}
            <div className='mx-auto relative bg-lighter' style={{width:'min(1280px,99vw)'}}>
                <section ref={featuredSectionRef} className='w-full px-2 md:px-4 py-6'>
                    <p className='text-center py-2 text-dark font-light text-xl tracking-widest'>Featured</p>

                    <FeaturedSection data={data} />
                </section>

                <hr />
            </div>

            {/* // projects section */}
            <div className='mx-auto relative bg-lighter' style={{width:'min(1280px,99vw)'}}>
                <section ref={projectsSectionRef} className='w-full min-h-screen px-2 md:px-4 py-6'>
                    <p className='text-center py-2 text-dark font-light text-xl tracking-widest'>Projects ({data.projects.length})</p>
                    <div className='mt-6 grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-3'>
                        {/* // Cards */}
                        {
                            data.projects.map((p,i)=>(
                                <ProjectCard key={i} data={data} project={p} projectIdx={i} onOpenProject={onOpenProject} />
                            ))
                        }
                    </div>
                </section>
            </div>

            <div className='fixed z-30 top-0 w-screen h-screen bg-black' style={{left:openedProjectIdx>-1?'0%':'100%',transition:'left 0.2s'}}>
                <ProjectDetails imgsRoot={data.imgsRoot} projectIdx={openedProjectIdx>-1?openedProjectIdx:0} projects={data.projects} onRequestClose={onCloseProject} />
            </div>

            <footer className='w-full bg-lightest px-2 md:px-4 flex flex-col gap-2 items-center justify-center border-t border-dashed border-semitrans' style={{height:'128px'}}>
                <p className='text-center font-light text-dark'>&copy; 2024 - {new Date().getFullYear()},</p>
                <p className='italic text-center font-light text-dark'>a personal portfolio</p>
            </footer>
        </div>
    )
}

export default HomePage;