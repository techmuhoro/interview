import { useContext } from 'react';
import { MyContext } from './App';
import { ComponentA } from './';
export function SectionC() {
  const value = useContext(MyContext);

  return (
    <div className='border-b border-gray-500 pt-20 pl-10 pb-20'>
      <p className='font-bold text-2xl mb-5'>Section C</p>
      <ComponentA />
    </div>
  );
}
