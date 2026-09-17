import { useEffect } from "react";
import { datos } from "../config/datos";

export function SeoLocalBusiness() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ExerciseGym",
      name: datos.name,
      telephone: datos.phone.call,
      email: datos.email,
      url: datos.siteUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: datos.address.street,
        addressLocality: datos.address.locality,
        addressRegion: datos.address.region,
        postalCode: datos.address.postalCode,
        addressCountry: datos.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: datos.geo.latitude,
        longitude: datos.geo.longitude,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: datos.horario.semana.dias,
          opens: datos.horario.semana.abre,
          closes: datos.horario.semana.cierra,
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: datos.horario.finde.dias,
          opens: datos.horario.finde.abre,
          closes: datos.horario.finde.cierra,
        },
      ],
      sameAs: [`https://www.instagram.com/${datos.instagram}`],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    script.id = "local-business-schema";
    document.head.appendChild(script);

    return () => {
      document.getElementById("local-business-schema")?.remove();
    };
  }, []);

  return null;
}