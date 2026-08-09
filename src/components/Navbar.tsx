import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const [menuAbierto, setMenuAbierto] = useState(false)
    const [visible, setVisible] = useState(true)
    const [ultimoScroll, setUltimoScroll] = useState(0)
    const menuRef = useRef<HTMLDivElement>(null)
    const botonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        function alHacerScroll() {
            const scrollActual = window.scrollY
            if (scrollActual > ultimoScroll && scrollActual > 80) {
                setVisible(false)
            } else {
                setVisible(true)
            }
            setUltimoScroll(scrollActual)
        }
        window.addEventListener('scroll', alHacerScroll)
        return () => window.removeEventListener('scroll', alHacerScroll)
    }, [ultimoScroll])

    useEffect(() => {
        function alHacerClicFuera(e: MouseEvent) {
            if (
                menuRef.current && !menuRef.current.contains(e.target as Node) &&
                botonRef.current && !botonRef.current.contains(e.target as Node)
            ) {
                setMenuAbierto(false)
            }
        }
        if (menuAbierto) {
            document.addEventListener('mousedown', alHacerClicFuera)
        }
        return () => document.removeEventListener('mousedown', alHacerClicFuera)
    }, [menuAbierto])

    useEffect(() => {
        function alHacerScroll() {
            setMenuAbierto(false)
        }
        if (menuAbierto) {
            window.addEventListener('scroll', alHacerScroll)
        }
        return () => window.removeEventListener('scroll', alHacerScroll)
    }, [menuAbierto])

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 flex items-center gap-6 px-4 md:px-6 py-3 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} ${menuAbierto ? 'bg-black' : ultimoScroll > 80 ? 'bg-black/40 backdrop-blur-md' : 'bg-transparent'}`}>

                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="border-none bg-transparent p-0 cursor-pointer relative z-50">
                    <img src="/217-gym.PNG" alt="217 GYM" className="h-14 w-auto block hover:scale-110" />
                </Link>

                <ul className="hidden md:flex gap-10 list-none">
                    <li>
                        <NavLink to="/horarios" className={({ isActive }) => `relative inline-block text-base no-underline pb-1 transition-colors duration-200 ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'} after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-brand-gold after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>Horarios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios" className={({ isActive }) => `relative inline-block text-base no-underline pb-1 transition-colors duration-200 ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'} after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-brand-gold after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tarifas" className={({ isActive }) => `relative inline-block text-base no-underline pb-1 transition-colors duration-200 ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'} after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-brand-gold after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>Tarifas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre-nosotros" className={({ isActive }) => `relative inline-block text-base no-underline pb-1 transition-colors duration-200 ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'} after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-brand-gold after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>Sobre nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ubicacion" className={({ isActive }) => `relative inline-block text-base no-underline pb-1 transition-colors duration-200 ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'} after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-brand-gold after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>Ubicación</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({ isActive }) => `relative inline-block text-base no-underline pb-1 transition-colors duration-200 ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'} after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-brand-gold after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>Contacto</NavLink>
                    </li>
                </ul>

                <button
                    ref={botonRef}
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    className={`md:hidden ml-auto border-none bg-transparent cursor-pointer transition-colors duration-200 relative z-50 ${menuAbierto ? 'text-white text-5xl' : 'text-brand-gold text-5xl'}`}
                >
                    {menuAbierto ? "✕" : "☰"}
                </button>

            </nav>

            {/* Menú fullscreen móvil */}
            <div
                ref={menuRef}
                onClick={() => setMenuAbierto(false)}
                className={`md:hidden fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${menuAbierto ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <ul
                    onClick={(e) => e.stopPropagation()}
                    className="flex flex-col items-center gap-8 list-none"
                >
                    <li>
                        <NavLink
                            to="/"
                            onClick={() => { setMenuAbierto(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                            className={({ isActive }) =>
                                `no-underline tracking-widest uppercase hover:scale-110 active:scale-95 transition-all duration-200 inline-block ${isActive ? 'text-white text-3xl font-marker' : 'text-brand-gold text-2xl'}`
                            }
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/horarios"
                            onClick={() => setMenuAbierto(false)}
                            className={({ isActive }) =>
                                `no-underline tracking-widest uppercase hover:scale-110 active:scale-95 transition-all duration-200 inline-block ${isActive ? 'text-white text-3xl font-marker' : 'text-brand-gold text-2xl'}`
                            }
                        >
                            Horarios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/servicios"
                            onClick={() => setMenuAbierto(false)}
                            className={({ isActive }) =>
                                `no-underline tracking-widest uppercase hover:scale-110 active:scale-95 transition-all duration-200 inline-block ${isActive ? 'text-white text-3xl font-marker' : 'text-brand-gold text-2xl'}`
                            }
                        >
                            Servicios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tarifas"
                            onClick={() => setMenuAbierto(false)}
                            className={({ isActive }) =>
                                `no-underline tracking-widest uppercase hover:scale-110 active:scale-95 transition-all duration-200 inline-block ${isActive ? 'text-white text-3xl font-marker' : 'text-brand-gold text-2xl'}`
                            }
                        >
                            Tarifas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/sobre-nosotros"
                            onClick={() => setMenuAbierto(false)}
                            className={({ isActive }) =>
                                `no-underline tracking-widest uppercase hover:scale-110 active:scale-95 transition-all duration-200 inline-block ${isActive ? 'text-white text-3xl font-marker' : 'text-brand-gold text-2xl'}`
                            }
                        >
                            Sobre nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/ubicacion"
                            onClick={() => setMenuAbierto(false)}
                            className={({ isActive }) =>
                                `no-underline tracking-widest uppercase hover:scale-110 active:scale-95 transition-all duration-200 inline-block ${isActive ? 'text-white text-3xl font-marker' : 'text-brand-gold text-2xl'}`
                            }
                        >
                            Ubicación
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contacto"
                            onClick={() => setMenuAbierto(false)}
                            className={({ isActive }) =>
                                `no-underline tracking-widest uppercase hover:scale-110 active:scale-95 transition-all duration-200 inline-block ${isActive ? 'text-white text-3xl font-marker' : 'text-brand-gold text-2xl'}`
                            }
                        >
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}