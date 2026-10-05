const BASE_URL = "https://api.fda.gov/drug/label.json";

export const searchMedicines = async (query, signal) => {
  const response = await fetch(
    `${BASE_URL}?search=openfda.brand_name:${encodeURIComponent(query)}&limit=20`,
    { signal }
  );

  if (!response.ok) {
    throw new Error("No results found");
  }

  return response.json();

};
