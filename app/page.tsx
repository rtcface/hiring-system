import Link from "next/link";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Home Page</span>

      <Link href={"/inbox"}>Inbox</Link>
    </main>
  );
};
export default HomePage;
