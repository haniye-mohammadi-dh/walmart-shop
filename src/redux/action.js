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
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "failed",
      payload: { data: [], loading: false, error: error.message },
    });
  }
};

export const getOneProduct =
  (productId, product, setProduct) => async (dispatch, getState) => {
    dispatch({
      type: "loading",
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
      dispatch({
        type: "failed",
        payload: { data: [], loading: false, error: error.message },
      });
      console.log(error);
    }
  };
