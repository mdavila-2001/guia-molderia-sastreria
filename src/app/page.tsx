import styles from "./page.module.css";
import Link from "next/link";

export const runtime = "edge";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Guía de Moldería y Sastrería</h1>
        <p className={styles.description}>
          Aprende los fundamentos y técnicas avanzadas de la moldería y sastrería
        </p>
      </div>

      <div className={styles.grid}>
        <Link href="/fundamentos" className={styles.card}>
          <h2>Fundamentos</h2>
          <p>Conceptos básicos, herramientas necesarias y prerrequisitos para poder comenzar</p>
        </Link>

        <Link href="/patrones" className={styles.card}>
          <h2>Patrones</h2>
          <p>Técnicas de creación y modificación de patrones base y sus variantes</p>
        </Link>

        <Link href="/tecnicas" className={styles.card}>
          <h2>Técnicas</h2>
          <p>Métodos avanzados de costura y acabados profesionales</p>
        </Link>

        <Link href="/recursos" className={styles.card}>
          <h2>Recursos</h2>
          <p>Material complementario y referencias útiles</p>
        </Link>
      </div>
    </div>
  );
}
