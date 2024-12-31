import useTipStore from "./store/tipStore";
import useBillStore from "./store/billStore";
import usePeopleStore from "./store/peopleStore";


function resultCalc() {
  const tip=useTipStore(state=>state.tip);
  const bill=useBillStore(state=>state.bill);
  const people=usePeopleStore(state=>state.people);
  const tipAmount=(bill*tip)/100
  const total=tipAmount*people;
  return {tipAmount,total};


  
}

export default resultCalc;  // Export the resultCalc function