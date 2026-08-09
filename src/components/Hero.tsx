import heroImg from '../assets/217-funcionalgym.jpeg'

export default function Hero() {
    return (
        <section
            className="relative h-dvh bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
                <p className="text-white font-marker text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest uppercase">
                    Entrena de verdad. Empieza hoy.
                </p>

                <div className="flex gap-4 justify-center mt-6">

                </div>
            </div>
        </section>
    )
}