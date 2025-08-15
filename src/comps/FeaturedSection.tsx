import React, { useMemo } from 'react'
import { PortfolioDataDef, ProjectDef } from '../types'
import TagsComp from './TagsComp';
import { truncate } from '../utils';
import ImgSlider from './ImgSlider';

function FeaturedSection({ data }: {
    data: PortfolioDataDef,
}) {
    const featuredProjects = useMemo(() => data.projects.filter(p => data.featured.includes(p.id)), [data]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-1 gap-4'>
            {
                featuredProjects.map((p, i) => (
                    <FeaturedCard key={i} imgsRoot={data.imgsRoot} project={p} />
                ))
            }
        </div>
    )

}

export default FeaturedSection

// featured card
function FeaturedCard({ imgsRoot, project }: {
    imgsRoot: string, project: ProjectDef,
}) {

    return (
        <div className='flex flex-col gap-4 rounded bg-lighter p-4 border'>
            <TagsComp tags={project.tags} />
            <p className='text-xl'>{project.title}</p>
            <ImgSlider imgsRoot={imgsRoot} imgs={project.imgs} />
            <p className='text-center'>{project.description}</p>

            <div className='flex px-0 items-center py-2 gap-4 justify-end border-t border-dashed border-semitrans'>
                {project.codeLink !== "#" &&
                    <a href={project.codeLink} target='_blank'
                        className='px-8 py-2.5 shadow bg-lightest text-dark rounded hover:opacity-70 hover:text-primary'>
                        <i className="bi bi-box-arrow-up-right"></i> Code</a>}

                {project.previewLink !== "#" &&
                    <a href={project.previewLink} target='_blank'
                        className='px-8 py-2.5 shadow bg-primary text-lighter rounded hover:opacity-70'>
                        <i className="bi bi-box-arrow-up-right"></i> Preview</a>}
            </div>
        </div>
    )

}