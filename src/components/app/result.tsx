import { Button } from "../ui/button";
import useTipStore from "./store/tipStore";
import useBillStore from "./store/billStore";
import Amount from "./tipAmount";
import usePeopleStore from "./store/peopleStore";
import resultCalc from "./resultCalculator";

function Results() {
    const tip=useTipStore(state=>state.tip);
    const bill=useBillStore(state=>state.bill);
    const people=usePeopleStore(state=>state.people);
    console.log(tip);    
    console.log(bill); 
    console.log(people);
    const {tipAmount,total}=resultCalc();
    return (
        <div>
            <Amount amount={tipAmount} type={'Tip Amount'}/>
            <Amount amount={total} type={'Total'}/>
            <Button>reset</Button>
        </div>
    );
  
}

export default Results;  // Export the Results component
