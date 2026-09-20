import PaginaLegal from "../components/PaginaLegal";
import { datos } from "../config/datos";

export default function AvisoLegal() {
  return (
    <PaginaLegal
      titulo="Aviso legal"
      descripcion="Aviso legal e información del titular del sitio web de 217 Funcional GYM."
    >
      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la
        Sociedad de la Información y de Comercio Electrónico, se informa de los
        datos del titular de este sitio web:
      </p>
      <ul>
        <li>
          <strong>Titular:</strong> {datos.legal.titular}
        </li>
        <li>
          <strong>Nombre comercial:</strong> {datos.name}
        </li>
        <li>
          <strong>NIF/CIF:</strong> {datos.legal.nif}
        </li>
        <li>
          <strong>Domicilio:</strong> {datos.legal.domicilio}
        </li>
        <li>
          <strong>Correo electrónico:</strong> {datos.email}
        </li>
        <li>
          <strong>Teléfono:</strong> {datos.phone.call}
        </li>
        <li>
          <strong>Datos registrales:</strong> {datos.legal.registroMercantil}
        </li>
        <li>
          <strong>Sitio web:</strong> {datos.siteUrl}
        </li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        Este sitio web tiene carácter exclusivamente informativo: da a conocer
        el gimnasio, sus servicios, horarios, tarifas y formas de contacto. No
        permite reservas, altas ni compras en línea.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso y la navegación por este sitio web atribuyen la condición de
        usuario e implican la aceptación de este aviso legal. El usuario se
        compromete a hacer un uso lícito y respetuoso del sitio, sin dañar su
        funcionamiento ni los derechos de terceros.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Los textos, imágenes, logotipos, diseño y demás contenidos de este sitio
        web pertenecen a su titular o se utilizan con la debida autorización.
        Queda prohibida su reproducción, distribución o modificación sin permiso
        expreso, salvo lo permitido por la ley.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        El titular procura que la información publicada sea correcta y esté
        actualizada, pero los horarios, tarifas y servicios pueden cambiar. Ante
        cualquier duda, te recomendamos confirmarlo por teléfono o WhatsApp. El
        titular no se hace responsable de los daños derivados de interrupciones
        o errores técnicos del sitio ni del contenido de sitios de terceros.
      </p>

      <h2>6. Enlaces a terceros</h2>
      <p>
        Este sitio contiene enlaces a servicios externos (WhatsApp, Instagram y
        Google Maps). Al utilizarlos abandonas esta web y pasas a regirte por
        las condiciones y políticas de privacidad de cada servicio.
      </p>

      <h2>7. Legislación aplicable</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para cualquier
        controversia serán competentes los juzgados y tribunales que
        correspondan según la normativa vigente.
      </p>

      <p>Última actualización: {datos.legal.ultimaActualizacion}</p>
    </PaginaLegal>
  );
}
