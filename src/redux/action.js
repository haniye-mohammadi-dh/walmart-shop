import axios from "axios";

export const getData = () => async (dispatch, getState) => {
  dispatch({
    type: "loading",
    payload: { data: [], loading: true, error: "" },
  });
  try {
    const { data } = await axios.get("http://kzico.runflare.run/product/");
    dispatch({
      type: "success",
      payload: { data: [...data], loading: false, error: "" },
    });
    console.log(data);
    console.log(getState().token);
    console.log(getState().checkLogin);
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "failed",
      payload: { data: [], loading: false, error: error.message },
    });
  }
};

export const getOneProduct = (productId) => async (dispatch, getState) => {
  dispatch({
    type: "success",
    payload: { data: [], loading: true, error: "" },
  });
  try {
    const { data } = await axios.get(
      `http://kzico.runflare.run/product/${productId}`
    );
    dispatch({
      type: "success",
      payload: { data: [data], loading: false, error: "" },
    });
  } catch (error) {
    const answer = error.response.data;
    dispatch({
      type: "failes",
      payload: { data: [], loading: false, error: answer },
    });
  }
};
export const cartProduct = (productId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://kzico.runflare.run/product/${productId}`
    );
    dispatch({ type: "oneProduct", payload: data });
    const arrayCart = [...JSON.parse(localStorage.getItem("product") ?? "[]")];
    arrayCart.push(getState().cartProduct);
    localStorage.setItem("product", JSON.stringify(arrayCart));
  } catch (error) {
    console.log(error.response.data);
  }
};
export const sendLogin = (userName, password) => async (dispatch, getState) => {
  dispatch({
    type: "loading",
    payload: { data: [], loading: true, error: [] },
  });
  try {
    const { data } = await axios.post("http://kzico.runflare.run/user/login", {
      email: `${userName}`,
      password: `${password}`,
    });
    console.log(data);
    dispatch({ type: "setToken", payload: data.user.token });
    dispatch({ type: "checkLogin", payload: data.success });
    localStorage.setItem("token", getState().token);
    localStorage.setItem("login", getState().checkLogin);
  } catch (error) {
    const answer = error.response.data;
    dispatch({
      type: "failed",
      payload: { data: [], loading: false, error: [answer] },
    });
  }
};

export const sendSignup =
  (userName, email, password, mobileNumber) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "http://kzico.runflare.run/user/signup",
        {
          username: `${userName}`,
          email: `${email}`,
          password: `${password}`,
          mobile: `${mobileNumber}`,
        }
      );
      dispatch({
        type: "success",
        payload: { data: [data], error: [] },
      });
      console.log(data.message);
      console.log("first");
    } catch (error) {
      const answer = error.response.data;
      console.log(answer);
      console.log("sec");
      dispatch({
        type: "failed",
        payload: { data: [], error: [answer] },
      });
    }
  };
export const getProfile = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("http://kzico.runflare.run/user/profile", {
      headers: {
        authorization: `Bearer ${getState().token}`,
      },
    });
    console.log(data.user);
    dispatch({ type: "userData", payload: data.user });
    localStorage.setItem("user", JSON.stringify(getState().userData));
  } catch (error) {}
};
export const password =
  (oldPassword, newPassword) => async (dispatch, getState) => {
    try {
      const { data } = await axios.put(
        "http://kzico.runflare.run/user/change-password",
        {
          old_password: `${oldPassword}`,
          new_password: `${newPassword}`,
        },
        {
          headers: {
            authorization: `Bearer ${getState().token}`,
          },
        }
      );
      console.log(getState().token);
      dispatch({
        type: "success",
        payload: { data: [data], error: [] },
      });
      console.log(data);
    } catch (error) {
      const answer = error.response.data;
      dispatch({
        type: "failed",
        payload: { data: [], error: [answer] },
      });
      console.log(answer);
    }
  };
export const profile =
  (firstName, lastName, age, city, gender) => async (dispatch, getState) => {
    try {
      const { data } = await axios.put(
        "http://kzico.runflare.run/user/change-profile",
        {
          firstname: `${firstName}`,
          lastname: `${lastName}`,
          gender: `male`,
          age: `${age}`,
          city: `${city}`,
        },
        {
          headers: {
            authorization: `Bearer ${getState().token}`,
          },
        }
      );
      console.log(getState().token);
      dispatch({
        type: "success",
        payload: { data: [data], error: [] },
      });
      console.log(data);
      localStorage.setItem("user", JSON.stringify(getState().userData));
    } catch (error) {
      const answer = error.response.data;
      dispatch({
        type: "failed",
        payload: { data: [], error: [answer] },
      });
      console.log(answer);
    }
  };
export const upload = (img) => async (dispatch, getState) => {
  const formData = new FormData();
  formData.append("profile-image", img);
  try {
    const { data } = await axios.post(
      "http://kzico.runflare.run/user/profile-image",
      formData,
      {
        headers: {
          authorization: `Bearer ${getState().token}`,
        },
      }
    );
    dispatch({
      type: "success",
      payload: { data: [data], error: [] },
    });
    console.log(data);
  } catch (error) {
    const answer = error.response.data;
    dispatch({
      type: "failed",
      payload: { data: [], error: [answer] },
    });
    console.log(answer);
  }
};
export const submitCart = (city,address,postal,number) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(
      "http://kzico.runflare.run/order/submit",
      {
        orderItems: [
          { product: "productId", qty: 2 },
          { product: "productId", qty: 2 },
        ],
        shippingAddress: {
          address: `${address}`,
          city: `${city}`,
          postalCode:`${ postal}`,
          phone:` ${number}`,
        },
        paymentMethod: "cash",
        shippingPrice: "5",
        totalPrice: 3,
      },
      {
        headers: {
          authorization:`Bearer ${getState().token}`,
        },
      }
    );
    dispatch({
      type: "success",
      payload: { data: [data], error: [] },
    });
    console.log(data);
  } catch (error) {
    const answer = error.response.data;
    console.log(answer);
    console.log("sec");
    dispatch({
      type: "failed",
      payload: { data: [], error: [answer] },
    });
  }
};
