import InputFields from "./inputfield";
import Results from "./result";

function Calculator() {
  return (
    <div className="bg-white md:grid grid-cols-2 w-full rounded-t-[15px] md:w-2/3 m-auto md:rounded-b-[15px]">
      <InputFields/>
      <Results />
    </div>
  )
  
}

export default Calculator;  // Export the Calculator component