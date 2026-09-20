import type { ReactNode } from "react";

interface Props {
  titulo: string;
  descripcion: string;
  children: ReactNode;
}

export default function PaginaLegal({ titulo, descripcion, children }: Props) {
  return (
    <>
      <title>{`${titulo} | 217 Funcional GYM`}</title>
      <meta name="description" content={descripcion} />

      <section className="bg-black text-white pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-xl p-8 md:p-12">
          <h1 className="font-staatliches text-4xl md:text-5xl uppercase tracking-wide mb-8">
            {titulo}
          </h1>
          <div className="text-gray-300 leading-relaxed [&_h2]:font-staatliches [&_h2]:text-2xl [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-1 [&_strong]:text-white [&_a]:text-brand-gold [&_a]:underline">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
