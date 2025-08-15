export interface ProjectDef{
    id:number,
    title:string,
    description:string,
    imgs:string[],
    codeLink?:string,
    previewLink?:string,
    tags:string[],
}

export interface PortfolioDataDef{
    imgsRoot:string,
    links:{tag:string,url:string,icon:string}[],
    featured: number[],
    projects:ProjectDef[],
}
