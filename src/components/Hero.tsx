import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import heroImg from '../assets/gym.jpg'

export default function Hero() {
    const seccionRef = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: seccionRef,
        offset: ['start start', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

    return (
        <section ref={seccionRef} className="relative h-dvh overflow-hidden">

            <motion.div className="absolute inset-0" style={{ y }}>
                <motion.img
                    src={heroImg}
                    alt="217 GYM"
                    className="w-full h-full object-cover"
                    animate={{
                        scale: [1, 1.25],
                        x: ['0%', '-6%'],
                        y: ['0%', '4%']
                    }}
                    transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                />
            </motion.div>

            {/* Vineta radial */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 100%)'
                }}
            />
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 z-10">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="text-white font-marker text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest uppercase"
                >
                    Entrena de verdad. Empieza hoy.
                </motion.p>

                <div className="flex gap-4 justify-center mt-6">

                </div>
            </div>

            {/* Indicador de scroll */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown size={32} className="text-white/70" />
            </motion.div>

        </section>
    )
}