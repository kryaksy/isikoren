import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Biography extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="biography">
          <div className="picture" />
          <div className="content">
            <div className="heading">
              <div className="line" />
              <h2 className="name">Hilmi Işıkören</h2>
            </div>
            <p className="intro">
              29 yıllık tecrübesiyle gıda, teknoloji, gayrimenkul gibi birçok
              alanda pek çok şirketin markalaşma süreçlerine liderlik eden Hilmi
              Işıkören Işıkören Danışmanlık şirketinin kurucu ortağıdır. 1997 –
              2010 tarihleri arasında uluslararası üç gayrimenkul markasındaki
              üst düzey yöneticilik ve kurucu ortaklık deneyimiyle de
              gayrimenkul ve inşaat sektörünün önde gelen ismidir. Her yıl
              binden fazla kişiye eğitim veren Hilmi Işıkören, 10 Numara
              Motivasyon kitabı ve{" "}
              <a href="https://www.10numaramotivasyon.com" target="_blank">
                blog
              </a>{" "}
              sayfasındaki iş ve hayata dair ilham veren, yol gösterici
              paylaşımlarıyla da tanınmakta, üniversite, şirket ve kurumlar için
              başarı üzerine motivasyon konuşmaları yapmaktadır.
            </p>
            <h3 className="title">Biyografi</h3>
            <p className="bio">
              1988 yılında Marmara Üniversitesinden mezun olduktan sonra
              franchising sistemini öğrenmek amacıyla Amerika’ya giden Hilmi
              Işıkören, döndüğünde gıda sektöründeki bir dünya markasının
              Türkiye merkezinde franchise direktörü olarak profesyonel
              yaşantısına başladı. Türkiye’nin ilk teknoloji marketinin
              markalaşma ve yaygınlaşma çalışmalarının içinde yer alarak markayı
              3 yıl içerisinde 100 franchise mağazayla ülkenin en yaygın zinciri
              haline getirdi. 1997 – 2010 yılında arasında üç uluslararası
              gayrimenkul markasında (RE/ MAX Türkiye – Century 21 Türkiye –
              Realty World Türkiye) direktörlük, kurucu ortaklık ve genel
              müdürlük yapan Hilmi Işıkören, 2010 yılında kendi danışmanlık
              şirketini iletişim, pazarlama ve markalaşma konusunda uzman Belgin
              Benek ile birlikte kurdu. Sektör ayrımı yapmaksızın işinde
              başarılı olmak isteyen şirketleri, kurumları ve hatta bireyleri
              farklılaştırarak öne çıkarmak amacıyla danışmanlık, eğitim ve
              seminerler veren Işıkören ayrıca başarı üzerine ülke çapında
              gerçekleştirdiği ve yaygınlaştırdığı farklı ve etkileyici
              motivasyon konuşmalarıyla tanınmakta, blog ve köşe yazarlığı
              yapmaktadır. Hilmi Işıkören’in ilk kitabı “10 Numara Motivasyon”
              29 Eylül 2016’da raflardaki yerini aldı. Çalışandan patrona herkes
              için ilham kaynağı olacak kitap, sadece iş dünyasıyla sınırlı
              kalmayarak, herkesin hayatına dokunan, kişisel gelişimi
              destekleyici bir yol haritasını da içeriyor. Kitabın geliri,
              korunmaya muhtaç çocuklara kucak açan “Koruncuk Vakfı”na
              bağışlayan Hilmi Işıkören, sonraki kitaplarında da bunu sürdürmeyi
              hedefliyor.
            </p>
            <ul className="career-history list">
              <li className="item">
                <p className="dates">1990 - 1994</p>
                <div>
                  <h4 className="company">Baskin Robbins Türkiye</h4>
                  <p className="position">Franchise Müdürü</p>
                </div>
              </li>
              <li className="item">
                <p className="dates">1994 - 1997</p>
                <div>
                  <h4 className="company">Escortland Türkiye</h4>
                  <p className="position">Franchise Müdürü</p>
                </div>
              </li>
              <li className="item">
                <p className="dates">1997 - 2001</p>
                <div>
                  <h4 className="company">Re/max Türkiye</h4>
                  <p className="position">Franchise Müdürü</p>
                </div>
              </li>
              <li className="item">
                <p className="dates">2001 - 2005</p>
                <div>
                  <h4 className="company">Century 21 Türkiye</h4>
                  <p className="position">Genel Müdür</p>
                </div>
              </li>
              <li className="item">
                <p className="dates">2005 - 2010</p>
                <div>
                  <h4 className="company">Realty World Türkiye</h4>
                  <p className="position">Kurucu Ortak / Genel Müdür</p>
                </div>
              </li>
              <li className="item">
                <p className="dates">2008 - 2012</p>
                <div>
                  <h4 className="company">
                    BÜYEM Gayrimenkul Danışmanlığı Sertifika Programı
                  </h4>
                  <p className="position">Kurucu / Eğitmen</p>
                </div>
              </li>
              <li className="item">
                <p className="dates">2010</p>
                <div>
                  <h4 className="company">Işıkören Danışmanlık </h4>
                  <p className="position">
                    Kurucu Ortak / Danışman, Eğitmen, Yazar ve Konuşmacı
                  </p>
                </div>
              </li>
              <li className="item">
                <p className="dates">2011</p>
                <div>
                  <h4 className="company">
                    <a href="https://www.hurriyetemlak.com"> Hürriyet Emlak</a>
                  </h4>
                  <p className="position">Köşe Yazarı</p>
                </div>
              </li>
              <li className="item">
                <p className="dates">2012</p>
                <div>
                  <h4 className="company">Hürriyet Yazar Kafe </h4>
                  <p className="position">Yazar</p>
                </div>
              </li>
              <li className="item">
                <p className="dates">2013</p>
                <div>
                  <h4 className="company">Başarı ve Motivasyon </h4>
                  <p className="position">Konuşmacı</p>
                </div>
              </li>
              <li className="item">
                <p className="dates">2016</p>
                <div>
                  <h4 className="company">
                    <a href="https://www.10numaramotivasyon.com">
                      10 Numara Motivasyon kitabı
                    </a>
                    <span className="note">
                      Yazar geliri, korunmaya muhtaç çocuklar için Koruncuk
                      Vakfına bağışlanmıştır.
                    </span>
                  </h4>
                  <p className="position">Yazarı</p>
                </div>
              </li>
              <li className="item">
                <p className="dates">2018</p>
                <div>
                  <h4 className="company">
                    <a href="">Emlakta Lider Geliştirme Programı</a>
                  </h4>
                  <p className="position">Kurucu / Eğitmen</p>
                </div>
              </li>
            </ul>
            <ul className="educations">
              <h3 className="title">Mesleki Eğitimler</h3>
              <li className="item">
                <h4 className="name">BR Academy, İş İdaresi Eğitim Programı</h4>
                <p className="info">LA, Glandale, ABD. 1992-1993</p>
                <ul className="activities">
                  <li className="activity">
                    Franchise Yönetim, Satış ve Pazarlama Eğitim Programı
                  </li>
                  <li className="activity">
                    SMASH Müşteri Memnuniyeti Eğitim Programı
                  </li>
                  <li className="activity">
                    Liderlik ve Delegasyon Eğitim Programı
                  </li>
                  <li className="activity">
                    Pazarlama ve Satış Yönetimi Programı
                  </li>
                </ul>
              </li>
              <li className="item">
                <h4 className="name">RE/MAX International</h4>
                <p className="info">Denver, Colorado, ABD. 1997-1999</p>
                <ul className="activities">
                  <li className="activity">
                    Emlak üzerine eğiticinin eğitimi ve genel emlak eğitimleri
                    (1997-1999)
                  </li>
                  <li className="activity">Ulusal kongreler (1999)</li>
                </ul>
              </li>
              <li className="item">
                <h4 className="name">Century 21 International</h4>
                <p className="info">Parsippany, New Jersey, ABD. 2001-2005</p>
                <ul className="activities">
                  <li className="activity">
                    Emlak üzerine eğitimcinin eğitimi ve genel emlak eğitimleri
                    (2001-2005)
                  </li>
                  <li className="activity">
                    Uluslararası kongreler (2001-2005)
                  </li>
                </ul>
              </li>
              <li className="item">
                <h4 className="name">Realty World International</h4>
                <p className="info">Costa Mesa, California, ABD. 2005-2010</p>
                <ul className="activities">
                  <li className="activity">
                    Emlak üzerine eğiticin eğitimi ve genel emlak eğitimleri
                    (2005-2010)
                  </li>
                  <li className="activity">
                    Uluslararası kongreler (2005-2010)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Biography;
