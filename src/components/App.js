import { createContext, useState } from 'react';
import { SectionB, SectionC } from './';

export const MyContext = createContext();

function App() {
  const [person, setPerson] = useState({
    name: 'James Muhoro',
    age: 22,
    occupation: 'Developer',
  });
  const myContext = createContext();
  return (
    <div>
      <SectionB />
      <MyContext.Provider value={person}>
        <SectionC />
      </MyContext.Provider>
    </div>
  );
}

export default App;
