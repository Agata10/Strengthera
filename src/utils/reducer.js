export const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case 'GET_EXERCISES':
      console.log(JSON.parse(localStorage.getItem('workouts')));
      return JSON.parse(localStorage.getItem('workouts'));
    case 'ADD_EXERCISE':
      newState = state.map((d) => {
        if (d.day === action.payload.day) {
          const doesExists = d.exercises.find(
            (e) => e.name === action.payload.exercise.name
          );
          if (doesExists) {
            return d;
          } else {
            return {
              ...d,
              exercises: [...d.exercises, action.payload.exercise],
            };
          }
        }
        return d;
      });
      localStorage.setItem('workouts', JSON.stringify(newState));
      return newState;
    case 'DELETE_EXERCISE':
      newState = state.map((d) => {
        if (d.day === action.payload.day) {
          return {
            ...d,
            exercises: d.exercises.filter(
              (e) => e.name !== action.payload.exercise_name
            ),
          };
        }
        return d;
      });
      localStorage.setItem('workouts', JSON.stringify(newState));
      return newState;
    case 'UPDATE_SETS':
    case 'UPDATE_REPS':
      newState = state.map((d) => {
        if (d.day === action.payload.day) {
          return {
            ...d,
            exercises: d.exercises.map((e) => {
              if (e.name == action.payload.exercise_name) {
                return {
                  ...e,
                  [action.type === 'UPDATE_SETS' ? 'sets' : 'reps']:
                    action.payload.value,
                };
              }
              return e;
            }),
          };
        }
        return d;
      });
      localStorage.setItem('workouts', JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};
