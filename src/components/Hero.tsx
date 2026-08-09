import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
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

            <motion.div
                className="absolute inset-0"
                style={{ y }}
            >
                <motion.img
    src={heroImg}
    alt="217 GYM"
    className="w-full h-full object-cover"
    animate={{
        scale: [1, 1.15],
        x: ['0%', '-3%'],
        y: ['0%', '2%']
    }}
    transition={{ duration: 25, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
/>
            </motion.div>

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 z-10">
                <p className="text-white font-marker text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest uppercase">
                    Entrena de verdad. Empieza hoy.
                </p>

                <div className="flex gap-4 justify-center mt-6">

                </div>
            </div>
        </section>
    )
}