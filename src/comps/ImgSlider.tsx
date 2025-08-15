import React, { useEffect, useMemo, useState } from 'react'

interface ImgSliderPropsDef{
    imgsRoot:string,
    imgs:string[],
    // onExpandToggle:()=>void,
    // isExpanded: boolean,
}
function ImgSlider({imgsRoot,imgs}:ImgSliderPropsDef){
    const imgsCount: number = useMemo(()=>imgs.length,[imgs]);
    
    const [curImgIdx,setCurImgIdx] = useState<number>(0);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [isVideo, setIsVideo] = useState<boolean>(false);

    useEffect(()=>{
        setCurImgIdx(0);
    },[imgs]);
    
    useEffect(() => {
        setIsVideo(imgs[curImgIdx].endsWith("mp4"));
    }, [curImgIdx]);

    function onSlide(e: React.MouseEvent, dir:number){
        console.log(curImgIdx, dir, curImgIdx + dir)
        let newImgIdx: number = curImgIdx + dir;
        if(newImgIdx < 0) newImgIdx = imgsCount - 1;
        newImgIdx %= imgsCount;
        setCurImgIdx(newImgIdx);

        e.stopPropagation();
    }

    function onDiscreteSlide(e: React.MouseEvent){
        if(isVideo) return;

        const target:HTMLElement = e.target as HTMLElement;
        const targetHalfWidth = target.clientWidth * 0.5;
        const side = e.clientX > targetHalfWidth ? 1 : -1;
        onSlide(e, side);

        e.stopPropagation();
    }

    function onExpandToggle(e: React.MouseEvent) {
        setIsExpanded(prev => !prev);
        
        e.stopPropagation();
    }

    return(
        <div className={`${isExpanded?'fixed z-50 left-0 top-0 flex items-center justify-center w-screen h-screen bg-semitrans':''}`} onClick={onDiscreteSlide}>
            <div className='relative w-full aspect-video max-h-screen bg-dark rounded overflow-hidden'>
                {
                    imgs.map((img,i)=>(
                        <div key={i} className='absolute top-0 w-full h-full pd-2 md:p-4' style={{left:`${(i-curImgIdx)*100}%`,transition:"left 0.2s"}}>
                            {
                                img.endsWith("mp4")
                                ?
                                <video src={imgsRoot+img} controls className='w-full h-full object-contain' poster={imgsRoot+imgs[0]}></video>
                                :
                                <img className='w-full h-full object-contain' src={imgsRoot+img} />
                            }
                        </div>
                    ))
                }
                <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
                    <button onClick={onExpandToggle} className=' pointer-events-auto absolute left-4 top-4 w-8 h-8 rounded-full bg-lightest text-dark'><i className={`bi ${isExpanded?'bi bi-arrows-angle-contract':'bi-arrows-angle-expand'}`}></i></button>
                    
                    <div className=' pointer-events-auto absolute bottom-4 left-0 w-full flex items-center justify-between px-4'>
                        <button onClick={(e)=>onSlide(e, -1)} className='w-8 h-8 rounded-full bg-lightest text-dark'><i className="bi bi-chevron-compact-left"></i></button>
                        <div className='flex gap-1 items-center'>
                            {
                            imgs.map((_,i)=>(<span key={i} className={`w-1 h-1 bg-lightest rounded-full ${i===curImgIdx?'scale-150':''}`}></span>)) 
                            }
                        </div>
                        <button onClick={(e)=>onSlide(e, 1)} className='w-8 h-8 rounded-full bg-lightest text-dark'><i className="bi bi-chevron-compact-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImgSlider;