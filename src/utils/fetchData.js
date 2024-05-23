const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
  url: 'https://exercisedb.p.rapidapi.com/exercises',
};

export const exercisesOptions = {
  method: options.method,
  url: options.url,
  params: {
    offset: '0',
    limit: '500',
  },
  headers: options.headers,
};

export const bodyPartsListOptions = {
  method: options.method,
  url: options.url + '/bodyPartList',
  headers: options.headers,
};

export const exerciseInfoOptions = (exerciseId) => ({
  method: options.method,
  url: options.url + `/exercise/${exerciseId}`,
  headers: options.headers,
});
