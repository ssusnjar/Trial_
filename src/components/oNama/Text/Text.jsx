import React from "react";
import Styles from "./Text.module.css";

const Text = () => {
  return (
    <div className={Styles.main}>
      <p className={Styles.firstTxt}>
        Tvrtka Trial d.o.o., osnovana 2015. godine, proizlazi iz obilnog
        iskustva stečenog tijekom dugogodišnjeg rada na ispitivanju građevinskih
        materijala i njihovoj primjeni u raznim projektima. Naša tvrtka u svom
        sastavu ima akreditirani ispitni laboratorij za ispitivanje građevinskih
        materijala, što jamči visoku razinu stručnosti i preciznost u provođenju
        analiza.
      </p>
      <p className={Styles.firstTxt}>
        Od samog osnutka, naš tim se sastoji od stručnjaka čija inovativna
        inženjerska rješenja kontinuirano doprinose unapređenju procesa u
        građevinskoj industriji. Naše područje djelovanja obuhvaća široki
        spektar građevinskih radova, počevši od cjelokupne visokogradnje i
        niskogradnje do inženjerskih i pomorskih građevina, uključujući i
        različite terenske istražne radove.
      </p>
      <p className={Styles.firstTxt}>
        Ponosni smo na svoju dugoročnu pouzdanost koja je prepoznata ne samo
        diljem Hrvatske, već i izvan nje, s projektima i suradnjama koje smo
        ostvarili u zemljama poput Slovenije, Bosne i Hercegovine te Crne Gore.
        S predanošću kvaliteti i inovacijama, nastavljamo graditi mostove između
        iskustva i budućnosti u građevinskoj industriji.
      </p>
    </div>
  );
};

export default Text;
