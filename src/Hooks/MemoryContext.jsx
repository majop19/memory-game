import { createContext, useContext, useMemo, useState } from 'react'
import { CARD_STATE, getInitialMemory, isMemoryFinished, isPairCards } from './../LibContent/memory'
import { animalsEasy, animalsHard} from './../LibContent/Animals'
const MemoryContext = createContext()

export const MemoryProvider = ({children}) => {
    const [cards, setCards] = useState(() => getInitialMemory(animalsEasy))
    const [difficulty, setDifficulty] = useState('easy')
    const [tryCount, setTryCount] = useState(0)
    
    const toggleDifficulty = () => {
        const prevState = difficulty
        setDifficulty(prev => prev === 'easy' ? 'hard' : 'easy')
        if (prevState === 'easy')
        setCards(getInitialMemory(animalsHard))
        else {
            setCards(getInitialMemory(animalsEasy))
        }
    }

    const isEasy = difficulty === 'easy'

    const isHard = difficulty === 'hard'
    
    
    const isFinish = useMemo(() => isMemoryFinished(cards), [cards]);

    const Reset = () => {
        setTryCount(0)
        const prevState = difficulty
        if (prevState === 'easy')
        setCards(getInitialMemory(animalsEasy))
        else {
            setCards(getInitialMemory(animalsHard))
        }
    }
    
    const onReturnCard = (returnedCard) => {
        if (returnedCard.state !== CARD_STATE.HIDE) {
          return;
        }
    
        const returnedCards = cards.filter((c) => c.state === CARD_STATE.RETURNED);
    
        if (returnedCards.length === 2 || returnedCards.includes(returnedCard.id)) {
          return;
        }
    
        setCards((current) =>
          current.map((card) => {
            if (returnedCard.id === card.id) {
              card.state = CARD_STATE.RETURNED;
              return card;
            }
            return card;
          })
        );
    
        if (returnedCards.length === 0) {
          return;
        }
    
        returnedCards.push(returnedCard);
        const isPair = isPairCards(returnedCards[0], returnedCards[1]);
    
        onCardChange(isPair, returnedCards);
      };
    
      const onCardChange = (isPair, returnedCards) => {
        setTimeout(
          () => {
            setCards((current) =>
              current.map((card) => {
                if (card.state === CARD_STATE.RETURNED && returnedCards.includes(card)) {
                  card.state = isPair ? CARD_STATE.FIND : CARD_STATE.HIDE;
                }
                return card;
              })
            );
    
            setTryCount((prev) => prev + 1);
          },
          isPair ? 400 : 1000
        );
      };
        
        
        
    const values = {cards, onReturnCard,tryCount,isFinish,Reset,difficulty,toggleDifficulty,isEasy,isHard}

    return (<MemoryContext.Provider value={values}>
             {children}
            </MemoryContext.Provider>)
}

export const useMemory = () => {
    const context = useContext(MemoryContext)

    if (!context) {
        throw new Error('memory pas dans le context')
    }
    return context}