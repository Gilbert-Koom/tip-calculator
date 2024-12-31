import Bill from "./bill";
import People from "./noPeople";
import Tip from "./tip";

function InputFields() {
  return (
    <div>
      <Bill />
      <Tip />
      <People />
    </div>
  );
  
}

export default InputFields;  // Export the InputFields component