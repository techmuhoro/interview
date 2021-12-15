import { useContext } from 'react';
import { MyContext } from './App';

export function ComponentE() {
  const { name, age, occupation } = useContext(MyContext);
  return (
    <>
      <h3>
        My name is: <strong>{name}</strong> age: <strong>{age}</strong> and
        occupation: <strong>{occupation}</strong>
      </h3>
    </>
  );
}
