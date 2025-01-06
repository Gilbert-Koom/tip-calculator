import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import usePeopleStore from "./store/peopleStore";
import { useEffect, useState } from "react";
import './people.css'
import personIcon from './assets/icon-person.svg'

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
    <div className="mb-[8%]">
      <div className="flex justify-between mb-[2%]">
        <Label htmlFor="people">Number of People</Label>
        <small id={style1}>Can't be zero</small>
      </div>
      <div className="relative inline-block w-full">
        <Input type="number" 
          className="bg-[#f3f8fb] rounded-[5px] w-full"
          onChange={(e)=>updater(parseFloat(e.target.value))}
          value={people}
          min={0}
        />
        <p className="absolute top-0 left-0 mr-1 w-[10%]">
          <img src={personIcon} alt="Person Sign" className="m-auto mt-2"/>
        </p>
      </div>
    </div>
  );
  
}

export default People;  // Export the People component