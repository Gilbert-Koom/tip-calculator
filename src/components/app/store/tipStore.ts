import { create } from 'zustand'

interface tipState {
  tip: number
  increase: (by: number) => void
}

const useTipStore = create<tipState>()((set) => ({
  tip: 0,
  increase: (by) => set(() => ({ tip: by })),
}))

export default useTipStore