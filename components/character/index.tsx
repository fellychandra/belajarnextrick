"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { DataCharacterDetails } from "@/data/characters";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DetailCharacter({ id }: any) {
  const { data } = DataCharacterDetails(id);

  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState<any[]>([]);
  const [locationNames, setLocationNames] = useState<string[]>([]);

  useEffect(() => {
    const storedLocations = localStorage.getItem("locations");
    const storedLocationNames = localStorage.getItem("locationsName");

    if (storedLocations && storedLocationNames) {
      setLocations(JSON.parse(storedLocations));
      setLocationNames(JSON.parse(storedLocationNames));
    }
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleModalSave = () => {
    const lokasi = {
      id: Number(data?.data.id),
      name: data?.data.name,
      status: data?.data.status,
      species: data?.data.species,
      type: data?.data.type,
      gender: data?.data.gender,
      image: data?.data.image,
      location: location,
    };

    const existingLocation = locations.find(
      (loc) => loc.id === lokasi.id && loc.location === location
    );

    if (existingLocation) {
      alert("This character already exists in this location");

      return;
    }

    localStorage.setItem("locations", JSON.stringify([...locations, lokasi]));

    const nameExists = locationNames.includes(location);

    if (!nameExists) {
      localStorage.setItem(
        "locationsName",
        JSON.stringify([...locationNames, location])
      );
      setLocationNames([...locationNames, location]);
    }
    handleClose();
  };

  return (
    <>
      <div className="bg-white text-black border-2 rounded-md p-2">
        {data?.data.image && (
          <Image
            src={data?.data.image}
            width={350}
            height={300}
            alt={data?.data.name}
            className="object-cover w-full h-96"
            priority
          />
        )}
        <div className="grid-rows-2 p-2">
          <strong>Name : </strong>
          {data?.data.name}
          <br />
          <strong>Status:</strong> {data?.data.status}
          <br />
          <strong>Species:</strong> {data?.data.species}
          <br />
          <strong>Status:</strong> {data?.data.status}
          <br />
          <strong>Type:</strong> {data?.data.type}
          <br />
          <strong>Gender:</strong> {data?.data.gender}
          <br />
          <Button onClick={handleOpen} variant="outlined">
            Open modal
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 400 }}>
              <div className="grid">
                <TextField
                  id="outlined-basic"
                  label="Add Location"
                  variant="outlined"
                  value={location}
                  onChange={handleLocationChange}
                />
                <Button
                  variant="outlined"
                  className="mt-4"
                  onClick={handleModalSave}
                >
                  Tambahkan
                </Button>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
}
