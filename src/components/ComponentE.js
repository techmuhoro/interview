import { useContext } from 'react';
import { MyContext } from './App';

export function ComponentE() {
  const { count } = useContext(MyContext);
  return (
    <>
      <h3 className='ml-2 text-lg mt-3'>
        Count is at <strong>{count}</strong>
      </h3>
    </>
  );
}
