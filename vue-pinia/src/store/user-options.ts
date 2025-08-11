import { defineStore } from 'pinia';

interface UserInfo {
  name: string;
  age: number;
  address: string;
  isAdmin: boolean;
}

interface State {
  userList: UserInfo[];
  user: UserInfo | null;
}

// export const useUserStore = defineStore('user', {
//   state: (): State => {
//     return {
//       userList: [],
//       user: null,
//     };
//   },
// });

export const useUserStore = defineStore('user', {
  state: () => ({ userData: null as User[] | null }),
  // actions 함수 내에서는 비동기 함수도 잘 동작한다.
  actions: {
    async fetchUser() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        this.userData = await res.json();
      } catch (error) {
        console.error(error);
      }
    },
  },
});
