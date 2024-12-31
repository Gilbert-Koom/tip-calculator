import useBillStore from "./store/billStore";
import usePeopleStore from "./store/peopleStore";
import useTipStore from "./store/tipStore";

function reset() {
  const  updateBill=useBillStore(state=>state.updateBill);
  const people = usePeopleStore(state => state.increase);
  const tip=useTipStore(state=>state.increase);

  people(0);
  updateBill(0);
  tip(0);

  

}

export default reset; // Export the reset function  