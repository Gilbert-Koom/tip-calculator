

interface AmountProps {
  amount: number;
  type: string;
}

function Amount({ amount,type }: AmountProps) {
  return (
    <div>
      <div>
        <p>{type}</p>
        <p>/ person</p>
      </div>
      <p>{amount}</p>
    </div>
  );
  
}

export default Amount;  // Export the Amount component