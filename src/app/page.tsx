import ReKindle from "./components/reKindle";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="flex absolute bg-[#fafafa] select-none h-[100svh] w-screen items-center justify-center overflow-hidden">
      <Navbar />
      <ReKindle />
    </main>
  );
}
