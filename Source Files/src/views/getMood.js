export const getMood = () => {
    return fetch('https://testing-graycare.herokuapp.com/getStress').then(
      res => res.json()
    );
  };
