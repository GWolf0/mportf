import React from 'react'

function TagsComp({tags}: {
    tags: string[],
}) {


    return (
        <div className='flex items-center py-2 gap-2'>
            {
                tags.map((tag, i) => (
                    <span key={i} className='rounded-full px-2 py-0.5 text-xs bg-primary text-light'>{tag}</span>
                ))
            }
        </div>
    )

}

export default TagsComp