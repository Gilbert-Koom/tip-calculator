import useTipStore from "./store/tipStore";
import useBillStore from "./store/billStore";
import usePeopleStore from "./store/peopleStore";


function resultCalc() {
  const tip=useTipStore(state=>state.tip);
  const bill=useBillStore(state=>state.bill);
  const people=usePeopleStore(state=>state.people);

  tip>0 && bill>0 && people>0 ? (
    console.log('true')
  ) : console.log('hey')

  const tipAmount=(bill*tip)/100
  const fixedTipAmount=tipAmount.toFixed(2);
  console.log(tipAmount);

  const total=tipAmount*people;
  const fixedTotal=total.toFixed(2);
  console.log(total);
  console.log(typeof(fixedTipAmount));
  return {fixedTipAmount,fixedTotal};


  
}

export default resultCalc;  // Export the resultCalc function