import styles from './tecnicas.module.css';

export const runtime = "edge";

export default function TecnicasPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Técnicas de Sastrería</h1>
      <p className={styles.description}>
        Aprende métodos avanzados de costura y acabados profesionales para elevar la calidad de tus prendas
      </p>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Costuras y Uniones</h2>
          <ul>
            <li>Costura francesa para telas finas</li>
            <li>Costura inglesa para acabados limpios</li>
            <li>Costura plana para tejidos gruesos</li>
            <li>Uniones invisibles a mano</li>
            <li>Costuras curvas y esquinas</li>
            <li>Unión de telas con diferentes pesos</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Acabados Profesionales</h2>
          <ul>
            <li>Dobladillos invisibles a mano</li>
            <li>Dobladillos con puntada ciega</li>
            <li>Ribetes en diferentes anchos</li>
            <li>Vivos simples y dobles</li>
            <li>Ojales manuales decorativos</li>
            <li>Botones forrados artesanales</li>
            <li>Presillas y trabillas</li>
            <li>Pespuntes decorativos</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Técnicas de Planchado</h2>
          <ul>
            <li>Planchado de costuras rectas</li>
            <li>Planchado de costuras curvas</li>
            <li>Moldeado con vapor en mangas</li>
            <li>Moldeado de solapas y cuellos</li>
            <li>Fusionado de entretelas</li>
            <li>Técnicas de presión y temperatura</li>
            <li>Planchado final de prendas</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Detalles y Ornamentación</h2>
          <ul>
            <li>Aplicación de encajes</li>
            <li>Bordados básicos decorativos</li>
            <li>Colocación de pedrería</li>
            <li>Aplicaciones y parches</li>
            <li>Drapeados simples</li>
            <li>Plisados y tablas</li>
            <li>Volantes y olanes</li>
          </ul>
        </section>

        <div className={styles.note}>
          <p>
            <strong>Nota:</strong> Estas técnicas requieren práctica y paciencia. 
            Te recomendamos practicar cada una en muestras antes de aplicarlas en tus prendas finales.
            Recuerda siempre hacer una prueba en un retazo de la misma tela que usarás en tu proyecto.
          </p>
        </div>
      </div>
    </div>
  );
}
