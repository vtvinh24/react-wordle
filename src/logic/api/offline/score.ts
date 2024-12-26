export const getBaseScore = async (word) => {
  try {
    const response = await axios.get(`${API_URL}/base-score/${word}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get base score");
  }
};
