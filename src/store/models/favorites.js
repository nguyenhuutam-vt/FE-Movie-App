import axios from "../../service/axios";
export const user = {
  state: {
    favorites: {
      // username: "",
      // billingPlanExpiredAt: null,
      // billingPlan_billingPlanName: "",
      // billingPlan_id: null,
      // fullName: "",
      // address: null,
      // phoneNumber: "",
      // avatar: null,
      // dateOfBirth: null,
      // email: "",
    },
  },
  reducers: {
    setListUser(state, favorites) {
      return {
        ...state,
        favorites,
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
