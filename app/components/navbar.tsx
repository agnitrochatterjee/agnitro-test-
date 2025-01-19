import React from "react";
import DropdownMenu from "@/app/components/userid"


const Navbar = () => {
  return (
    <nav>
       <nav className="bg-customDark h-[10vh]  p-4 space-x-14 shadow-md px-4 py-3 flex items-center justify-left">
     
      <div className="text-xl font-semibold pl-10 pr-5 text-white">
        securepassword
      </div>

   
      <div className="flex pl-3 space-x-4 bg-customDark2 border border-gray-600 rounded-lg    w-3/4 max-w-3xl px-3 py-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="white" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
        <input
          type="text"
          className="ml-2 w-full bg-customDark2 outline-none text-gray-100"
          placeholder="Search Secure Password (ctrl k)"
        />
      </div>

      {/* Right - Notification, Settings, and Account */}
      <div className="flex items-center space-x-14">
        {/* Notification Icon */}
        <div className="relative space-x-14">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
</svg>
         
        </div>

        {/* Settings Icon */}
        <div className="text-2xl text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>
        </div>

        {/* Account Icon */}
        <div className="text-2xl text-gray-100">
        <DropdownMenu/>
        </div>
      </div>
    </nav>
    </nav>
  );
};

export default Navbar;
