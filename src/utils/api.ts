const API_BASE_URL="https://private-fd11c3-ishop1.apiary-mock.com/skus/"

const handleResponse = async (response: Response) => {
  if (!response.ok) throw new Error('Network response was not ok');
  const data = await response.json();
  return data;
}

export const getProductSKU = async () => {
  const url = `${API_BASE_URL}/MKU-EERER982FDB9y2WWAUS9C`;
  const response = await fetch(url);
  return handleResponse(response);
}