import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";

function Tip() {
  return(
    <div>
      <Label htmlFor="tip">Select Tip</Label>
      <div>
        <Button>5%</Button>
        <Button>10%</Button>
        <Button>15%</Button>
        <Button>25%</Button>
        <Button>50%</Button>
        <Button>Custom</Button>
      </div>
    </div>
  )
  
}

export default Tip;  // Export the Tip component