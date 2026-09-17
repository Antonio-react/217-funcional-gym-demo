import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { datos } from "../config/datos";

export default function Footer() {
  return (
    <footer className="bg-almostblack border-t border-gray-800 text-gray-400 pt-8 pb-8 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-3">
          <img
            src="/217-gym.webp"
            alt="217 GYM"
            width="400"
            height="234"
            className="h-14 w-auto object-contain"
          />
          <p className="text-sm uppercase mb-2 text-gray-300">{datos.frase}</p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-12 md:contents w-full max-w-md sm:max-w-none sm:px-8 mx-auto items-start">
          <div className="flex flex-col items-center md:items-start w-full gap-2">
            <p className="text-white font-semibold uppercase text-sm tracking-wide mb-2">
              Navegación
            </p>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm no-underline text-gray-400 hover:text-brand-gold transition-colors py-1"
            >
              Inicio
            </Link>
            <Link
              to="/horarios"
              className="text-sm no-underline text-gray-400 hover:text-brand-gold transition-colors py-1"
            >
              Horarios
            </Link>
            <Link
              to="/servicios"
              className="text-sm no-underline text-gray-400 hover:text-brand-gold transition-colors py-1"
            >
              Servicios
            </Link>
            <Link
              to="/tarifas"
              className="text-sm no-underline text-gray-400 hover:text-brand-gold transition-colors py-1"
            >
              Tarifas
            </Link>
            <Link
              to="/sobre-nosotros"
              className="text-sm no-underline text-gray-400 hover:text-brand-gold transition-colors py-1"
            >
              Sobre nosotros
            </Link>
            <Link
              to="/ubicacion"
              className="text-sm no-underline text-gray-400 hover:text-brand-gold transition-colors py-1"
            >
              Ubicación
            </Link>
            <Link
              to="/contacto"
              className="text-sm no-underline text-gray-400 hover:text-brand-gold transition-colors py-1"
            >
              Contacto
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start w-full gap-2">
            <p className="text-white font-semibold uppercase text-sm tracking-wide mb-2">
              Contacto
            </p>
            <a
              href={`tel:${datos.phone.call}`}
              className="flex items-center gap-2 text-sm no-underline text-gray-400 hover:text-brand-gold transition-colors py-1"
            >
              <Phone size={16} className="text-brand-gold" />
              {datos.phone.call}
            </a>
            <a
              href={`https://wa.me/${datos.phone.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm no-underline text-gray-400 hover:text-brand-gold transition-colors py-1"
            >
              <svg
                className="text-brand-gold"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.797 0-3.463-.526-4.868-1.43l-.35-.209-3.238.964.964-3.238-.209-.35A7.955 7.955 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={`https://instagram.com/${datos.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm no-underline text-gray-400 hover:text-brand-gold transition-colors py-1"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-brand-gold"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              {datos.instagram}
            </a>
            <a
              href={`mailto:${datos.email}`}
              className="flex items-center gap-2 text-sm no-underline text-gray-400 hover:text-brand-gold transition-colors py-1"
            >
              <Mail size={16} className="text-brand-gold" />
              {datos.email}
            </a>
            <Link
              to="/ubicacion"
              className="flex items-center gap-2 text-sm no-underline text-gray-400 hover:text-brand-gold transition-colors py-1"
            >
              <MapPin size={16} className="text-brand-gold" />
              Ugena (Toledo)
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto border-t border-gray-800 mt-10 pt-4 text-center">
        <p className="text-xs -mb-2 text-gray-300">
          © {new Date().getFullYear()} | 217 FUNCIONAL GYM. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
