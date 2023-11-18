import './index.css';
import './App.css'
import { MemoryProvider, useMemory } from './Hooks/MemoryContext'
import clsx from 'clsx';
import { MemorySection } from './MemorySection';



const MyApp = ({children}) => {
  const {isHard} = useMemory()
  return (<div
    id="app"
    className={clsx("h-full w-full",{
    ["dark"]: isHard,
  })}>
    {children}
  </div>)
}


function App() {
  
  return (
      <MemoryProvider>
      <MyApp>
        <MemorySection />
      </MyApp>
      </MemoryProvider>
      
    
  )
}

export default App
