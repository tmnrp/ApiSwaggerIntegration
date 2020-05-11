import { psFindByStatus } from "../../api/PetStoreApi";

export const updatePets = (state, isUnique) => {
  return async (dispatch, getState) => {
    const res = await psFindByStatus.get(`?status=${state}`);
    let data;
    if (res && res.data && isUnique) {
      const names = [];
      data = res.data.filter((record) => {
        if (!names.includes(record.name)) {
          names.push(record.name);
          return true;
        }
      });
    }

    dispatch({
      type: "UPDATE_PETS",
      payload: data
    });
  };
};
