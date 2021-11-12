import Cookies from "js-cookie";

export const storageKey = "ssidKey";

export const setStorageKey = async (value) => {
  await Cookies.set(storageKey, JSON.stringify(value));
};

export const getStorageKey = async () => {
  let authKey = await Cookies.get(storageKey);
  return authKey;
};

export const removeStorageKey = async () => {
  Cookies.remove(storageKey);
};
