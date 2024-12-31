import { Button } from "../ui/button";
import Amount from "./tipAmount";

function Results() {
    return (
        <div>
            <Amount amount={0.00} type={'Tip Amount'}/>
            <Amount amount={0.00} type={'Total'}/>
            <Button>reset</Button>
        </div>
    );
  
}

export default Results;  // Export the Results component
