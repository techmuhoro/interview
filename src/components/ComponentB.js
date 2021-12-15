import { useContext } from 'react';
import { MyContext } from './App';

export function ComponentB() {
  const { incrementCount } = useContext(MyContext);
  return (
    <>
      <button
        className='bg-blue-500 mr-4 px-10 py-2 rounded-3xl text-white'
        onClick={incrementCount}
      >
        ComponentB
      </button>
    </>
  );
}
