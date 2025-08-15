import React from 'react'
import { PortfolioDataDef, ProjectDef } from '../types'
import { truncate } from '../utils'
import TagsComp from './TagsComp'

function ProjectCard({ projectIdx, data, project, onOpenProject}: {
    projectIdx: number, data: PortfolioDataDef, project: ProjectDef, onOpenProject: (projectIdx: number) => any,
}) {

    return (
        <div className='fade-in-elem bg-lightest border rounded-lg overflow-hidden'>
            <div onClick={()=>onOpenProject(projectIdx)} className='aspect-square bg-semitrans p-4 hover:p-6 cursor-pointer' style={{transition:'padding 0.3s'}}>
                <img className='w-full h-full object-cover' src={data.imgsRoot + project.imgs[0]} />
            </div>
            
            <div className='px-4 mt-2'>
                <TagsComp tags={project.tags} />
            </div>

            <div className='px-4 py-4'>
                <p className='capitaline text-darker text-sm'>{project.title}</p>
                <p className='text-xs text-dark font-extralight'>{truncate(project.description,34)}</p>
            </div>

            <div className='px-4 flex py-2 items-center justify-end'>
                <button onClick={()=>onOpenProject(projectIdx)} className='px-4 py-2 text-dark hover:text-primary underline border border-semitrans rounded'>More</button>
            </div>
        </div>
    )

}

export default ProjectCard