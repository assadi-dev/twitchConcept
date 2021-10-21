import { GET_TOP_GAMES } from "../actions/GameActions";

const initialState = {
  collections: [],
  isLoading: true,
};

const TopGamesReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_GAMES:
      return { ...state, collections: action.payload, isLoading: false };
      break;

    default:
      return state;
      break;
  }
};

export default TopGamesReducers;
