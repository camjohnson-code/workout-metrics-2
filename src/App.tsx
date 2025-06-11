import { Button } from '@/components/ui/button';
import { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
    console.log('Button clicked!');
  };

  return (
    <div className='flex min-h-svh flex-col items-center justify-center'>
      <Button onClick={handleClick} className='mt-4 cursor-pointer'>
        {clicked ? 'Clicked!' : 'Click me'}
      </Button>
    </div>
  );
}

export default App;
