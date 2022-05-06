import React from "react";
import Layout from "./components/layout";
import style from "./style/app.module.scss"

function App() {
  return (
    <Layout>
      <div className={style.container}>
        <p>Aplikacja ma się składać z minimum 3 ekran&oacute;w:</p>
        <ol>
          <li>Wyszukiwarka projekt&oacute;w githubowych</li>
          <li>Założenia całej aplikacji</li>
          <li>Wyliczanie silni</li>
        </ol>
        <p>Ad 1:</p>
        <ul>
          <li>Wykorzystane jest publiczne API Githuba;</li>
          <li>Czeka na podanie loginu użytkownika:</li>
          <ul>
            <li>waliduje poprawność;</li>
            <li>obsługuje nieistniejące loginy;</li>
          </ul>
          <li>
            wyświetla maksymalnie 5 projekt&oacute;w w kolejności od ostatnio
            updatowanego:
          </li>
          <ul>
            <li>
              wyświetla maksymalnie 5 commit&oacute;w każdego z
              projekt&oacute;w;
            </li>
          </ul>
        </ul>
        <p>Ad 2:</p>
        <ul>
          <li>
            wyświetla niniejszą treść (listę wymagań) z podobnym (takim samym)
            podziałem i układem;
          </li>
          <li>proszę zawrzeć też autora aplikacji - własne imię i nazwisko; Karol Maj</li>
        </ul>
        <p>Ad 3:</p>
        <ul>
          <li>
            input do podania liczby dla kt&oacute;rej będzie wyliczona silnia;
          </li>
          <li>historia poprzednich wyliczeń.</li>
        </ul>
        <p>Og&oacute;lne:</p>
        <ul>
          <li>
            korzysta z <strong>LESS / SASS</strong>. Spełnia wymogi{" "}
            <strong>BEM</strong>. Jest też <strong>estetyczna;</strong>
          </li>
          <li>
            wyświetla <strong>co drugi</strong> element każdej listy
            wyr&oacute;żnionym kolorem;
          </li>
          <li>
            jest <strong>hostowana </strong>(github pages, heroku, itd..), a jej
            kod jest dostępny<strong>publicznie</strong>;
          </li>
        </ul>
        <p>
          Miło widziane użycie <strong>middlewar&oacute;w reduxowych</strong>.
        </p>
      </div>
    </Layout>
  );
}

export default App;
