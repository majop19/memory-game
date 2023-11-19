import { MemoryBoard } from './MemoryBoard';
import { useMemory } from './Hooks/MemoryContext';
import clsx from 'clsx';
import { ToggleButton , ResetButton} from './Buttons';


export const MemorySection = () => {
  const {isHard} = useMemory()
  
  return (<div className='relative flex flex-col flex-row content-center font-heading'>
            <h1 className="text-center font-bold text-4xl">Memory Game</h1>
            <p className={clsx("text-center mt-[-2rem]",{["md:mt-[-7rem]"]: isHard,["md:mt-[-9rem]"]: !isHard})}>Animal Pairs Memory Challenge: Match with Fewest Tries</p>
            <h2 className={clsx("font-bold text-xl mx-auto mt-[-4rem] mb-[20px]",{["md:mt-[-6rem] md:mb-10"]: isHard,["md:mt-[-10rem] md:mb-[-10]"]: !isHard})}>Switch the difficulty</h2>
            <ToggleButton/>
            <CurrentScore />
            <MemoryBoard />
            <ResetButton />
          </div>
  ); 
};

const CurrentScore = () => {
  const { tryCount, isFinish , isHard} = useMemory();

  if (isFinish) {
    return (
      <p className={clsx('text-center mb-3',{["mb-[25px]"]: isHard,["mb-[-30px]"]: !isHard})}>
        You <b>finished</b> the memory in {tryCount} times !
      </p>
    );
  }

  return <p className={clsx('text-center mb-3',{["mb-[25px]"]: isHard,["mb-[-30px]"]: !isHard})}>You try {tryCount} time{tryCount < 2 ? '' : 's'}.</p>;
};


