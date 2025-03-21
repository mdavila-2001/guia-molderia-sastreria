import Image from 'next/image';
import styles from './patrones.module.css';

export const runtime = "edge";

export default function Patrones() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Patrones Base y Variaciones</h1>

      <section className={styles.section}>
        <h2>Patrón Base de Cuerpo</h2>
        <div className={styles.content}>
          <div className={styles.patternCard}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/patrones/patron-cuerpo.png"
                alt="Patrón base de cuerpo"
                width={400}
                height={300}
                className={styles.patternImage}
              />
            </div>
            <h3>Medidas Necesarias</h3>
            <ul>
              <li>Contorno de busto</li>
              <li>Contorno de cintura</li>
              <li>Ancho de espalda</li>
              <li>Talle delantero y trasero</li>
              <li>Alto de busto</li>
              <li>Separación de busto</li>
            </ul>
          </div>
          
          <div className={styles.patternCard}>
            <h3>Pasos de Construcción</h3>
            <ol>
              <li>Trazar rectángulo base</li>
              <li>Marcar línea de cintura</li>
              <li>Ubicar puntos de busto</li>
              <li>Trazar pinzas de entalle</li>
              <li>Definir escote y hombros</li>
              <li>Marcar sisa y costados</li>
            </ol>
            <div className={styles.imageContainer}>
              <Image
                src="/images/cuerpo/construccion-cuerpo.png"
                alt="Pasos de construcción del patrón de cuerpo"
                width={400}
                height={300}
                className={styles.patternImage}
              />
            </div>
          </div>

          <div className={styles.patternCard}>
            <h3>Variaciones</h3>
            <ul className={styles.variations}>
              <li>
                <div className={styles.variationHeader}>
                  <span className={styles.variationName}>Princesa</span>
                  <Image
                    src="/images/cuerpo/princesa.png"
                    alt="Variación princesa"
                    width={100}
                    height={100}
                    className={styles.variationImage}
                  />
                </div>
                <span className={styles.variationDesc}>Corte desde el hombro o sisa hasta el bajo</span>
              </li>
              <li>
                <div className={styles.variationHeader}>
                  <span className={styles.variationName}>Imperio</span>
                  <Image
                    src="/images/cuerpo/imperio.png"
                    alt="Variación imperio"
                    width={100}
                    height={100}
                    className={styles.variationImage}
                  />
                </div>
                <span className={styles.variationDesc}>Corte bajo el busto</span>
              </li>
              <li>
                <div className={styles.variationHeader}>
                  <span className={styles.variationName}>Asimétrico</span>
                  <Image
                    src="/images/cuerpo/asimetrico.png"
                    alt="Variación asimétrica"
                    width={100}
                    height={100}
                    className={styles.variationImage}
                  />
                </div>
                <span className={styles.variationDesc}>Pinzas y cortes desiguales</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Patrón Base de Manga</h2>
        <div className={styles.content}>
          <div className={styles.patternCard}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/mangas/patron-manga.png"
                alt="Patrón base de manga"
                width={400}
                height={300}
                className={styles.patternImage}
              />
            </div>
            <h3>Medidas Necesarias</h3>
            <ul>
              <li>Contorno de brazo</li>
              <li>Largo de manga</li>
              <li>Alto de copa</li>
              <li>Ancho de copa</li>
            </ul>
          </div>

          <div className={styles.patternCard}>
            <h3>Pasos de Construcción</h3>
            <ol>
              <li>Trazar rectángulo base</li>
              <li>Marcar altura de copa</li>
              <li>Definir curva de copa</li>
              <li>Ajustar contorno de manga</li>
            </ol>
            <div className={styles.imageContainer}>
              <Image
                src="/images/mangas/construccion-manga.png"
                alt="Pasos de construcción del patrón de manga"
                width={400}
                height={300}
                className={styles.patternImage}
              />
            </div>
          </div>

          <div className={styles.patternCard}>
            <h3>Variaciones</h3>
            <ul className={styles.variations}>
              <li>
                <div className={styles.variationHeader}>
                  <span className={styles.variationName}>Ranglan</span>
                  <Image
                    src="/images/mangas/ranglan.png"
                    alt="Variación ranglan"
                    width={100}
                    height={100}
                    className={styles.variationImage}
                  />
                </div>
                <span className={styles.variationDesc}>Extensión hasta el escote</span>
              </li>
              <li>
                <div className={styles.variationHeader}>
                  <span className={styles.variationName}>Jamón</span>
                  <Image
                    src="/images/mangas/jamon.png"
                    alt="Variación jamón"
                    width={100}
                    height={100}
                    className={styles.variationImage}
                  />
                </div>
                <span className={styles.variationDesc}>Volumen en la copa</span>
              </li>
              <li>
                <div className={styles.variationHeader}>
                  <span className={styles.variationName}>Obispo</span>
                  <Image
                    src="/images/mangas/obispo.png"
                    alt="Variación obispo"
                    width={100}
                    height={100}
                    className={styles.variationImage}
                  />
                </div>
                <span className={styles.variationDesc}>Volumen en el bajo</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Patrón Base de Falda</h2>
        <div className={styles.content}>
          <div className={styles.patternCard}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/patrones/patron-falda.png"
                alt="Patrón base de falda"
                width={400}
                height={300}
                className={styles.patternImage}
              />
            </div>
            <h3>Medidas Necesarias</h3>
            <ul>
              <li>Contorno de cintura</li>
              <li>Contorno de cadera</li>
              <li>Alto de cadera</li>
              <li>Largo de falda</li>
            </ul>
          </div>

          <div className={styles.patternCard}>
            <h3>Pasos de Construcción</h3>
            <ol>
              <li>Trazar rectángulo base</li>
              <li>Marcar línea de cadera</li>
              <li>Ubicar pinzas</li>
              <li>Definir costados</li>
            </ol>
            <div className={styles.imageContainer}>
              <Image
                src="/images/patrones/construccion-falda.png"
                alt="Pasos de construcción del patrón de falda"
                width={400}
                height={300}
                className={styles.patternImage}
              />
            </div>
          </div>

          <div className={styles.patternCard}>
            <h3>Variaciones</h3>
            <ul className={styles.variations}>
              <li>
                <div className={styles.variationHeader}>
                  <span className={styles.variationName}>Evasé</span>
                  <Image
                    src="/images/patrones/variacion-evase.png"
                    alt="Variación evasé"
                    width={100}
                    height={100}
                    className={styles.variationImage}
                  />
                </div>
                <span className={styles.variationDesc}>Ampliación desde la cadera</span>
              </li>
              <li>
                <div className={styles.variationHeader}>
                  <span className={styles.variationName}>Plisada</span>
                  <Image
                    src="/images/patrones/variacion-plisada.png"
                    alt="Variación plisada"
                    width={100}
                    height={100}
                    className={styles.variationImage}
                  />
                </div>
                <span className={styles.variationDesc}>Pliegues uniformes</span>
              </li>
              <li>
                <div className={styles.variationHeader}>
                  <span className={styles.variationName}>Godets</span>
                  <Image
                    src="/images/patrones/variacion-godets.png"
                    alt="Variación godets"
                    width={100}
                    height={100}
                    className={styles.variationImage}
                  />
                </div>
                <span className={styles.variationDesc}>Inserción de piezas triangulares</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
