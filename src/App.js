import React, { Component } from "react";
import logo from "./assets/Logo_1x.png";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

class App extends Component {
  handleMenu = () => {
    let sideBar = document.getElementById("App-sidebar");
    sideBar.classList.toggle("open");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-slogan">Rekabete karşı meydan okur!</p>
        </header>
        <div id="App-sidebar">
          <div className="menu-icon" onClick={this.handleMenu}>
            <FontAwesomeIcon icon="bars" />
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="menu-list">
            <li className="menu-item">Ana Sayfa</li>
            <li className="menu-item">Hakkimizda</li>
            <li className="menu-item">Servisler</li>
            <li className="menu-item">Iletisim</li>
          </ul>
        </div>
        <div className="App-container">
          <div id="whatWeDo">
            <h1 className="title">Neler Yaparız?</h1>
            <p className="intro">
              1997’den beri süregelen emlak sektörü tecrübemizle ülke
              genelindeki birçok noktada emlak taleplerini sağlıklı
              değerlendirmek üzere çalışmalar yapmaktayız. Bu konuda çok büyük
              bir profesyonel networke sahibiz. Alıcıları ve satıcıları doğru
              portföyle buluşturmak için binlerce çalışandan oluşan emlak
              uzmanlarıyla entegre olarak mümkün olan en kısa sürede sonuca
              ulaşırız.
            </p>
            <div className="services">
              <div className="service">Startup projeniz mi var?</div>
              <div className="service">
                İnşaat projenizdeki satış ofisiniz için eğitim mi almak
                istiyorsunuz?
              </div>
              <div className="service">Markalaşmak mı istiyorsunuz?</div>
              <div className="service">
                İnşaat firmanız için danışmanlık mı almak istiyorsunuz?
              </div>
              <div className="service">
                Emlak ofisiniz için eğitim mi almak istiyorsunuz?
              </div>
              <div className="service">
                Motivasyon üzerine seminer mi almak istiyorsunuz?
              </div>
            </div>
          </div>
          <div id="whyWeAre">
            <h1 className="title">Neden Varız?</h1>
            <p className="intro">
              Biz rekabete karşıyız. Bizce rekabet sadece sporda vardır. İş
              hayatında rekabet edip rakibe benzeyerek aynılaşmak yerine yeni
              bir kulvar açarak farklılaşmaya, liderlik etmeye inanırız. Biz
              bilgi yüküne karşıyız. Bizce bilginin özüne ulaşmak esastır.
              Bilginin özünü mümkün olan en kısa zamanda vermeye inanırız. Çünkü
              zaman herkes için en kıymetli şeydir. Bu inançla yazar,
              paylaşırız, eğitim, seminer, danışmanlık verir, yol gösteririz.
              Işıkören Danışmanlık olarak biz yaptıklarımıza inanır ve
              inandıklarımızı da severiz.
            </p>
          </div>
          <div id="team">
            <h1 className="title">Ekibimiz</h1>
            <div id="members">
              <div className="member">
                <div className="picture" />
                <h2 className="name">Hilmi Işıkören</h2>
                <div className="bio">
                  29 yıllık tecrübesiyle gıda, teknoloji, gayrimenkul gibi
                  birçok alanda pek çok şirketin markalaşma süreçlerine liderlik
                  eden Hilmi Işıkören Işıkören Danışmanlık şirketinin kurucu
                  ortağıdır.
                </div>
              </div>
              <div className="member">
                <div className="picture" />
                <h2 className="name">Belgin Benek</h2>
                <div className="bio">
                  Işıkören Danışmanlık şirketinin kurucu ortağı Belgin Benek,
                  iletişim ve pazarlama konusunda uzmanlığının yanı sıra
                  yetişkin eğitimcisi olarak da mesleki yetkinliğe sahiptir.
                </div>
              </div>
            </div>
          </div>
          <div id="references">
            <h1 className="title">Kimlerle Çalıştık?</h1>
            <div className="list">
              <div className="reference" />
              <div className="reference" />
              <div className="reference" />
              <div className="reference" />
              <div className="reference" />
              <div className="reference" />
              <div className="reference" />
              <div className="reference" />
              <div className="reference" />
              <div className="reference" />
              <div className="reference" />
              <div className="reference" />
              <div className="reference" />
              <div className="reference" />
            </div>
          </div>
          <div id="galery">
            <h1 className="title">Galeri</h1>
            <div className="list">
              <div className="photo" />
              <div className="photo" />
              <div className="photo" />
              <div className="photo" />
              <div className="photo" />
              <div className="photo" />
              <div className="photo" />
              <div className="photo" />
            </div>
          </div>
          <div id="footer">
            <div className="address">
              <h3>Işıkören Danışmanlık</h3>
            </div>
            <div className="social-media" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
