import TextCard from "./TextCard";

export default function Sidebar() {
  return (
    <section className="flex py-4 pl-4 flex-col items-start justify-start h-screen w-96">
      <h1 className="font-redaction relative text-4xl mb-8">reKindle</h1>
      <TextCard
        tag="Info"
        title="About us"
        text="We build and grow thoughtful brands, digital products, and tools, both for ourselves and for people we believe in."
        href="/about"
      />
    </section>
  );
}
