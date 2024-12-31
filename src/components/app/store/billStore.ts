import { create } from 'zustand'

type State = {
  bill: number
}

type Action = {
  updateBill: (bill: State['bill']) => void
}

// Create your store, which includes both state and (optionally) actions
const useBillStore = create<State & Action>((set) => ({
  bill: 0,
  updateBill: (bill) => set(() => ({ bill: bill })),
  
}))

export default useBillStore


