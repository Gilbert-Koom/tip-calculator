import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

function People() {
  return (
    <div>
      <Label htmlFor="people">Number of People</Label>
      <Input type="number" />
    </div>
  );
  
}

export default People;  // Export the People component