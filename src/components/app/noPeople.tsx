import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import usePeopleStore from "./store/peopleStore";

function People() {
  const people=usePeopleStore(state=>state.people);
  const updater=usePeopleStore(state=>state.increase);
  return (
    <div>
      <Label htmlFor="people">Number of People</Label>
      <Input type="number" 
        onChange={(e)=>updater(parseFloat(e.target.value))}
        value={people}
      />
    </div>
  );
  
}

export default People;  // Export the People component