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
          <p className={styles.diagramDescription}>
            Luego usamos estas fórmulas con nuestra medida de contorno de cuello y con el resultado de cada una hacemos puntos y líneas guía con estas medidas.
          </p>
          <div className={styles.baseRectangles}>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangle}>
                <div className={styles.point} data-type="green"></div>
                <div className={styles.point} data-type="purple"></div>
                <div className={styles.line} data-type="green"></div>
                <div className={styles.line} data-type="purple"></div>
                <div className={styles.point} data-type="red"></div>
                <div className={styles.line} data-type="red"></div>
                <span className={styles.measureLabel} data-type="purple">6cm</span>
                <span className={styles.measureLabel} data-type="red">5cm</span>
                <span className={styles.measureLabel} data-type="green">3cm</span>
              </div>
            </div>
                        
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangle}>
                <div className={styles.point} data-type="blood"></div>
                <div className={styles.line} data-type="blue"></div>
                <div className={styles.line} data-type="blood"></div>
                <div className={styles.point} data-type="blue"></div>
                <span className={styles.measureLabel} data-type="blood">2cm</span>
                <span className={styles.measureLabel} data-type="blue">7cm</span>
              </div>
            </div>
          </div>
          <div className={styles.formulaTable}>
              <div className={styles.tableHeader}>
                Fórmula para cuello y caída de hombro
              </div>
              <div className={styles.tableRow}>
                <div className={styles.formula}>8-3= 5 cm</div>
                <div className={styles.description}>Alto de caída de hombro delantero</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.formula}>8-2= 6 cm</div>
                <div className={styles.description}>Ancho de cuello delantero</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.formula}>8-1= 7 cm +2 cm superiores</div>
                <div className={styles.description}>Ancho de cuello trasero</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.formula}>8 cm</div>
                <div className={styles.description}>Alto de cuello delantero</div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}