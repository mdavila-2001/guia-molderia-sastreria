"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Cerrar el menú cuando se hace clic fuera de él
  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    if (isOpen) {
      document.addEventListener('click', closeMenu);
    }
    return () => document.removeEventListener('click', closeMenu);
  }, [isOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evitar que el clic se propague
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          Guía Moldería
        </Link>
        <button 
          className={styles.menuToggle} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>
        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          <li>
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className={pathname === "/" ? styles.active : ""}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              href="/molde-base" 
              onClick={() => setIsOpen(false)}
              className={pathname === "/molde-base" ? styles.active : ""}
            >
              Molde Base
            </Link>
          </li>
          <li>
            <Link 
              href="/pinzas" 
              onClick={() => setIsOpen(false)}
              className={pathname === "/pinzas" ? styles.active : ""}
            >
              Pinzas
            </Link>
          </li>
          <li>
            <Link 
              href="/transformaciones" 
              onClick={() => setIsOpen(false)}
              className={pathname === "/transformaciones" ? styles.active : ""}
            >
              Transformaciones
            </Link>
          </li>
          <li>
            <Link 
              href="/contacto" 
              onClick={() => setIsOpen(false)}
              className={pathname === "/contacto" ? styles.active : ""}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
