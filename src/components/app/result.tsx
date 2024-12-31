import { Button } from "../ui/button";
import useTipStore from "./store/tipStore";
import useBillStore from "./store/billStore";
import Amount from "./tipAmount";
import usePeopleStore from "./store/peopleStore";
import resultCalc from "./resultCalculator";

function Results() {
    const update=useTipStore(state=>state.increase);
    const updateBill=useBillStore(state=>state.updateBill);
    const updatePeople=usePeopleStore(state=>state.increase);
    const tip=useTipStore(state=>state.tip);
    const bill=useBillStore(state=>state.bill);
    const people=usePeopleStore(state=>state.people);   
    console.log(bill); 
    console.log(people);
    console.log(`tip is ${tip}`);
    const {fixedTipAmount,fixedTotal}=resultCalc();
    return (
        <div>
            <Amount amount={fixedTipAmount} type={'Tip Amount'}/>
            <Amount amount={fixedTotal} type={'Total'}/>
            <Button
                onClick={()=>{
                    update(0);
                    updateBill(0);
                    updatePeople(0);
                }}
            >reset</Button>
        </div>
    );
  
}

export default Results;  // Export the Results component
