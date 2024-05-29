export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string,
  location: {name: string, url: string},
  image: string,
  bestquotes: string[],
  url: string,
  created: string,
}

export interface CharacterQuote {
  name: string;
  quotes: string[]
}
