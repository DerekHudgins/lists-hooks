const url = 'https://ac-vill.herokuapp.com/villagers?name=';

const fetchCharacterByName = (name) => {
  return fetch(`${url}${name}`).then((res) => res.json());
};

export default fetchCharacterByName;
