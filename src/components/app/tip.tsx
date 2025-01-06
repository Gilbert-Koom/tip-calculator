import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import useTipStore from "./store/tipStore";
import { Input } from "../ui/input";
import { useState } from "react";

// Tip component

function Tip() {
  const tip=useTipStore(state=>state.tip);
  const tipUpdater=useTipStore(state=>state.increase);
  const [showCustom,setShowCustom]=useState(false);
  return(
    <div className="my-[6%]">
      <Label htmlFor="tip">Select Tip %</Label>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 mt-[2%]">
        <Button className="rounded-[5px]" onClick={()=>tipUpdater(5)}>5%</Button>
        <Button className="rounded-[5px]" onClick={()=>tipUpdater(10)}>10%</Button>
        <Button className="rounded-[5px]" onClick={()=>tipUpdater(15)}>15%</Button>
        <Button className="rounded-[5px]" onClick={()=>tipUpdater(25)}>25%</Button>
        <Button className="rounded-[5px]" onClick={()=>tipUpdater(50)}>50%</Button>
        {showCustom ? (
          <Input type="number" id="tip" placeholder="Custom"
          value={tip}
          className="rounded-[5px]"
          onChange={(e)=>tipUpdater(Number(e.target.value))} 
          />
        ) : (
          <Button onClick={()=>setShowCustom(!showCustom)} className="rounded-[5px]">Custom</Button>
        )}
        
        
      </div>
    </div>
  )
  
}

export default Tip;  // Export the Tip component