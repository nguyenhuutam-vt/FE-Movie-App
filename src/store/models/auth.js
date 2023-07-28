import axios from "axios";
export const auth = {
  state: {
    isAuthenticated: false,
  },
  reducers: {
    setAuth(state, isAuthenticated) {
      return {
        ...state,
        isAuthenticated,
      };
    },
  },
  effects: (dispatch) => ({
    async login(payload) {
      const { username, password } = payload;
      return axios({
        method: "post",
        url: process.env.REACT_APP_LOGIN_URL,
        data: {
          username: username,
          password: password,
        },
      });
    },
    async sigup(payload) {
      const {
        email,
        password,
        username,
        billing_plan_id,
        full_name,
        address,
        phone_number,
        avatar,
        dateOfBirth,
      } = payload;
      return axios({
        method: "post",
        url: process.env.REACT_APP_SIGNUP_URL,
        data: {
          email: email,
          password: password,
          username: username,
          billing_plan_id: billing_plan_id,
          full_name: full_name,
          address: address,
          phone_number: phone_number,
          avatar: avatar,
          dateOfBirth: dateOfBirth,
        },
      });
    },
  }),
};
