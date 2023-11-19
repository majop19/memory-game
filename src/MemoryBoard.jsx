import { MemoryCard } from './MemoryCard'
import { useMemory } from './Hooks/MemoryContext'
import clsx from 'clsx';
export const MemoryBoard = () => {
    const { cards, onReturnCard ,isEasy} = useMemory();
  
    if (!cards) {
      return (
        <p>An error occurs, there is no board.</p>
      );
    }
  
    return (
      <div className={clsx('grid gap-2 w-max mx-auto md:mt-[-150px] md:mb-[10px] mt-[-80px]',{['grid-cols-6 grid-rows-6']: isEasy,['md:grid-cols-8 md:grid-rows-8 grid-cols-10 grid-rows-6 mb-[-51px]']: !isEasy})}>
        {cards?.map((card) => (
          <MemoryCard onClick={() => onReturnCard(card)} key={card.id} card={card}>
            {card.emoji}
          </MemoryCard>
        ))}
      </div>
    );
  };