import React, { Component } from "react";

class Story extends Component {
  render() {
    return (
      <div id="story">
        <div className="media"/>
        <div className="heading">
          <div className="line" />
          <h2 className="title">Nasıl başladık?</h2>
        </div>
        <p className="text">
          Mutluluk halimiz müşterilerimize, dostlarımıza ve çevremizdeki
          insanlara da yansıyacak, onların hayatlarında da olumlu değişiklikler
          yaratabilecektik. İşte bu bizim için başarı demekti. Yeteneklerimiz ve
          uzmanlıklarımız doğrultusunda insanlara yol göstermeyi, bilgilerimizi
          paylaşarak onlarla birlikte çoğalmayı, daha fazla öğrenmeyi,
          öğrendikçe değişmeyi, değiştikçe gelişmeyi hedefledik. Hayata olumlu
          bakan, gerçekçi iyimser kimliğimiz ve mutlu ruh halimizin
          avantajlarını cebimize koyarak 2010 yılında yola çıktık.
          Düşüncelerimize duygularımızı katarak eyleme geçtik. Bir nedenimiz
          vardı. Bildiğimiz, inandığımız ve sevdiğimiz şeyleri yaparsak mutlu
          kalacaktık.
        </p>
        <ul className="list">
          <li className="ourJob">
            {/* <div className="line" /> */}
            <h3 className="head">İşimiz</h3>
            <p className="description">
              Araştırmalar, markaların genellikle birbirine daha çok benzemeye
              başladığını ve benzerlik arttıkça insanların fiyata göre
              ürün/hizmet seçtiğini gösteriyor. İşimiz, müşterilerimizi kendi
              özgün değerleriyle farklılaştırarak öne çıkmalarına yol
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
              maliyetleri azaltıp karlılığı arttırmakla sonuçlanan hizmetlerimiz
              yalnızca kazandırmaya odaklıdır.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Story;
