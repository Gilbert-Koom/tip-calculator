import { Input } from "../ui/input";
import { Label } from "../ui/label";
import useBillStore from "./store/billStore";
import dollarIcon from './assets/icon-dollar.svg'

function Bill() {
  const bill=useBillStore(state=>state.bill);
  const updater=useBillStore(state=>state.updateBill);
  return (
    <div className="mt-[5%]">
      <Label htmlFor="email" className="block mb-[2%]">Bill</Label>
      <div className="relative inline-block w-full">
        <Input type="number"
          className="bg-[#f3f8fb] rounded-[5px] w-full"
          onChange={(e)=>updater(parseFloat(e.target.value))}
          value={bill}
          min={0}
        />
        <p className="absolute top-0 left-0 mr-1 w-[10%]">
          <img src={dollarIcon} alt="Dollar sign" className="m-auto mt-2" />
        </p>

      </div>
      
    </div>
  );
  
}

export default Bill;  // Export the Bill component