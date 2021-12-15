import { createContext, useState } from 'react';
import { SectionB, SectionC } from './';

export const MyContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(prev => prev + 1);

  const myContext = createContext();
  return (
    <div>
      <SectionB />
      <MyContext.Provider value={{ count, incrementCount }}>
        <SectionC />
      </MyContext.Provider>
    </div>
  );
}

export default App;
