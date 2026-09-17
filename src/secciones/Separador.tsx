import mancuernasImgDesktop from "../assets/Mancuernero-Luces-desktop.webp";
import mancuernasImgMobile from "../assets/Mancuernero-Luces-mobile.webp";

export default function Separador() {
  return (
    <section className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
      <picture>
        <source media="(min-width: 768px)" srcSet={mancuernasImgDesktop} />
        <img
          src={mancuernasImgMobile}
          alt="Separador Mancuernas"
          loading="lazy"
          width="800"
          height="800"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </picture>
    </section>
  );
}
