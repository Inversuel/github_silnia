import React, { useEffect, useRef } from "react";
import Layout from "../components/layout";
import style from "../style/silnia.module.scss"


const SilniaPage = () => {
  const [value, setValue] = React.useState<number>(0);
  const [result, setresult] = React.useState<number>()
  const prevValue = useRef<number[]>([]);

  const onChange = (e:string) => {
    setValue(() => parseInt(e));
  }

  //useEffect(()=>{prevValue.current?.push(value)},[value])

  const silnia = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let wynik = 1;
    for (let i = value!; i > 1; i--) {
      wynik=wynik*i;
    }
    setresult(() => wynik);
    prevValue.current.push(wynik);
  }

  return (
    <Layout>
      <form>
        <label className={style.labelGithub}>Wyliczenie silni! :</label>
        <div className={style.formGithub}>
          <input
            className={style.inputGithub}
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <button className={style.buttonGithub} onClick={(e) => silnia(e)}>
            Oblicz
          </button>
        </div>
        <div className={style.wynik}>
          <p>Wynik: {result && result}</p>
          <p>Memory: {prevValue.current.map((item) => ` ${item}`)} </p>
        </div>
      </form>
    </Layout>
  );
};

export default SilniaPage;
