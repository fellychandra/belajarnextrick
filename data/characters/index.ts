import axios from "axios";

export const DataCharacters = async () => {
  try {
    const { data } = await axios.get(`${process.env.LINK_API}/character`);
    return data;

  } catch (error) {
    console.log(error);
  }
};

export const DataCharacterDetails = async (id: any) => {
  try {
    const { data } = await axios.get(`${process.env.LINK_API}/character/${id}`);
    return data;

  } catch (error) {
    console.log(error);
  }
};
