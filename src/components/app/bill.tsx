import { Input } from "../ui/input";
import { Label } from "../ui/label";
import useBillStore from "./store/billStore";

function Bill() {
  const bill=useBillStore(state=>state.bill);
  const updater=useBillStore(state=>state.updateBill);
  return (
    <div>
      <Label htmlFor="email">Bill</Label>
      <Input type="number"
        onChange={(e)=>updater(parseFloat(e.target.value))}
        value={bill}
        min={0}
      />
    </div>
  );
  
}

export default Bill;  // Export the Bill component