export const datos = {
  name: "217 FUNCIONAL GYM",
  frase: "El cambio no se desea, se entrena.",
  phone: {
    call: "+34 686 109 042",
    whatsapp: "34686109042",
  },
  geo: {
    latitude: 40.15035875967748,
    longitude: -3.875910410001515,
  },
  address: {
    street: "Calle Proyecto 5, 69",
    locality: "Ugena",
    region: "Toledo",
    postalCode: "45217",
    country: "ES",
  },
  horario: {
    semana: {
      dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      abre: "08:00",
      cierra: "23:00",
    },
    finde: { dias: ["Saturday", "Sunday"], abre: "09:00", cierra: "14:00" },
  },
  legal: {
    titular: "[PENDIENTE: nombre y apellidos o razón social]",
    nif: "[PENDIENTE: NIF o CIF]",
    domicilio: "[PENDIENTE: domicilio fiscal completo]",
    registroMercantil:
      "[PENDIENTE: datos del Registro Mercantil, solo si es sociedad]",
    ultimaActualizacion: "[PENDIENTE: fecha de publicación]",
  },
  siteUrl: "https://217-gym.netlify.app",
  email: "217funcionalgym@gmail.com",
  instagram: "217funcionalgym",
} as const;
