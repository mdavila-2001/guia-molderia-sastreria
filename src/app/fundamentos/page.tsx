import styles from './fundamentos.module.css';

export const runtime = "edge";

export default function Fundamentos() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fundamentos de Moldería y Sastrería</h1>
      
      <section className={styles.section}>
        <h2>Herramientas Básicas</h2>
        <div className={styles.content}>
          <ul>
            <li>Cinta métrica</li>
            <li>Reglas de patronaje</li>
            <li>Papel para patrones</li>
            <li>Tijeras de tela y papel</li>
            <li>Alfileres y agujas</li>
            <li>Tiza de sastre</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Tabla de Medidas</h2>
        <div className={styles.content}>
          <p>Para realizar el molde de cuerpo base, es necesario tomar las siguientes medidas:</p>
          
          <div className={styles.tableContainer}>
            <table className={styles.measureTable}>
              <thead>
                <tr>
                  <th>Medida</th>
                  <th>S</th>
                  <th>M</th>
                  <th>M</th>
                  <th>L</th>
                  <th>L</th>
                  <th>XL</th>
                  <th>XL</th>
                  <th>XXL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Contorno de busto</td>
                  <td>92</td>
                  <td>96</td>
                  <td>100</td>
                  <td>104</td>
                  <td>108</td>
                  <td>112</td>
                  <td>116</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>Contorno de cintura</td>
                  <td>62</td>
                  <td>64</td>
                  <td>68</td>
                  <td>74</td>
                  <td>78</td>
                  <td>82</td>
                  <td>86</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>1er ancho de cadera</td>
                  <td>92</td>
                  <td>96</td>
                  <td>100</td>
                  <td>104</td>
                  <td>110</td>
                  <td>116</td>
                  <td>122</td>
                  <td>108</td>
                </tr>
                <tr>
                  <td>1er alto de cadera</td>
                  <td>12</td>
                  <td>12</td>
                  <td>12</td>
                  <td>10</td>
                  <td>10</td>
                  <td>10</td>
                  <td>10</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>2do ancho de cadera</td>
                  <td>96</td>
                  <td>100</td>
                  <td>106</td>
                  <td>112</td>
                  <td>120</td>
                  <td>126</td>
                  <td>132</td>
                  <td>138</td>
                </tr>
                <tr>
                  <td>2do alto de cadera</td>
                  <td>25</td>
                  <td>25</td>
                  <td>25</td>
                  <td>27</td>
                  <td>28</td>
                  <td>28</td>
                  <td>28</td>
                  <td>28</td>
                </tr>
                <tr>
                  <td>Alto de busto</td>
                  <td>24</td>
                  <td>25</td>
                  <td>25</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>29</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Talle delantero</td>
                  <td>43</td>
                  <td>44</td>
                  <td>44</td>
                  <td>45</td>
                  <td>46</td>
                  <td>46</td>
                  <td>48</td>
                  <td>48</td>
                </tr>
                <tr>
                  <td>Talle trasero</td>
                  <td>41</td>
                  <td>42</td>
                  <td>42</td>
                  <td>41</td>
                  <td>40</td>
                  <td>40</td>
                  <td>40</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>Ancho de espalda</td>
                  <td>36</td>
                  <td>36</td>
                  <td>37</td>
                  <td>39</td>
                  <td>40</td>
                  <td>42</td>
                  <td>44</td>
                  <td>46</td>
                </tr>
                <tr>
                  <td>Separación de busto</td>
                  <td>18</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>Alto sisa</td>
                  <td>21</td>
                  <td>21</td>
                  <td>21</td>
                  <td>21</td>
                  <td>21</td>
                  <td>21</td>
                  <td>21</td>
                  <td>21</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.note}>
            <em>Las medidas de contorno se dividen en cuatro partes, mientras que las de altura se utilizan completas.</em>
          </p>
        </div>
      </section>

    </div>
  );
}
