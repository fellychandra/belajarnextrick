import DetailCharacter from "@/components/character";
import { DataCharacterDetails } from "@/data/characters";

type Props = {
  params: { id: string };
};

const DetailCharacterPage = async ({ params }: Props) => {
  const data = await DataCharacterDetails(params.id);

  return (
    <>
      <div className="container flex items-center justify-center h-screen">
        <div className="flex flex-col items-center content-center object-center">
          <h1 className="mt-5 text-center mb-6 text-5xl">Character Details</h1>
          <div>
            <DetailCharacter character={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCharacterPage;
