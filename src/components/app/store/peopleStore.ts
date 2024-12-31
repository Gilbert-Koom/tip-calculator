import { create } from 'zustand'

interface peopleState {
  people: number,
  increase: (by: number) => void
}

const usePeopleStore = create<peopleState>((set) => ({
  people: 0,
  increase: (by) => set(() => ({ people: by })),
}))

export default usePeopleStore