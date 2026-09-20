import { Link } from "react-router-dom";
import PaginaLegal from "../components/PaginaLegal";
import { datos } from "../config/datos";

export default function Cookies() {
  return (
    <PaginaLegal
      titulo="Política de cookies"
      descripcion="Información sobre las cookies y los servicios de terceros que utiliza el sitio web de 217 Funcional GYM."
    >
      <h2>1. Qué son las cookies</h2>
      <p>
        Son pequeños archivos que un sitio web guarda en tu navegador para
        recordar información sobre tu visita, como tus preferencias.
      </p>

      <h2>2. Quién es el responsable</h2>
      <p>
        El responsable de este sitio web es {datos.legal.titular}. Puedes
        consultar sus datos completos en el{" "}
        <Link to="/aviso-legal">aviso legal</Link> o escribirnos a{" "}
        <a href={`mailto:${datos.email}`}>{datos.email}</a>.
      </p>

      <h2>3. Qué cookies usa esta web</h2>
      <p>
        Esta web no utiliza cookies propias ni cookies de analítica, publicidad
        o seguimiento.
      </p>

      <h2>4. Mapa de Google Maps</h2>
      <p>
        En la página de Ubicación puedes cargar un mapa de Google Maps, un
        servicio de terceros. El mapa no se carga hasta que pulsas el botón
        «Cargar mapa»: hasta ese momento no se descarga nada de Google.
      </p>
      <p>
        Al pulsarlo, Google puede instalar cookies y otras tecnologías similares
        (como el almacenamiento local) en tu navegador (por ejemplo, para
        recordar preferencias, garantizar la seguridad o medir el uso del
        servicio, según su propia política) y tratar datos como tu dirección IP.
        Si prefieres no cargarlo, no pulses el botón: la dirección del gimnasio
        figura escrita en la propia página. Más información en la{" "}
        <a
          href="https://policies.google.com/technologies/cookies?hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          política de cookies de Google
        </a>{" "}
        y en su{" "}
        <a
          href="https://policies.google.com/privacy?hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          política de privacidad
        </a>
        .
      </p>

      <h2>5. Enlaces externos</h2>
      <p>
        Los enlaces a WhatsApp, Instagram y Google Maps («Cómo llegar») te
        llevan a esos servicios, que tienen sus propias políticas de cookies y
        de privacidad.
      </p>

      <h2>6. Cómo gestionar las cookies</h2>
      <p>
        Puedes permitir, bloquear o eliminar las cookies desde los ajustes de tu
        navegador. Si ya has cargado el mapa, en esos mismos ajustes puedes
        borrar las cookies y los datos del sitio que Google haya instalado.
        Guías de los principales navegadores:
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2>7. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política si cambia el sitio web o la normativa.
        La fecha de la última actualización figura al final de la página.
      </p>

      <p>Última actualización: {datos.legal.ultimaActualizacion}</p>
    </PaginaLegal>
  );
}
