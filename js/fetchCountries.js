const apiURL = 'https://restcountries.com/v3.1';
export const fetchCountries = countryName => {
  return fetch(
    `${apiURL}/name/${countryName}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
