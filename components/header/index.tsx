import Link from "next/link";

function Header() {
  return (
    <div className="bg-gradient-to-br from-rose-500 to-pink-600">
      <div className="flex md:flex-row flex-col justify-between p-6 px-16 text-white">
        <div>Rick and Morty</div>
        <div className="flex md:gap-9 gap-2 items-center justify-center">
          <Link href={'/characters'}>Characters</Link>
          <Link href={'/locations'}>Locations</Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
