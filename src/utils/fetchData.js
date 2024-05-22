export const exercisesOptions = {
  method: 'GET',
  url: `https://exercisedb.p.rapidapi.com/exercises`,
  params: {
    offset: '0',
    limit: '500',
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};
