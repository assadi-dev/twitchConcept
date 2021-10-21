import axios from "axios";
export const GET_TOP_GAMES = "GET_TOP_GAMES";
export const GET_GAMES = "GET_GAMES";

export const getTopGames = () => {
  return async (dispatch) => {
    try {
      await axios
        .get("https://api.twitch.tv/helix/games/top?first=15")
        .then((res) => {
          let data = res.data.data;
          dispatch({ type: GET_TOP_GAMES, payload: data });
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGames = () => {
  return async (dispatch) => {
    try {
      await axios
        .get("https://api.twitch.tv/helix/games/top?first=20")
        .then((res) => {
          let data = res.data.data;
          dispatch({ type: GET_TOP_GAMES, payload: data });
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getNextGames = (pagination) => {
  return async (dispatch) => {
    try {
      await axios
        .get(
          `https://api.twitch.tv/helix/games/top?first=20after=${pagination}`
        )
        .then((res) => {
          let data = res.data.data;
          dispatch({ type: GET_TOP_GAMES, payload: data });
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      console.log(error);
    }
  };
};
