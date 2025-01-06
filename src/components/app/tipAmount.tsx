import { useEffect, useState } from 'react';

interface AmountProps {
  amount: string;
  type: string;
}

function Amount({ amount,type }: AmountProps) {
  const [value, setValue] = useState(0);
  useEffect(()=>{
    !isNaN(parseFloat(amount)) ? setValue(parseFloat(amount)) : setValue(0);

  },[amount])

  return (
    <div className='w-[94%] m-auto flex justify-between mb-[10%]'>
      <div>
        <p className='text-[#c9e2df]'>{type}</p>
        <p>/ person</p>
      </div>
      <p className='text-[#24b7a4] text-4xl'>${value.toFixed(2)}</p>
    </div>
  );
  
}

export default Amount;  // Export the Amount component