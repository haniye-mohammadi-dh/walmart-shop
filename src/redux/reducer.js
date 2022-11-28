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
export const oneProduct=( state = { data: [], loading: false, error: "" },
{ type, payload })=>{
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
}
