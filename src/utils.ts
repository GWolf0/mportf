export function truncate(text:string,maxLen:number):string{
    return text.substring(0,Math.min(maxLen,text.length))+(text.length>maxLen?'..':'');
}