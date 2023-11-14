"use client";
import CardCharacter from "@/components/card";
import React, { useEffect, useState } from "react";
import { CharacterInterface } from "@/types";
import Link from "next/link";
import Pagination from "@/components/pagination";
import axios from "axios";

interface CharactersState {
  results: any;
  info: any;
}

const Characters = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<CharactersState | null>(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      setCharacters(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);


  return (
    <>
      <h1 className="mt-5 text-center mb-6 text-5xl">Character Cards</h1>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-4">
          {characters?.results.map((character: CharacterInterface) => (
            <Link href={`/characters/${character.id}`} key={character.id}>
              <CardCharacter character={character}/>
            </Link>
          ))}
        </div>
        <Pagination page={page} lastPage={characters} setPage={setPage}/>
      </div>
    </>
  );
};

export default Characters;
