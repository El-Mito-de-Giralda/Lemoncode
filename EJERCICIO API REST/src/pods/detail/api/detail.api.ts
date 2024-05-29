import { CharacterEntityApi } from "pods/character-collection/api";
import { CharacterEntityVm } from "pods/character-collection/character-collection.vm";
import { linkRoutes } from "core/router";


export const getDetail = async (id: string): Promise<CharacterEntityApi> => {
  const url = `http://localhost:3000/characters/${id}`;
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`Error fetching character details: ${response.statusText}`);
  }
};

