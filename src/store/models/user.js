import axios from "../../service/axios";
export const user = {
  state: {
    userInfo: null,
  },
  reducers: {
    setListUser(state, userInfo) {
      return {
        ...state,
        userInfo,
      };
    },
    setCount(state, payload) {
      return state + payload;
    },
  },
  effects: (dispatch) => ({
    async getUserInfo() {
      axios({
        method: "get",
        url: "/info",
      })
        .then((res) => {
          this.setListUser(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }),
};
