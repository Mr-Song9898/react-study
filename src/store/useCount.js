import { create } from 'zustand';

const useCount = create((set) => set({
  countInfo: {
    count: 0,
  },
  updateCount: (countInfo) => set(({ countInfo })),
}));

export default useCount;