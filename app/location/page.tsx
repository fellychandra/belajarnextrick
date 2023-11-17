"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Location = () => {
  const [getLocation, setLocation] = useState("");
  const [getNameLocation, setNameLocation] = useState<string[]>([]);

  useEffect(() => {
    const locations = localStorage.getItem("locations");
    const locationNames = localStorage.getItem("locationsName");
    if (locations && locationNames) {
      setLocation(JSON.parse(locations));
      setNameLocation(JSON.parse(locationNames));
    }
  }, []);

  return (
    <div className="container mx-auto p-5">
      <ul className="list-none">
        {getNameLocation &&
          getNameLocation?.map((location: any, i: any) => (
            <li className="p-5 border m-1 bg-slate-100" key={i}>
              <Link href={`location/${location}`}>
                <div>{location}</div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Location;
