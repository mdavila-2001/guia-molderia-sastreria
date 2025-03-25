import styles from './molde-base.module.css';

export default function MoldeBase() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Molde Base</h1>
      
      <section className={styles.step}>
        <h2>Paso 1: Rectángulos Base</h2>
        <div className={styles.stepContent}>
          <p>Inicialmente haremos dos rectángulos (delantero y trasero):</p>
          <ul className={styles.instructions}>
            <li>Tomaremos la medida más ancha de cintura para arriba (contorno de busto)</li>
            <li>Esta medida la dividimos en cuatro para el ancho de ambos rectángulos</li>
            <li>Para la altura nos fijamos en el talle delantero y trasero</li>
            <li>Dejamos un margen de 4 a 5 cm que nos sirve para hacer correcciones</li>
          </ul>
          
          <div className={styles.baseRectangles}>
            <div className={styles.rectangleContainer}>
              <div className={styles.titleContainer}>
                <p>Delantero</p>
              </div>
              <div className={styles.rectangle}>
                <div className={styles.measurements}>
                  <span className={styles.vertical}>43cm</span>
                  <span className={styles.horizontal}>23cm</span>
                  <div className={styles.arrowVertical}></div>
                  <div className={styles.arrowHorizontal}></div>
                </div>
              </div>
            </div>
            
            <div className={styles.rectangleContainer}>
              <div className={styles.titleContainer}>
                <p>Trasero</p>
              </div>
              <div className={styles.rectangle}>
                <div className={styles.measurements}>
                  <span className={styles.vertical}>41cm</span>
                  <span className={styles.horizontal}>23cm</span>
                  <div className={styles.arrowVertical}></div>
                  <div className={styles.arrowHorizontal}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.measureNote}>
            <span className={styles.fraction}>
              <span className={styles.numerator}>92</span>
              <span className={styles.denominator}>4</span>
            </span>
            <span className={styles.equals}>=</span>
            <span>23cm</span>
          </div>
          <div className={styles.alert}>
            <strong>Ojo:</strong> La cintura <span className={styles.underline}>se debe mantener paralela en ambos moldes</span> y para eso agarramos <span className={styles.underline}>el talle más largo para la línea central (43 cm)</span> de la cintura y ya hecho esto a agarramos la cuarta parte de nuestro contorno (23 cm) y trazamos el ancho. Ahora sí trazamos el ancho de ambos rectángulos, pero antes <span className={styles.underline}>nos fijamos qué cada             rectángulo tanto el que va a ser el trasero como el delantero tenga sus medidas correspondientes en altura (o sea, las del talle delantero y el talle trasero)</span>.
          </div>
        </div>
      </section>
      <section className={styles.step}>
        <h2>Paso 2: Fórmulas para cuello y caída de hombro</h2>
        <div className={styles.stepContent}>
          <div className={styles.formulaContainer}>
            <table className={styles.formulaTable}>
              <tbody>
                <tr className={styles.formulaRow}>
                  <td>
                    <div className={styles.fraction}>
                      <span className={styles.numerator}>1</span>
                      <span className={styles.denominator}>5</span>
                    </div>
                    <span>Contorno de cuello - 3</span>
                  </td>
                  <td>Alto de caída de hombro delantero</td>
                </tr>
                <tr className={styles.formulaRow}>
                  <td>
                    <div className={styles.fraction}>
                      <span className={styles.numerator}>1</span>
                      <span className={styles.denominator}>5</span>
                    </div>
                    <span>Contorno de cuello - 2</span>
                  </td>
                  <td>Ancho de cuello delantero</td>
                </tr>
                <tr className={styles.formulaRow}>
                  <td>
                    <div className={styles.fraction}>
                      <span className={styles.numerator}>1</span>
                      <span className={styles.denominator}>5</span>
                    </div>
                    <span>Contorno de cuello - 1 +2 cm superiores</span>
                  </td>
                  <td>Ancho de cuello trasero</td>
                </tr>
                <tr className={styles.formulaRow}>
                  <td>
                    <div className={styles.fraction}>
                      <span className={styles.numerator}>1</span>
                      <span className={styles.denominator}>5</span>
                    </div>
                    <span>Contorno de cuello</span>
                  </td>
                  <td>Alto de cuello delantero</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}