const initialStateCustumer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
export default function reducer2(state = initialStateCustumer, action) {
  switch (action.type) {
    case "createCustumer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    default:
      return state;
  }
}
export function createCustumer(fullName, nationalID) {
  return {
    type: "createCustumer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}
