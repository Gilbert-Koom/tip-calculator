import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import usePeopleStore from "./store/peopleStore";
import { useEffect, useState } from "react";
import './people.css'

function People() {
  const people=usePeopleStore(state=>state.people);
  const updater=usePeopleStore(state=>state.increase);
  const [style1,setStyle1]=useState('noError')
  useEffect(()=>{
    if (people<1) {
      setStyle1('Error')

      console.log('people is less than 1')
    }

    isNaN(people) ?(
      console.log('the type is not a number')
    ):console.log('hmm')

    people>0?(
      setStyle1('noError')
    ):console.log("no fucking error")
  },[people])



  return (
    <div>
      <Label htmlFor="people">Number of People</Label>
      <small id={style1}>Can't be zero</small>
      <Input type="number" 
        onChange={(e)=>updater(parseFloat(e.target.value))}
        value={people}
        min={0}
      />
    </div>
  );
  
}

export default People;  // Export the People component