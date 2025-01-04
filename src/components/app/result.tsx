import { Button } from "../ui/button";
import useTipStore from "./store/tipStore";
import useBillStore from "./store/billStore";
import Amount from "./tipAmount";
import usePeopleStore from "./store/peopleStore";
import resultCalc from "./resultCalculator";
import { useEffect, useState } from "react";

function Results() {
    const update=useTipStore(state=>state.increase);
    const updateBill=useBillStore(state=>state.updateBill);
    const updatePeople=usePeopleStore(state=>state.increase);
    const tip=useTipStore(state=>state.tip);
    const bill=useBillStore(state=>state.bill);
    const people=usePeopleStore(state=>state.people);   
    console.log(bill); 
    console.log(`people is ${people}`);
    console.log(`tip is ${tip}`);
    const {fixedTipAmount,fixedTotal}=resultCalc();
    const [tipAmt,setTipAmt]=useState(fixedTipAmount)
    const [tipTotal,setTipTotal]=useState(fixedTotal)
    console.log(`tipAmt is ${tipAmt}`)
    useEffect(()=>{
        if (people>0){
            setTipAmt(fixedTipAmount);
            setTipTotal(fixedTotal);
        }
    },[fixedTipAmount,fixedTotal,people])
    return (
        <div>
            <Amount amount={tipAmt} type={'Tip Amount'}/>
            <Amount amount={tipTotal} type={'Total'}/>
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
