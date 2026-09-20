import { Link } from "react-router-dom";

export default function NoEncontrada() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-neutral-950 px-6 pt-24">
      <title>Página no encontrada | 217 Funcional GYM</title>
      <meta name="robots" content="noindex" />

      <div className="max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 text-center backdrop-blur-md">
        <p className="font-staatliches text-7xl text-brand-gold">404</p>
        <h1 className="mt-2 font-staatliches text-3xl tracking-wide text-white">
          Página no encontrada
        </h1>
        <p className="mt-3 text-zinc-400">
          La dirección que buscas no existe o ha cambiado de sitio.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block cursor-pointer rounded-full bg-brand-gold px-6 py-3 font-semibold text-black"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}