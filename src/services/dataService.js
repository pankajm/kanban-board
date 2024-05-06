import { URL } from "../constants";

const getData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default {
  getData: getData,
};
