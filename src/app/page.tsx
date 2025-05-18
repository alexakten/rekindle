import Rekindle from "./components/Rekindle";
import Navbar from "./components/Navbar";
import { Motion } from "./components/Motion";

export default function Home() {
  return (
    <main className="flex absolute bg-[#fafafa] select-none h-[100svh] w-screen items-center justify-center overflow-hidden">
      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
        className=""
      >
        <Navbar />
      </Motion>

      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <Rekindle />
      </Motion>
    </main>
  );
}
