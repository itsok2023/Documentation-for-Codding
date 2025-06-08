import React from 'react';

const Listcards1 = () => {
  return (
    <div className="h-[11em] w-auto border-2 border-[rgba(0,0,0,0.92)] rounded-[1.5em] bg-stone-300   text-stone-800 font-nunito p-[1em] flex justify-center content-center items-center flex-col-2 gap-[0.75em] backdrop-blur-[12px] md:h-[9em] md:gap-50 ">
      <div className='flex grid-cols-2  gap-x-20 place-content-start  '>
      <div>
        <h1 className="text-[1.5em] font-medium">2. ReactJS + Simple CSS:</h1>
        <p className="text-[0.85em]">
          - A minimal setup guide using plain CSS with ReactJS.
        </p>
      </div>
      <div>
      <button className="text-white bg-blue-900 hover:bg-blue-600 hover:text-white my-auto h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center place-content-center items-center gap-[0.em] overflow-hidden group lg:ml-8 hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
        <a href='#'>Start</a>
        <svg className="w-6 h-6 group-hover:translate-x-[10%] duration-300" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </button>
      </div>
      </div>
    </div>
  );
}

export default Listcards1;
