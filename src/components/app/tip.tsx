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
    <div>
      <Label htmlFor="tip">Select Tip</Label>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        <Button onClick={()=>tipUpdater(5)}>5%</Button>
        <Button onClick={()=>tipUpdater(10)}>10%</Button>
        <Button onClick={()=>tipUpdater(15)}>15%</Button>
        <Button onClick={()=>tipUpdater(25)}>25%</Button>
        <Button onClick={()=>tipUpdater(50)}>50%</Button>
        {showCustom ? (
          <Input type="number" id="tip" placeholder="Custom"
          value={tip}
          onChange={(e)=>tipUpdater(Number(e.target.value))} 
          />
        ) : (
          <Button onClick={()=>setShowCustom(!showCustom)}>Custom</Button>
        )}
        
        
      </div>
    </div>
  )
  
}

export default Tip;  // Export the Tip component