"use client";
import React, { useState } from "react";
import { DataCharacters } from "@/data/characters";
import Link from "next/link";
import CardCharacter from "@/components/card";
import Pagination from "@/components/pagination";

const Characters = () => {
  const [page, setPage] = useState(1);
  const { data } = DataCharacters(page);
  
  return (
    <>
      <h1 className="mt-5 text-center mb-6 text-5xl">Character Cards</h1>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-4">
          {data?.data?.results.map((character: any) => (
            <Link href={`/characters/${character.id}`} key={character.id}>
              <CardCharacter character={character} />
            </Link>
          ))}
        </div>
        <Pagination page={page} lastPage={data?.data} setPage={setPage}/>
      </div>
    </>
  );
};

export default Characters;
