import  { useState } from 'react';

export default function Order() {
  const [selectedValue,setSelectedValue] = useState<number | null >(null);
  return (
    <>
  <div className="container mx-auto">
    <h2 className="text-center font-bold text-3xl my-6">Resturent</h2>

    <div className="tbl my-5">
    <h2 className="font-semibold text-2xl my-6">table</h2>
    <div className="grid grid-cols-6 gap-10">
    
    {Array.from({ length: 6 }).map((_, index) => (
        <button
          key={index}
          className={` py-5  ${index+1 === selectedValue ? 'bg-slate-300' : 'bg-green-300'} `}
        onClick={()=> setSelectedValue(index+1)}
        >
           {index + 1}
        </button>
      ))}
    </div>

    </div>
    <div className="order">
    <h2 className="font-semibold text-2xl my-6">orders</h2>
    <div className="grid grid-cols-8 gap-10">
      <div className='py-5'>1</div>
      <div className='py-5'>A</div>
      {Array.from({ length: 6 }).map((_, index) => (
        <button
          key={index}
          className={` py-2  ${index+1 === selectedValue ? 'bg-slate-300' : 'bg-green-300'} `}
        onClick={()=> setSelectedValue(index+1)}
        >
           {index + 1}
        </button>
      ))}
    </div>
    <div className="orderBtn flex items-center justify-center">
      <button className='bg-green-400 w-full py-3 my-8'>Order</button>
    </div>
    </div>
  </div>
    
    </>
  )
}
