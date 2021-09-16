const url = 'https://ac-vill.herokuapp.com/villagers?perPage=397';

const fetchCharacters = () => {
  return fetch(url).then((res) => res.json());
};

export default fetchCharacters;
