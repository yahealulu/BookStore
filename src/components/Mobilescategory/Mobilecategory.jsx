'use client'
import Image from "next/image"
export const Mobilecategory = () => {
    const Mobilecategoryimg=[
        {src:'/assets/images/iphone_01.png' ,alt:'iphonephoto' ,width:'279' ,height:'576'},
        {src:'/assets/images/iphone_02.png' ,alt:'iphonephoto' ,width:'279' ,height:'576'},
        {src:'/assets/images/iphone_03.png' ,alt:'iphonephoto' ,width:'279' ,height:'576'},
        {src:'/assets/images/iphone_04.png' ,alt:'iphonephoto' ,width:'279' ,height:'576'},
        {src:'/assets/images/iphone_05.png' ,alt:'iphonephoto' ,width:'279' ,height:'576'}
        
    ]
  return (
    
      <div className="flex mx-auto gap-10 my-5 pt-1  justify-center align-middle overflow-hidden h-[38rem] max-w-[1600px] mb-0 pb-10 animate-pulse">
          {Mobilecategoryimg.map(({src,alt,width,height},index)=>(<Image src={src} alt={alt} key={index} width={width} height={height} />))}
    </div>
  )
}
