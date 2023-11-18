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
      <div className={clsx('grid gap-2 w-max mx-auto mt-[-150px] mb-[10px]',{['grid-cols-6 grid-rows-6']: isEasy,['grid-cols-8 grid-rows-8']: !isEasy})}>
        {cards?.map((card) => (
          <MemoryCard onClick={() => onReturnCard(card)} key={card.id} card={card}>
            {card.emoji}
          </MemoryCard>
        ))}
      </div>
    );
  };