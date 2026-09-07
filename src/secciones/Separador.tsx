import mancuernasImg from '../assets/Mancuernero Luces.jpg'

export default function Separador() {
    return (
        <section
            className="h-48 md:h-64 lg:h-80 bg-cover bg-center"
            style={{ backgroundImage: `url(${mancuernasImg})` }}
        />
    )
}