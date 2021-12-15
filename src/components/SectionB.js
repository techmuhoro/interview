import { useState } from 'react';

import { Button } from './';

export function SectionB() {
  const [value, setValue] = useState(0);

  const incrementValue = num => {
    setValue(prev => prev + num);
  };

  return (
    <div className='border-b border-gray-500 pt-20 pl-10 pb-20'>
      <p className='font-bold text-2xl mb-5'>Section B</p>
      <div>
        <p className='mb-5 rounded-md border-2 border-blue-700 w-20 h-20 flex items-center justify-center text-2xl mx-auto'>
          {value}
        </p>
      </div>
      <div className='flex justify-center'>
        <div>
          <Button
            text={'ButtonA'}
            increment={1}
            incrementValue={incrementValue}
          />
          <Button
            text={'ButtonB'}
            increment={10}
            incrementValue={incrementValue}
          />
          <Button
            text={'ButtonC'}
            increment={100}
            incrementValue={incrementValue}
          />
        </div>
      </div>
    </div>
  );
}
