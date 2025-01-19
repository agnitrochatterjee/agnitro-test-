import React from 'react';
import { FaKey, FaStickyNote, FaUserCircle, FaTrash, FaWallet, FaFolderPlus, FaTools , FaShare , FaUniversity , FaBitcoin , FaThLarge, FaRocket } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-black text-gray-300 w-72 h-screen flex flex-col p-6">
      <div className="flex text-lg text-gray-300 mb-6"><FaRocket className="mr-2" />Get Started</div>
      

      <div className="mb-6 space-y-4">
        <h4 className="text-sm text-gray-300 mb-3">Catagories</h4>
        <ul className="space-y-4">
          <li className="flex text-xs items-center cursor-pointer  hover:text-gray-400">
            <FaThLarge className="mr-3" /> All items
          </li>
          <li className="flex text-xs items-center cursor-pointer hover:text-gray-400">
            <FaKey className="mr-3" /> Password
          </li>
          <li className="flex text-xs items-center cursor-pointer hover:text-gray-400">
            <FaStickyNote className="mr-3" /> Notes
          </li>
          <li className="flex text-xs items-center cursor-pointer hover:text-gray-400">
            <FaUserCircle className="mr-3" /> Personal Info
          </li>
          <li className="flex text-xs items-center cursor-pointer hover:text-gray-400">
            <FaShare className="mr-3" /> sharing center 
          </li>
          <li className="flex text-xs items-center cursor-pointer hover:text-gray-400">
            <FaTrash className="mr-3" /> trash 
          </li>
        </ul>
      </div>

      <div className="mb-6 space-y-6">
        <h4 className="text-sm text-gray-100 mb-3 space-y-4">WALLET</h4>
        <ul className="space-y-5">
          <li className="flex text-xs items-center cursor-pointer hover:text-gray-400">
            <FaWallet className="mr-3" /> Credit Card
          </li>
          <li className="flex text-xs items-center cursor-pointer hover:text-gray-400">
            <FaUniversity className="mr-3" /> Bank Account
          </li>
          <li className="flex text-xs items-center cursor-pointer hover:text-gray-400">
            <FaBitcoin className="mr-3" /> Crypto Account
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-sm text-gray-100 mb-3">FOLDERS</h4>
        <ul className="space-y-3">
          <li className="flex items-center cursor-pointer hover:text-gray-400">
            <FaFolderPlus className="mr-3 text-xs" /> Add new folder
          </li>
        </ul>
      </div>

      <div className='h-[2px] w-[250px] bg-gray-400 mt-[15px]'>

      </div>

      <div>
        <h4 className="text-sm text-gray-400 mb-3 mt-5">TOOLS</h4>
        <ul className="space-y-3">
          <li className="flex items-center cursor-pointer hover:text-gray-400">
            <FaTools className="mr-3" /> Password Generator
          </li>
          <li className="flex items-center cursor-pointer hover:text-gray-400">
            <FaTools className="mr-3 bg-gradient-to-r from-green to green-200" /> Password Health
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;