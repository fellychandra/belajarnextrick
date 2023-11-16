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
      <div className="container flex items-center justify-center h-screen">
        <div className="flex flex-col items-center content-center object-center">
          <h1 className="mt-5 text-center mb-6 text-5xl">Character Details</h1>
          <div>
            <DetailCharacter id={params.id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCharacterPage;
