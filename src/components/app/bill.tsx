import { Input } from "../ui/input";
import { Label } from "../ui/label";

function Bill() {
  return (
    <div>
      <Label htmlFor="email">Bill</Label>
      <Input type="number" />
    </div>
  );
  
}

export default Bill;  // Export the Bill component