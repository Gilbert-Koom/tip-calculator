import Bill from "./bill";
import People from "./noPeople";
import Tip from "./tip";

function InputFields() {
  return (
    <div className="pl-[5%] pr-[5%] rounded-lg">
      <Bill />
      <Tip />
      <People />
    </div>
  );
  
}

export default InputFields;  // Export the InputFields component