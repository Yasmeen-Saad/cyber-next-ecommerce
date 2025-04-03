import Image from 'next/image';
import React from 'react'

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 w-full h-fit">
        <div className="bg-[#EDEDED] flex items-center justify-between h-fit">
            <Image src="/PlayStation.png" alt="PS" width={200} height={250}/>
            <div className="p-5 flex flex-col flex-1 gap-1">
                <h2 className="text-3xl text-black font-semibold">Playstation 5</h2>
                <p className='text-gray-600 text-md'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>  
            </div>
        </div>

        <div className="bg-white row-span-2 flex items-center justify-between">
            <div className="p-5 flex flex-col flex-1 items-start">
                <h2 className="text-4xl text-[#000000] font-thin">Macbook</h2>
                <h2 className="text-4xl text-[#000000] font-semibold">Air</h2>
                <p className='text-gray-600 text-md mt-1'>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>  
                <button className="mt-4 px-9 py-3 border border-black text-black font-semibold rounded-lg hover:bg-gray-200 transition w-fit">
                    Shop Now
                </button>
            </div>
            <Image src="/macbook.jpg" alt="macbook" width={200} height={250}/>
        </div>

        <div className="grid grid-cols-2 col-span-1 -mt-4">
            <div className="bg-white flex items-center justify-between h-fit">
                <Image src="/headphones.png" alt="PS" width={80} height={100}/>
                <div className="p-5 flex flex-col flex-1 mr-1.5">
                    <h2 className="text-2xl text-black font-thin">Apple</h2>
                    <h2 className="text-2xl text-black font-thin">Airpods</h2>
                    <h2 className="text-2xl text-black font-semibold">Max</h2>
                    <p className='text-gray-600 text-sm mt-1'>Computational audio. Listen, its powerful</p>  
                </div>
            </div>
            <div className="bg-[#353535] flex items-center justify-between">
                <Image src="/sunglasses.png" alt="PS" width={100} height={100}/>
                <div className="p-5 flex flex-col flex-1">
                    <h2 className="text-2xl text-white font-thin">Apple</h2>
                    <h2 className="text-2xl text-white font-thin">
                        Vision 
                        <span className="text-2xl text-white font-semibold"> Pro</span>
                    </h2>
                    <p className='text-gray-400 text-sm mt-1'>An immersive way to experience entertainment</p>  
                </div>
            </div>
        </div>
</div>
  )
}
