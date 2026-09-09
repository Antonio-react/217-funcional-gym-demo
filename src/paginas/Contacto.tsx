import { Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { datos } from '../config/datos'

import bannerImg from '../assets/Clases Funcionales.webp'

export default function Contacto() {

    const [nombre, setNombre] = useState('')
    const [mensaje, setMensaje] = useState('')

    function enviarWhatsapp(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        const texto = `Hola, soy ${nombre}. ${mensaje}`
        const url = `https://wa.me/${datos.phone.whatsapp}?text=${encodeURIComponent(texto)}`
        window.open(url, '_blank')
    }

    return (
        <>
            <section className="relative h-[60vh] bg-cover overflow-hidden">
                <img 
                    src={bannerImg} 
                    alt="Contacto" 
                    fetchPriority="high"
                    loading="eager"
                    className="absolute inset-0 w-full h-full object-cover object-center" 
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black" />
                <div className="absolute inset-0 flex items-center justify-center -translate-y-6">
                    <p className="text-white font-marker text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider uppercase text-center">
                        Contacto
                    </p>
                </div>
            </section>

            <section className="relative bg-black text-white pb-12 px-4 -mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center bg-zinc-900/80 backdrop-blur-md p-10 md:p-14 rounded-2xl border border-zinc-800 shadow-xl"
                >
                    <h2 className="font-staatliches text-white text-3xl md:text-4xl uppercase tracking-wide mb-5">
                        ¿Hablamos?
                    </h2>
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-10">
                        Estamos aquí para ayudarte
                    </p>

                    <div className="flex flex-col gap-6 items-center">
                        <a href={`tel:${datos.phone.call}`} className="flex items-center gap-3 text-gray-300 no-underline hover:text-brand-gold active:text-brand-gold transition-colors">
                            <Phone size={24} className="text-brand-gold" />
                            <span className="text-xl">{datos.phone.call}</span>
                        </a>

                        <a href={`https://wa.me/${datos.phone.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 no-underline hover:text-brand-gold active:text-brand-gold transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-brand-gold">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.797 0-3.463-.526-4.868-1.43l-.35-.209-3.238.964.964-3.238-.209-.35A7.955 7.955 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                            </svg>
                            <span className="text-xl">Escríbenos por WhatsApp</span>
                        </a>

                        <a href={`https://instagram.com/${datos.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 no-underline hover:text-brand-gold active:text-brand-gold transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                            <span className="text-xl">{datos.instagram}</span>
                        </a>

                        <a href={`mailto:${datos.email}`} className="flex items-center gap-3 text-gray-300 no-underline hover:text-brand-gold active:text-brand-gold transition-colors">
                            <Mail size={24} className="text-brand-gold" />
                            <span className="text-xl">{datos.email}</span>
                        </a>

                    </div>
                </motion.div>
            </section>

            <section className="relative bg-black text-white pb-20 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center bg-zinc-900/80 backdrop-blur-md p-10 md:p-14 rounded-2xl border border-zinc-800 shadow-xl"
                >
                    <h2 className="font-staatliches text-white text-3xl md:text-4xl uppercase tracking-wide mb-10">
                        Consulta
                    </h2>

                    <form onSubmit={enviarWhatsapp} className="flex flex-col gap-5 text-left">
                        <div>
                            <label className="block text-sm text-gray-400 uppercase tracking-wide mb-2">Nombre:</label>
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                                className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 uppercase tracking-wide mb-2">Consulta:</label>
                            <textarea
                                placeholder="Escribe tu consulta..."
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                                required
                                rows={4}
                                className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 mb-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="cursor-pointer border-2 border-brand-gold text-brand-gold bg-brand-gold/10 px-6 py-3 font-semibold uppercase tracking-widest hover:bg-brand-gold hover:text-black active:bg-brand-gold active:text-black active:scale-95 transition-all duration-200"
                        >
                            Enviar por WhatsApp
                        </button>
                    </form>
                </motion.div>
            </section>
        </>
    )
}