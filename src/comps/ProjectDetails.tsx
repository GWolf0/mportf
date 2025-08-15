import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react'
import { ProjectDef } from '../types';
import ImgSlider from './ImgSlider';
import Markdown from 'react-markdown';
import TagsComp from './TagsComp';

interface ProjectDetailsProps{
    imgsRoot:string,
    projectIdx:number,
    projects:ProjectDef[],
    onRequestClose:()=>any,
}
function ProjectDetails({imgsRoot,projectIdx,projects,onRequestClose}:ProjectDetailsProps){
    const [_projectIdx,setProjectIdx]=useState<number>(projectIdx);
    const [sliderExpanded,setSliderExpanded]=useState<boolean>(false);
    const project:ProjectDef=useMemo(()=>projects[_projectIdx],[_projectIdx]);

    useEffect(()=>{
        setProjectIdx(projectIdx);
    },[projectIdx]);

    function _onRequestClose(){
        onRequestClose();
    }

    function onBrowseProjects(dir:number){
        let newProjectIdx:number=_projectIdx+dir;
        if(newProjectIdx<0)newProjectIdx=projects.length-1;
        newProjectIdx%=projects.length;
        setProjectIdx(newProjectIdx);
    }

    return (
        <div className="w-full h-full flex flex-col gap-4 bg-lighter">
            <section className="h-16 px-2 md:px-4 pr-8 flex items-center border-b border-dashed border-semitrans gap-4">
                <button onClick={_onRequestClose} className="p-4 text-dark mr-auto text-2xl font-light"><i className='bi bi-arrow-left'></i></button>

                <button onClick={()=>onBrowseProjects(-1)} disabled={_projectIdx===0} className="px-4 py-2 text-dark border border-semitrans rounded hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
                <p className='text-dark'>{(_projectIdx+1)} / {projects.length}</p>
                <button onClick={()=>onBrowseProjects(1)} disabled={_projectIdx===projects.length-1} className="px-4 py-2 text-dark border border-semitrans rounded hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
            </section>

            <section className='grow flex flex-col overflow-y-auto'>
                <div className='px-2 md:px-4 flex flex-col gap-4 self-center' style={{width:'min(956px,97vw)'}}>
                    {/* <div className={`${sliderExpanded?'fixed left-0 top-0 flex items-center justify-center w-screen h-screen bg-semitrans':''}`}> */}
                        <ImgSlider imgs={project.imgs} imgsRoot={imgsRoot}
                        />
                    {/* </div> */}

                    <div className="flex flex-col gap-4">
                        {/* // Tags */}
                        <TagsComp tags={project.tags} />

                        <h1 className='text-4xl text-dark font-light tracking-wider'>{project.title}</h1>
                        {/* <p className='bg-light text-dark font-light mt-4 p-2 rounded'>
                            <pre>{project.description}</pre>
                        </p> */}
                        <div>
                            <Markdown>
                                { project.description }
                            </Markdown>
                        </div>
                    </div>

                </div>
            </section>

            <div className='flex px-2 md:px-4 items-center py-2 gap-4 justify-end border-t border-dashed border-semitrans'>
                {project.codeLink!=="#"&&<a href={project.codeLink} target='_blank' className='px-8 py-2.5 shadow bg-lightest text-dark rounded hover:opacity-70 hover:text-primary'><i className="bi bi-box-arrow-up-right"></i> Code</a>}
                {project.previewLink!=="#"&&<a href={project.previewLink} target='_blank' className='px-8 py-2.5 shadow bg-primary text-lighter rounded hover:opacity-70'><i className="bi bi-box-arrow-up-right"></i> Preview</a>}
            </div>

        </div>
    )
}

export default ProjectDetails;