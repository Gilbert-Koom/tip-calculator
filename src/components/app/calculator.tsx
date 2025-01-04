import InputFields from "./inputfield";
import Results from "./result";

function Calculator() {
  return (
    <div className="md:grid grid-cols-2 bg-green-600">
      <InputFields />
      <Results />
    </div>
  )
  
}

export default Calculator;  // Export the Calculator component