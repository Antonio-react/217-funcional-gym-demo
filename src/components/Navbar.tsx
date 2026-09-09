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
            <nav className={`fixed top-0 left-0 w-full md:left-1/2 md:top-6 md:w-max md:-translate-x-1/2 md:rounded-full md:border md:shadow-xl z-50 flex items-center gap-6 md:gap-7 px-5 md:px-6 py-2 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full md:-translate-y-[calc(100%+1.5rem)]'} ${menuAbierto ? 'bg-black' : ultimoScroll > 80 ? 'bg-black/40 backdrop-blur-md' : 'bg-transparent'} md:bg-transparent! md:backdrop-blur-lg md:backdrop-saturate-150 md:border-white/8`}>

                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="border-none bg-transparent p-0 cursor-pointer relative z-50 shrink-0">
                    <picture className="flex items-center">
                    {/* Versión Escritorio (≥ 768px): Carga solo en PC */}
                    <source media="(min-width: 768px)" srcSet="/217.webp" />

                    {/* Versión Móvil (Por defecto): Carga solo en Móvil */}
                    <img 
                    src="/217-gym.webp" 
                    alt="217 GYM" 
                    width="400"
                    height="234"
                    className="h-14 w-auto object-contain md:h-10 md:scale-200 hover:scale-110 md:hover:scale-225 transition-transform duration-300" 
                    />
                </picture>
                </Link>

                <ul className="hidden md:flex gap-8 list-none whitespace-nowrap">
                    <li>
                        <NavLink to="/horarios" className={({ isActive }) => `text-base no-underline transition-colors duration-200 ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'}`}>Horarios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios" className={({ isActive }) => `text-base no-underline transition-colors duration-200 ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'}`}>Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tarifas" className={({ isActive }) => `text-base no-underline transition-colors duration-200 ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'}`}>Tarifas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre-nosotros" className={({ isActive }) => `text-base no-underline transition-colors duration-200 ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'}`}>Sobre nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ubicacion" className={({ isActive }) => `text-base no-underline transition-colors duration-200 ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'}`}>Ubicación</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({ isActive }) => `text-base no-underline transition-colors duration-200 ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'}`}>Contacto</NavLink>
                    </li>
                </ul>

                <button
                    ref={botonRef}
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    className={`md:hidden ml-auto relative w-10 h-10 z-50 flex items-center justify-center 
                    transition-all duration-300 
                    ${menuAbierto
                            ? 'text-white scale-150 bg-white/5 rounded-full backdrop-blur-sm'
                            : 'text-brand-gold scale-100 bg-transparent'}`}
                >
                    {/* Línea superior */}
                    <span
                        className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ease-in-out origin-center
                    ${menuAbierto
                                ? 'rotate-45 top-1/2 -translate-y-1/2'
                                : 'top-2'}`}
                    />

                    {/* Línea central */}
                    <span
                        className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ease-in-out origin-center
                    ${menuAbierto
                                ? 'opacity-0'
                                : 'top-1/2 -translate-y-1/2'}`}
                    />

                    {/* Línea inferior */}
                    <span
                        className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ease-in-out origin-center
                    ${menuAbierto
                                ? '-rotate-45 top-1/2 -translate-y-1/2'
                                : 'bottom-2'}`}
                    />
                </button>

            </nav>

            {/* Menú fullscreen móvil */}
            <div
                ref={menuRef}
                onClick={() => setMenuAbierto(false)}
                className={`md:hidden fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuAbierto ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <ul
                    key={menuAbierto ? 'open' : 'closed'}
                    onClick={(e) => e.stopPropagation()}
                    className="flex flex-col items-center gap-10 list-none"
                >
                    <li>
                        <NavLink
                            to="/"
                            onClick={() => { setMenuAbierto(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                            className={({ isActive }) =>
                                `no-underline tracking-widest uppercase hover:scale-110 active:scale-95 opacity-0 animate-[fadeUp_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] transition-all duration-200 inline-block ${isActive ? 'text-white text-4xl font-marker' : 'text-brand-gold text-2xl'}`
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
                                `no-underline tracking-widest uppercase hover:scale-110 active:scale-95 opacity-0 animate-[fadeUp_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] [animation-delay:100ms] transition-all duration-200 inline-block ${isActive ? 'text-white text-4xl font-marker' : 'text-brand-gold text-2xl'}`
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
                                `no-underline tracking-widest uppercase hover:scale-110 active:scale-95 opacity-0 animate-[fadeUp_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] [animation-delay:200ms] transition-all duration-200 inline-block ${isActive ? 'text-white text-4xl font-marker' : 'text-brand-gold text-2xl'}`
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
                                `no-underline tracking-widest uppercase hover:scale-110 active:scale-95 opacity-0 animate-[fadeUp_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] [animation-delay:300ms] transition-all duration-200 inline-block ${isActive ? 'text-white text-4xl font-marker' : 'text-brand-gold text-2xl'}`
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
                                `no-underline tracking-widest uppercase hover:scale-110 active:scale-95 opacity-0 animate-[fadeUp_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] [animation-delay:400ms] transition-all duration-200 inline-block ${isActive ? 'text-white text-4xl font-marker' : 'text-brand-gold text-2xl'}`
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
                                `no-underline tracking-widest uppercase hover:scale-110 active:scale-95 opacity-0 animate-[fadeUp_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] [animation-delay:500ms] transition-all duration-200 inline-block ${isActive ? 'text-white text-4xl font-marker' : 'text-brand-gold text-2xl'}`
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
                                `no-underline tracking-widest uppercase hover:scale-110 active:scale-95 opacity-0 animate-[fadeUp_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] [animation-delay:600ms] transition-all duration-200 inline-block ${isActive ? 'text-white text-4xl font-marker' : 'text-brand-gold text-2xl'}`
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