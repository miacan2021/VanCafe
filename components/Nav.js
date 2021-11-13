import React from "react";

export default function Nav() {
  return (
    <>
<nav className="flex items-center justify-between flex-wrap bg-primary p-3 border-primary border">
  <div className="flex items-center flex-shrink-0 text-b-n mx-6">
  <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-b-n hover:text-b-b mr-4 tracking-widest text-md">
    WORK FRIENDRY CAFE - VAN
 </a>
  </div>

  <div className="mt-4">
    <a href="#responsive-header" className="block mt-4 mr-6 lg:inline-block lg:mt-0 text-b-n hover:text-b-b tracking-wider text-sm">
        FIND CAFES
    </a>
    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-b-n hover:text-b-b mr-4 tracking-wider text-sm">
      SEND CAFE INFO
    </a>    
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-b-n hover:border-b-n">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>  
</nav>
    </>
  );
}