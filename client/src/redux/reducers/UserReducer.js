import { GET_USER_TOKEN } from "../actions/UserActions";

const initialState = {
  access_token: "",
  refresh_token: "",
  isLoading: true,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_TOKEN:
      return {
        ...state,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        isLoading: false,
      };

      break;

    default:
      return state;
      break;
  }
};

export default UserReducer;
