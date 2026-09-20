import PaginaLegal from "../components/PaginaLegal";
import { datos } from "../config/datos";

export default function Privacidad() {
  return (
    <PaginaLegal
      titulo="Política de privacidad"
      descripcion="Cómo trata 217 Funcional GYM los datos personales de las personas que contactan con el gimnasio."
    >
      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li>
          <strong>Titular:</strong> {datos.legal.titular}
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
      </ul>

      <h2>2. Qué datos tratamos y cuándo</h2>
      <p>
        Esta web no tiene cuentas de usuario ni formularios que guarden datos.
        El formulario de la página de contacto solo prepara un mensaje en tu
        navegador y abre WhatsApp; el mensaje únicamente se envía si tú lo
        envías desde WhatsApp.
      </p>
      <p>
        Tratamos datos personales cuando nos escribes o nos llamas por teléfono,
        WhatsApp, correo electrónico o Instagram: normalmente tu nombre, tu
        número de teléfono o cuenta y el contenido de tu mensaje.
      </p>

      <h2>3. Finalidad</h2>
      <p>
        Atender y responder tus consultas sobre el gimnasio. No utilizamos estos
        datos para otros fines.
      </p>

      <h2>4. Base jurídica</h2>
      <p>
        Tu consentimiento, que nos das al contactar con nosotros de forma
        voluntaria (artículo 6.1.a del Reglamento General de Protección de
        Datos). Puedes retirarlo en cualquier momento.
      </p>

      <h2>5. Conservación</h2>
      <p>
        Conservamos los datos durante el tiempo necesario para atender tu
        consulta y, después, durante los plazos exigidos por las obligaciones
        legales aplicables. Puedes pedirnos que los eliminemos antes.
      </p>

      <h2>6. Destinatarios</h2>
      <p>
        No cedemos tus datos a terceros, salvo obligación legal. Para
        comunicarnos contigo usamos servicios de mensajería y correo de terceros
        (como WhatsApp, Instagram y el proveedor de correo del gimnasio), y esta
        web está alojada en Netlify, que puede tratar datos técnicos de
        conexión, como la dirección IP. Alguno de estos proveedores puede estar
        ubicado fuera del Espacio Económico Europeo; en ese caso, las
        transferencias se rigen por las garantías que establece la normativa.
      </p>

      <h2>7. Tus derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión,
        oposición, limitación del tratamiento y portabilidad escribiendo a{" "}
        <a href={`mailto:${datos.email}`}>{datos.email}</a> e indicando el
        derecho que quieres ejercer. Si consideras que no hemos tratado tus
        datos correctamente, puedes presentar una reclamación ante la Agencia
        Española de Protección de Datos (
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          aepd.es
        </a>
        ).
      </p>

      <p>Última actualización: {datos.legal.ultimaActualizacion}</p>
    </PaginaLegal>
  );
}
