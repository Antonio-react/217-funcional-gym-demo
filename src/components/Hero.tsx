import { motion } from 'framer-motion'
import heroImg from '../assets/gym.jpg'
import type { Variants } from 'framer-motion'

const contenedorVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.3 }
    }
}

const palabraVariants: Variants = {
    hidden: { opacity: 0, y: 40, rotate: -4 },
    visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: { duration: 0.5, ease: "backOut" }
    }
}

export default function Hero() {
    const texto = "Entrena de verdad. Empieza hoy."

    return (
        <section className="relative h-dvh overflow-hidden">

            <motion.img
                src={heroImg}
                alt="217 GYM"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: [1.5, 1, 1.08], opacity: 1 }}
                transition={{
                    opacity: { duration: 1.2, ease: "easeOut" },
                    scale: {
                        duration: 25,
                        times: [0, 0.15, 1],
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                }}
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 z-10">
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={contenedorVariants}
                    className="text-white font-marker text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest uppercase leading-tight"
                >
                    {texto.split(" ").map((palabra, i) => (
                        <motion.span key={i} variants={palabraVariants} className="inline-block mr-2 sm:mr-3">
                            {palabra}
                        </motion.span>
                    ))}
                </motion.p>
            </div>

        </section>
    )
}