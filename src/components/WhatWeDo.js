import React, { Component } from "react";

class WhatWeDo extends Component {
  render() {
    return (
      <div id="whatWeDo">
        <div className="heading">
            <div className="line" />
            <h2 className="title">Neler yaparız?</h2>
          </div>
        <ul className="valueProposition list">
          <li className="list-item">
            {/* Image or video */}
            <div className="media" />
            <h3 className="title">Emlakta Lider Geliştirme Programı </h3>
            <p className="snippet">
              Emlak ofisi sahibi ya da emlak danışmanı olarak her türlü bilgi,
              uygulama, iletişim, satış ve pazarlama stratejilerine hakim olup
              emlakta bölgenizin lideri olacaksınız.
            </p>
          </li>
          <li className="list-item">
            {/* Image or video */}
            <div className="media" />
            <h3 className="title">
              İnşaat Projelerine Özel Pazarlama ve Satış Danışmanlığı
            </h3>
            <p className="snippet">
              İnşaat firmalarının gayrimenkul projelerine değer katacak bir
              aksiyon planı çerçevesinde; doğru hedef kitleye yapılacak
              iletişim, pazarlama ve satış aktivitelerini belirleyin.
            </p>
          </li>
          <li className="list-item">
            {/* Image or video */}
            <div className="media" />
            <h3 className="title">Markalaşma Danışmanlığı </h3>
            <p className="snippet">
              Sektör ayrımı yapmaksızın işinde başarılı olmak isteyen
              şirketleri, kurumları ve hatta bireyleri farklılaştırarak öne
              çıkarmak amacıyla verdiğimiz markalaşma danışmanlığı hizmetlerimiz
              belli bir program ve plan dahilinde yürütülmektedir.
            </p>
          </li>
          <li className="list-item">
            {/* Image or video */}
            <div className="media" />
            <h3 className="title">
              İnşaat Proje Satış Ofisi Ekiplerine Özel Emlak Eğitim Programı
            </h3>
            <p className="snippet">
              Benzersiz uygulamalı tekniklerle farkındalık yaratıp bakış açısını
              olumlu yönde değiştiren eğitimlerimize katılan katılımcıların
              satış başarısı ilk eğitimlerle birlikte yükseltmeye başlar.
            </p>
          </li>
          <li className="list-item">
            {/* Image or video */}
            <div className="media" />
            <h3 className="title">
              Emlak Ofislerine Özel Emlak Eğitim Programı
            </h3>
            <p className="snippet">
              Uluslararası emlak markalarında üst düzey yöneticilik ve emlakta
              21 yıllık eğitim tecrübemizle gerçekleştirdiğimiz satış yükselten
              uygulamalı eğitim, koçluk ve danışmanlık programlarımızla 2010
              yılından beri emlak ofislerine yol gösteriyoruz.
            </p>
          </li>
          <li className="list-item">
            {/* Image or video */}
            <div className="media" />
            <h3 className="title">Motivasyon Konuşmaları </h3>
            <p className="snippet">Şirketinizde ofis motivasyonunu yükseltin</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default WhatWeDo;
