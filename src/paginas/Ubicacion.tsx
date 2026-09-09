import { useState } from 'react'
import { MapPin, Car } from 'lucide-react'
import { motion } from 'framer-motion'

import bannerImg from '../assets/Horario-desktop.webp'
import fotoGimnasio from '../assets/Gym Interior-mobile.webp'

export default function Ubicacion() {
    const [mapaCargado, setMapaCargado] = useState(false)

    return (
        <>
            <section className="relative h-[60vh] bg-cover bg-center overflow-hidden">
                <img 
                    src={bannerImg} 
                    alt="Ubicación" 
                    fetchPriority="high"
                    loading="eager"
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" 
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black" />
                <div className="absolute inset-0 flex items-center justify-center -translate-y-6">
                    <p className="text-white font-marker text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider uppercase text-center">
                        Ubicación
                    </p>
                </div>
            </section>

            <section className="relative bg-black text-white pb-20 px-6 -mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-xl overflow-hidden max-w-5xl mx-auto text-center py-10 px-4"
                >
                    <h2 className="text-4xl md:text-5xl font-staatliches text-white uppercase mb-6">
                        Encuéntranos fácilmente
                    </h2>

                    <p className="text-lg md:text-2xl text-gray-300 mb-10">
                        Sin pérdida. Llegas, entrenas y te vas.
                    </p>

                    <div className="w-full h-87.5 md:h-112.5 rounded-xl overflow-hidden shadow-lg mb-10 relative">
                        <img
                            src={fotoGimnasio}
                            alt="Instalaciones 217 GYM"
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-100 ${mapaCargado ? 'opacity-0' : 'opacity-200'}`}
                        />
                        <iframe
                            src="https://maps.google.com/maps?q=Calle+Proyecto+5,+69,+Poligono+Industrial+La+Frontera,+Ugena,+Toledo&output=embed"
                            onLoad={() => setTimeout(() => setMapaCargado(true), 900)}
                            className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-300 ${mapaCargado ? 'opacity-100' : 'opacity-0'}`}
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>

                    <div className="flex flex-col items-center gap-2 text-gray-300 mb-8">
                        <p className="flex items-center gap-2">
                            <MapPin size={18} className="text-brand-gold" />
                            Pol. Ind. la Frontera. Ugena (Toledo)
                        </p>
                        <p className="flex items-center gap-2">
                            <MapPin size={18} className="text-brand-gold" />
                            Calle Proyecto 5, 69
                        </p>
                        <p className="flex items-center gap-2">
                            <Car size={18} className="text-brand-gold" />
                            Zona de fácil estacionamiento
                        </p>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/6zo7msKypib3pWPBA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 border-brand-gold text-brand-gold bg-brand-gold/10 px-10 py-4 no-underline font-semibold uppercase tracking-widest hover:bg-brand-gold hover:text-black hover:scale-95 active:scale-95 active:bg-brand-gold active:text-black transition-all duration-200"
                    >
                        Como llegar
                    </a>

                </motion.div>
            </section>
        </>
    )
}