import React, { Component } from "react";

class AllServices extends Component {
  render() {
    return (
      <div id="AllServices">
        <div className="line" />
        <h2>All Services</h2>
        <ul className="filter">
          <li className="item">Hepsi</li>
          <li className="item">Emlak</li>
          <li className="item">İnşaat</li>
        </ul>
        <ul className="service-list">
          <li>
            <div className="media" />
            <div className="line" />
            <h3 className="title">Emlakta Lider Geliştirme Programı</h3>
            <p className="description">
              Emlak ofisi sahibi ya da emlak danışmanı olarak her türlü bilgi,
              uygulama, iletişim, satış ve pazarlama stratejilerine hakim olup
              emlakta bölgenizin lideri olacaksınız.
            </p>
            <button>İncele</button>
          </li>
          <li>
            <div className="media" />
            <div className="line" />
            <h3 className="title">
              İnşaat Projelerine Özel Pazarlama ve Satış Danışmanlığı
            </h3>
            <p className="description">
              İnşaat firmalarının gayrimenkul projelerine değer katacak bir
              aksiyon planı çerçevesinde; doğru hedef kitleye yapılacak
              iletişim, pazarlama ve satış aktivitelerini belirleyin.
            </p>
            <button>İncele</button>
          </li>
          <li>
            <div className="media" />
            <div className="line" />
            <h3 className="title">Markalaşma Danışmanlığı</h3>
            <p className="description">
              Sektör ayrımı yapmaksızın işinde başarılı olmak isteyen
              şirketleri, kurumları ve hatta bireyleri farklılaştırarak öne
              çıkarmak amacıyla verdiğimiz markalaşma danışmanlığı hizmetlerimiz
              belli bir program ve plan dahilinde yürütülmektedir.
            </p>
            <button>İncele</button>
          </li>
          <li>
            <div className="media" />
            <div className="line" />
            <h3 className="title">
              İnşaat Proje Satış Ofisi Ekiplerine Özel Emlak Eğitim Programı
            </h3>
            <p className="description">
              Benzersiz uygulamalı tekniklerle farkındalık yaratıp bakış açısını
              olumlu yönde değiştiren eğitimlerimize katılan katılımcıların
              satış başarısı ilk eğitimlerle birlikte yükseltmeye başlar.
            </p>
            <button>İncele</button>
          </li>
          <li>
            <div className="media" />
            <div className="line" />
            <h3 className="title">
              Emlak Ofislerine Özel Emlak Eğitim Programı
            </h3>
            <p className="description">
              Uluslararası emlak markalarında üst düzey yöneticilik ve emlakta
              21 yıllık eğitim tecrübemizle gerçekleştirdiğimiz satış yükselten
              uygulamalı eğitim, koçluk ve danışmanlık programlarımızla 2010
              yılından beri emlak ofislerine yol gösteriyoruz.
            </p>
            <button>İncele</button>
          </li>
          <li>
            <div className="media" />
            <div className="line" />
            <h3 className="title">Motivasyon Konuşmaları</h3>
            <p className="description">
              Şirketinizde ofis motivasyonunu yükseltin
            </p>
            <button>İncele</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default AllServices;
