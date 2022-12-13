export const products = (
  state = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case "success":
      return payload;
    case "loading":
      return payload;
    case "failed":
      return payload;

    default:
      return state;
  }
};
export const oneProduct = (
  state = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case "success":
      return payload;
    case "loading":
      return payload;
    default:
      return state;
  }
};
export const login = (
  state = { data: [], loading: false, error: [] },
  { type, payload }
) => {
  switch (type) {
    case "success":
      return payload;
    case "loading":
      return payload;
    case "failed":
      return payload;

    default:
      return state;
  }
};
export const signup = (
  state = { data: [], loading: false, error: [] },
  { type, payload }
) => {
  switch (type) {
    case "success":
      return payload;
    case "loading":
      return payload;
    case "failed":
      return payload;

    default:
      return state;
  }
};
export const profile = (state = { data: {}, error: [] }, { type, payload }) => {
  switch (type) {
    case "success":
      return payload;
    case "failed":
      return payload;

    default:
      return state;
  }
};
export const token = (state = "", { type, payload }) => {
  switch (type) {
    case "setToken":
      return payload;
    default:
      return state;
  }
};
export const checkLogin = (state = false, { type, payload }) => {
  switch (type) {
    case "checkLogin":
      return payload;
    default:
      return state;
  }
};
export const userData = (state = {data: [], error: [] }, { type, payload }) => {
  switch (type) {
    case "userData":
      return payload;
    default:
      return state;
  }
};
export const changePassword = (state = {data: [], error: [] }, { type, payload }) => {
  switch (type) {
    case "success":
      return payload;
    case "failed":
      return payload;
    default:
      return state;
  }
};
export const changeProfile = (state = {data: [], error: [] }, { type, payload }) => {
  switch (type) {
    case "success":
      return payload;
    case "failed":
      return payload;
    default:
      return state;
  }
};
export const uploadAvatar = (state = {data: [], error: [] }, { type, payload }) => {
  switch (type) {
    case "success":
      return payload;
    case "failed":
      return payload;
    default:
      return state;
  }
};
export const cartProduct = (state = [] , { type, payload }) => {
  switch (type) {
    case "oneProduct":
      return payload;

    default:
      return state;
  }
};