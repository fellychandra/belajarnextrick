"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

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

export default function DetailCharacter({ character }: any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [location, setLocation] = useState("");

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleModalSave = () => {
    const lokasi = {
      id: Number(character.id),
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      image: character.image,
      location: location,
    };

    localStorage.setItem("location", JSON.stringify({ data: [lokasi] }));
  };

  return (
    <>
      <div className="bg-white text-black border-2 rounded-md h-auto w-auto">
        <Image
          src={character.image}
          alt={character.name}
          width={350}
          height={300}
          className="object-cover w-full h-96"
        />
        <div className="grid-rows-2 p-2">
          <strong>Name : </strong>
          {character.name}
          <br />
          <strong>Status:</strong> {character.status}
          <br />
          <strong>Species:</strong> {character.species}
          <br />
          <strong>Status:</strong> {character.status}
          <br />
          <strong>Type:</strong> {character.type}
          <br />
          <strong>Gender:</strong> {character.gender}
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
