"use client";
import DetailCharacter from "@/components/character";
import { DataCharacterDetails } from "@/data/characters";
import React, { useEffect, useState } from "react";

type Props = {
  params: { id: number };
};

const DetailCharacterPage = ({ params }: Props) => {
  return (
    <>
      <h1 className="mt-5 text-center mb-5 text-5xl">Character Details</h1>
      <div className="container flex items-center justify-center ">
        <div>
          <DetailCharacter id={params.id} />
        </div>
      </div>
    </>
  );
};

export default DetailCharacterPage;
