import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function Account() {
  const { account } = useContext(GlobalContext);

  return (
    <div className="flex items-center flex-col md:flex-row justify-between">
       {account === null
          ? ""
          :
         <svg
           className="w-6 h-6 hover:text-[#F5A700]"
            fill="none"
            viewBox="0 0 24 24"
           stroke="currentColor"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" 
           />
          </svg>
        }
        <span className='uppercase text-sm font-semibold text-[#F5A700]'>
        {account === null
          ? ""
          : account
          ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
          : ""}
        </span>

    </div>
  );
}


