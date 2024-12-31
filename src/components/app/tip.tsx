import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import useTipStore from "./store/tipStore";

function Tip() {
  const tipUpdater=useTipStore(state=>state.increase);
  return(
    <div>
      <Label htmlFor="tip">Select Tip</Label>
      <div>
        <Button onClick={()=>tipUpdater(5)}>5%</Button>
        <Button onClick={()=>tipUpdater(10)}>10%</Button>
        <Button onClick={()=>tipUpdater(15)}>15%</Button>
        <Button onClick={()=>tipUpdater(25)}>25%</Button>
        <Button onClick={()=>tipUpdater(50)}>50%</Button>
        <Button>Custom</Button>
      </div>
    </div>
  )
  
}

export default Tip;  // Export the Tip component