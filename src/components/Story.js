import React, { Component } from "react";
import "./Story.css";

class Story extends Component {
  render() {
    return (
      <div id="story">
        <div className="media" />
        <div className="container">
          <div className="heading">
            <div className="line" />
            <h2 className="title">Nasıl başladık?</h2>
          </div>
          <div className="content">
            {story.intro.map(text => (
              <p key={text.substring(0,5)} className="text">{text}</p>
            ))}
            <ul className="list">
              <li className="ourJob">
                {/* <div className="line" /> */}
                <h3 className="head">İşimiz</h3>
                <p className="description">
                  Araştırmalar, markaların genellikle birbirine daha çok
                  benzemeye başladığını ve benzerlik arttıkça insanların fiyata
                  göre ürün/hizmet seçtiğini gösteriyor. İşimiz, müşterilerimizi
                  kendi özgün değerleriyle farklılaştırarak öne çıkmalarına yol
                  göstermektir.
                </p>
              </li>
              <li className="ourFocus">
                {/* <div className="line" /> */}
                <h3 className="head">Odağımız</h3>
                <p className="description">
                  Geliştirdiğimiz stratejiler, mevcut ve sıklıkla daralan
                  piyasalarda talebi bölmek ve rakipleri ölçmek yerine, talebi
                  arttırmak ve rekabetten uzaklaşmakla ilgilidir. Gereksiz
                  maliyetleri azaltıp karlılığı arttırmakla sonuçlanan
                  hizmetlerimiz yalnızca kazandırmaya odaklıdır.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
