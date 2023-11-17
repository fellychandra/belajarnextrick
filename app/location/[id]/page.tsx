"use client";
import CardCharacter from "@/components/card";
import React, { useEffect, useState } from "react";

type Props = {
  params: { id: string };
};

const DetailLocationPage = ({ params }: Props) => {
  const [getLocation, setLocation] = useState<string[]>([]);

  const filterKarakter = getLocation.filter((location: any) => {
    return location.location === params.id;
  });

  useEffect(() => {
    const locations = localStorage.getItem("locations");
    const locationNames = localStorage.getItem("locationsName");
    if (locations && locationNames) {
      setLocation(JSON.parse(locations));
    }
  }, []);

  // console.log(getLocation);
  console.log(filterKarakter);

  return (
    <>
      <h1 className="mt-5 text-center mb-6 text-5xl">Character by Location</h1>
      <div className="container">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-4">
          {filterKarakter?.map((karakter: any, i: any) => (
            <div key={i}>
              <CardCharacter character={karakter} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailLocationPage;
