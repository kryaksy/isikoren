import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AllServices.css";

class AllServices extends Component {
  render() {
    return (
      <div id="allServices">
        <div className="top">
          <div className="heading">
            <div className="line" />
            <h2 className="title">Servisler</h2>
          </div>
          <ul className="filter">
            <li className="item">Hepsi</li>
            <li className="item">Emlak</li>
            <li className="item">İnşaat</li>
          </ul>
        </div>
        <div className="container">
          <ul className="service-list">
            <li className="item">
              <div className="media" />
              <div className="content">
                <div className="heading small">
                  <div className="line" />
                  <h3 className="title">Emlakta Lider Geliştirme Programı</h3>
                </div>
                <p className="description">
                  Emlak ofisi sahibi ya da emlak danışmanı olarak her türlü
                  bilgi, uygulama, iletişim, satış ve pazarlama stratejilerine
                  hakim olup emlakta bölgenizin lideri olacaksınız.
                </p>
                <Link to="/emlakta-lider-gelistirme-programi">
                  <button>İncele</button>
                </Link>
              </div>
            </li>
            <li className="item">
              <div className="media" />
              <div className="content">
                <div className="heading small">
                  <div className="line" />
                  <h3 className="title">
                    İnşaat Projelerine Özel Pazarlama ve Satış Danışmanlığı
                  </h3>
                </div>
                <p className="description">
                  İnşaat firmalarının gayrimenkul projelerine değer katacak bir
                  aksiyon planı çerçevesinde; doğru hedef kitleye yapılacak
                  iletişim, pazarlama ve satış aktivitelerini belirleyin.
                </p>
                <Link to="/insaat-projeleri-pazarlama-ve-satis-danismanligi">
                  <button>İncele</button>
                </Link>
              </div>
            </li>
            <li className="item">
              <div className="media" />
              <div className="content">
                <div className="heading small">
                  <div className="line" />
                  <h3 className="title">Markalaşma Danışmanlığı</h3>
                </div>
                <p className="description">
                  Sektör ayrımı yapmaksızın işinde başarılı olmak isteyen
                  şirketleri, kurumları ve hatta bireyleri farklılaştırarak öne
                  çıkarmak amacıyla verdiğimiz markalaşma danışmanlığı
                  hizmetlerimiz belli bir program ve plan dahilinde
                  yürütülmektedir.
                </p>
                <Link to="/markalasma-danismanligi">
                  <button>İncele</button>
                </Link>
              </div>
            </li>
            <li className="item">
              <div className="media" />
              <div className="content">
                <div className="heading small">
                  <div className="line" />
                  <h3 className="title">
                    İnşaat Proje Satış Ofisi Ekiplerine Özel Emlak Eğitim
                    Programı
                  </h3>
                </div>
                <p className="description">
                  Benzersiz uygulamalı tekniklerle farkındalık yaratıp bakış
                  açısını olumlu yönde değiştiren eğitimlerimize katılan
                  katılımcıların satış başarısı ilk eğitimlerle birlikte
                  yükseltmeye başlar.
                </p>
                <Link to="/inşaat-proje-satis-ofisi-emlak-egitim-programi">
                  <button>İncele</button>
                </Link>
              </div>
            </li>
            <li className="item">
              <div className="media" />
              <div className="content">
                <div className="heading small">
                  <div className="line" />
                  <h3 className="title">
                    Emlak Ofislerine Özel Emlak Eğitim Programı
                  </h3>
                </div>
                <p className="description">
                  Uluslararası emlak markalarında üst düzey yöneticilik ve
                  emlakta 21 yıllık eğitim tecrübemizle gerçekleştirdiğimiz
                  satış yükselten uygulamalı eğitim, koçluk ve danışmanlık
                  programlarımızla 2010 yılından beri emlak ofislerine yol
                  gösteriyoruz.
                </p>
                <Link to="/emlak-ofisleri-emlak-egitim-programi">
                  <button>İncele</button>
                </Link>
              </div>
            </li>
            <li className="item">
              <div className="media" />
              <div className="content">
                <div className="heading small">
                  <div className="line" />
                  <h3 className="title">Motivasyon Konuşmaları</h3>
                </div>
                <p className="description">
                  Şirketinizde ofis motivasyonunu yükseltin
                </p>
                <Link to="/motivasyon-konusmalari">
                  <button>İncele</button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AllServices;
