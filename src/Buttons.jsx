import { useState } from "react";
import { useMemory } from "./Hooks/MemoryContext";
import clsx from "clsx";

export const ResetButton = () => {
    const { Reset} = useMemory();
  
    return (
      <button type="button" onClick={() => Reset()} className="h-20 m-auto md:mt-[10px] md:mb-[50px] mb-[8px] mt-2 font-bold inline-block rounded text-secondary bg-paper border-primary border-2 px-8 py-3 text-base text-center hover:bg-primary hover:text-paper disabled:cursor-not-allowed">Reset</button>
    );
  };
  

export const ToggleButton = () => {
    const {toggleDifficulty,isHard} = useMemory()
    const [isChecked, setIsChecked] = useState(false)
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
      toggleDifficulty()
  
    } 
  
    return (
      <div className={clsx("w-max mx-auto mt-[-80px]", {["md:mt-[-240px]"]: isHard,["md:mt-[-210px]"]: !isHard})}>
        <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <span className='label flex items-center text-sm font-medium '>
            Easy
          </span>
          <span
            className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 bg-paper`}
          >
            <span
              className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                isChecked ? 'translate-x-[28px]' : ''
              }`}
            ></span>
          </span>
          <span className='label flex items-center text-sm font-medium '>
            Hardcore
          </span>
        </label>
      </div>
    )
  }