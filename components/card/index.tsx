import Image from "next/image";

export default function CardCharacter({ character }: any) {
  return (
    <>
      <div className="bg-white text-black border-2 rounded-md h-300 w-300 ">
        <Image
          src={character.image}
          width={350}
          height={300}
          className="object-cover"
          alt={character.nama}
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
        </div>
      </div>
    </>
  );
}
