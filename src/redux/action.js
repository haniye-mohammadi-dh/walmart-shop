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
  } catch (error) {
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
      type: "failed",
      payload: { data: [], loading: false, error: answer },
    });
  }
};
export const cartProduct = (product, id) => async (dispatch, getState) => {
  const arrayCart = localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : [];
  localStorage.setItem("product", JSON.stringify(arrayCart));

  product[0].qty = 1;
  arrayCart.push(product[0]);
  localStorage.setItem("product", JSON.stringify(arrayCart));
};
export const plusQty = (id) => async (dispatch, getState) => {
  const arrayCart = localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : [];
  arrayCart.forEach((cartItem) => {
    if (cartItem._id === id && cartItem.countInStock > cartItem.qty) {
      ++cartItem.qty;
    }
  });
  localStorage.setItem("product", JSON.stringify(arrayCart));
};
export const minusQty = (id) => async (dispatch, getState) => {
  const arrayCart = localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : [];
  arrayCart.forEach((cartItem) => {
    if (cartItem._id === id && 1 < cartItem.qty) {
      --cartItem.qty;
    }
  });
  localStorage.setItem("product", JSON.stringify(arrayCart));
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
  
    } catch (error) {
      const answer = error.response.data;

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
    
      dispatch({
        type: "success",
        payload: { data: [data], error: [] },
      });

    } catch (error) {
      const answer = error.response.data;
      dispatch({
        type: "failed",
        payload: { data: [], error: [answer] },
      });

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
          gender: `${gender}`,
          age: `${age}`,
          city: `${city}`,
        },
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
   
      localStorage.setItem("user", JSON.stringify(getState().userData));
    } catch (error) {
      const answer = error.response.data;
      dispatch({
        type: "failed",
        payload: { data: [], error: [answer] },
      });
  
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
  
  } catch (error) {
    const answer = error.response.data;
    dispatch({
      type: "failed",
      payload: { data: [], error: [answer] },
    });
   
  }
};
export const submitCart =
  (city, address, postal, number) => async (dispatch, getState) => {

    
    dispatch({
      type: "loading",
      payload: { data: [], loading:true },
    });
    try {
      const { data } = await axios.post(
        "http://kzico.runflare.run/order/submit",
        {
          orderItems: JSON.parse(localStorage.getItem("orderItems")),
          shippingAddress: {
            address: `${address}`,
            city: `${city}`,
            postalCode: `${postal}`,
            phone: ` ${number}`,
          },
          paymentMethod: "cash",
          shippingPrice: "5",
          totalPrice: JSON.parse(localStorage.getItem("price")),
        },
        {
          headers: {
            authorization: `Bearer ${getState().token}`,
          },
        }
      );
      dispatch({
        type: "success",
        payload: { data: [data], loading: false },
      });
    
      localStorage.setItem("checkOut", JSON.stringify(data));
    } catch (error) {
      const answer = error.response.data;


    }
  };
export const removeItemm = (id) =>  (dispatch, getState) => {
  const arrayCart = localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : [];
  arrayCart.forEach((cartItem) => {
    if (cartItem._id === id) {
      arrayCart.splice(id, 1);
    }
  });
  localStorage.setItem("product", JSON.stringify(arrayCart));
};
export const allOrder = () => async (dispatch, getState) => {
  dispatch({
    type: "loading",
    payload: { data: [], loading: true, error: "" },
  });
  try {
    const { data } = await axios.get("http://kzico.runflare.run/order/", {
      headers: {
        authorization: `Bearer ${getState().token}`,
      },
    });

    dispatch({
      type: "success",
      payload: { data: [...data], loading: false, error: "" },
    });
    localStorage.setItem("orders", JSON.stringify(data));
  
  } catch (error) {
    dispatch({
      type: "failed",
      payload: { data: [], loading: false, error: error.message },
    });
    
  }
};
export const oneOrder = (orderId) => async (dispatch, getState) => {
  dispatch({
    type: "loading",
    payload: { data: [], loading: true, error: "" },
  });


  try {
    const { data } = await axios.get(
      `http://kzico.runflare.run/order/${orderId}`,
      {
        headers: {
          authorization: `Bearer ${getState().token}`,
        },
      }
    );
    dispatch({
      type: "success",
      payload: { data: [data], loading: false, error: "" },
    });
  
  } catch (error) {
    const answer = error.response.data;
    dispatch({
      type: "failed",
      payload: { data: [], loading: false, error: answer },
    });
  }
};
