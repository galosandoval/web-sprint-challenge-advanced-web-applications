import { axiosWithAuth } from "../utils/axiosWithAuth";

export const fetchBubbles = (setColorList) => {
  axiosWithAuth()
    .get("/api/colors")
    .then((res) => setColorList(res.data))
    .catch((err) => err);
};
