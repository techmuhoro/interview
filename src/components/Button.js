export function Button({ text, increment, incrementValue }) {
  return (
    <>
      <button
        className='bg-blue-500 mr-4 px-10 py-2 rounded-3xl text-white'
        onClick={() => incrementValue(increment)}
      >
        {text}
      </button>
    </>
  );
}
