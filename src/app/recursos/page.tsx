import styles from './recursos.module.css';

export const runtime = "edge";

export default function RecursosPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recursos y Referencias</h1>
      <p className={styles.description}>
        Material complementario para enriquecer tu aprendizaje en moldería y sastrería
      </p>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Herramientas Recomendadas</h2>
          <div className={styles.resourceList}>
            <div className={styles.resourceItem}>
              <h3>Básicas</h3>
              <ul>
                <li>Cinta métrica profesional</li>
                <li>Reglas de patronaje</li>
                <li>Tijeras de tela y papel</li>
                <li>Alfileres y agujas</li>
                <li>Tiza de sastre</li>
              </ul>
            </div>
            <div className={styles.resourceItem}>
              <h3>Avanzadas</h3>
              <ul>
                <li>Ruleta y papel de calco</li>
                <li>Pesas para patrones</li>
                <li>Plancha industrial</li>
                <li>Mesa de corte profesional</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Materiales de Estudio</h2>
          <div className={styles.resourceList}>
            <div className={styles.resourceItem}>
              <h3>Libros Recomendados</h3>
              <ul>
                <li>Patronaje: las bases</li>
                <li>Manual de técnicas de sastrería</li>
                <li>Guía completa de acabados</li>
                <li>Confección de alta costura</li>
              </ul>
            </div>
            <div className={styles.resourceItem}>
              <h3>Recursos Online</h3>
              <ul>
                <li>Tutoriales en video</li>
                <li>Blogs especializados</li>
                <li>Foros de consulta</li>
                <li>Cursos virtuales</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Proveedores Sugeridos</h2>
          <div className={styles.resourceList}>
            <div className={styles.resourceItem}>
              <h3>Telas y Materiales</h3>
              <ul>
                <li>Tiendas especializadas</li>
                <li>Distribuidores mayoristas</li>
                <li>Mercerías de calidad</li>
                <li>Importadores textiles</li>
              </ul>
            </div>
            <div className={styles.resourceItem}>
              <h3>Herramientas y Equipos</h3>
              <ul>
                <li>Tiendas de máquinas</li>
                <li>Suministros profesionales</li>
                <li>Accesorios especializados</li>
                <li>Repuestos y mantenimiento</li>
              </ul>
            </div>
          </div>
        </section>

        <div className={styles.note}>
          <p>
            <strong>Nota:</strong> Esta lista de recursos se actualiza periódicamente. 
            Te recomendamos consultar regularmente para encontrar nuevos materiales y referencias.
          </p>
        </div>
      </div>
    </div>
  );
}
