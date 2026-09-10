import mancuernasImg from '../assets/Mancuernero-Luces-desktop.webp'

export default function Separador() {
    return (
        <section className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
            <img 
                src={mancuernasImg} 
                alt="Separador Mancuernas"
                loading="lazy"
                width="1200"
                height="400"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
        </section>
    )
}