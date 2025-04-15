// const { create } = require("zustand");
import { create } from 'zustand';

const useUserInfo = create((set) => ({
    userInfo: {},
    setUserInfo: (userInfo) => set(({ userInfo })),
}));

export default useUserInfo;
