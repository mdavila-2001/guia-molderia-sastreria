import styles from './molde-base.module.css';

export const runtime = "edge";

export default function MoldeBasePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Guía Molde Cuerpo Base</h1>

      <section className={styles.prerequisitos}>
        <h2>Prerrequisitos:</h2>
        <p>
          Usaremos las siguientes medidas para crear nuestro molde de cuerpo base:{" "}
          <strong>
            contorno de busto, primer contorno de cadera, segundo contorno de cadera, segundo alto de cadera,
            contorno de escote, altura de busto, talle delantero, talle trasero, ancho de espalda, ancho de hombro,
            separación del busto y alto de sisa.
          </strong>
        </p>
      </section>

      <section className={styles.tableContainer}>
        <h2>Tabla de Medidas</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Medida</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>XXL</th>
                <th>XXXL</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Contorno de busto</td><td>92</td><td>96</td><td>100</td><td>104</td><td>108</td><td>112</td></tr>
              <tr><td>Contorno de cintura</td><td>62</td><td>64</td><td>68</td><td>74</td><td>78</td><td>82</td></tr>
              <tr><td>1er ancho de cadera</td><td>92</td><td>94</td><td>98</td><td>104</td><td>110</td><td>116</td></tr>
              <tr><td>2do ancho de cadera</td><td>25</td><td>25</td><td>26</td><td>27</td><td>28</td><td>30</td></tr>
              <tr><td>Escote</td><td>8</td><td>8</td><td>8.5</td><td>9</td><td>9.5</td><td>9.5</td></tr>
              <tr><td>Alto de busto</td><td>22</td><td>22</td><td>23</td><td>23</td><td>24</td><td>24</td></tr>
              <tr><td>Talle delantero</td><td>43</td><td>43</td><td>43</td><td>45</td><td>48</td><td>48</td></tr>
              <tr><td>Talle trasero</td><td>43</td><td>43</td><td>43</td><td>45</td><td>48</td><td>48</td></tr>
              <tr><td>Ancho tórax</td><td>35</td><td>36</td><td>38</td><td>40</td><td>42</td><td>42</td></tr>
              <tr><td>Separación de busto</td><td>18</td><td>18</td><td>18</td><td>19</td><td>20</td><td>20</td></tr>
              <tr><td>Alto sisa</td><td>21</td><td>21</td><td>21</td><td>21</td><td>21</td><td>21</td></tr>
              <tr><td>Ancho espalda</td><td>36</td><td>36</td><td>37</td><td>39</td><td>40</td><td>42</td></tr>
              <tr><td>Ancho hombro</td><td>12</td><td>12</td><td>12</td><td>13</td><td>14</td><td>14</td></tr>
              <tr><td>Alto codo</td><td>34</td><td>35</td><td>35</td><td>34</td><td>33</td><td>33</td></tr>
              <tr><td>Largo manga</td><td>58</td><td>60</td><td>58</td><td>56</td><td>56</td><td>56</td></tr>
              <tr><td>Largo total</td><td>110</td><td>110</td><td>108</td><td>106</td><td>104</td><td>104</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <p className={styles.note}>
        <em>Las medidas del contorno las dividiremos en cuatro y la altura la utilizaremos en medidas enteras.</em>
      </p>
    </main>
  );
}
