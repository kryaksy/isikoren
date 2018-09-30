import React, { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import photo from "../assets/images/galery.jpeg";
import referenceImage from "../assets/images/reference.png";
import hilmiPhoto from "../assets/images/hilmi-isikoren.jpeg";
import belginPhoto from "../assets/images/belgin-benek.jpeg";
import arrowDown from "../assets/icons/arrow-down-solid.svg";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleScrollDown = () => {
    window.scrollTo({
      top: 530,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <div className="App-container">
        <Header />
        <div>
          <div className="scroll-down-icon" onClick={this.handleScrollDown}>
            <img src={arrowDown} width="20" alt="scroll-down button" />
          </div>
          <p className="scroll-down-text">Aşağı Kaydır</p>
        </div>
        <div id="whatWeDo">
          <h1 className="title">Neler Yaparız?</h1>
          <p className="intro">
            1997’den beri süregelen emlak sektörü tecrübemizle ülke genelindeki
            birçok noktada emlak taleplerini sağlıklı değerlendirmek üzere
            çalışmalar yapmaktayız. Bu konuda çok büyük bir profesyonel networke
            sahibiz. Alıcıları ve satıcıları doğru portföyle buluşturmak için
            binlerce çalışandan oluşan emlak uzmanlarıyla entegre olarak mümkün
            olan en kısa sürede sonuca ulaşırız.
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
            hayatında rekabet edip rakibe benzeyerek aynılaşmak yerine yeni bir
            kulvar açarak farklılaşmaya, liderlik etmeye inanırız. Biz bilgi
            yüküne karşıyız. Bizce bilginin özüne ulaşmak esastır. Bilginin
            özünü mümkün olan en kısa zamanda vermeye inanırız. Çünkü zaman
            herkes için en kıymetli şeydir. Bu inançla yazar, paylaşırız,
            eğitim, seminer, danışmanlık verir, yol gösteririz. Işıkören
            Danışmanlık olarak biz yaptıklarımıza inanır ve inandıklarımızı da
            severiz.
          </p>
        </div>
        <div id="team">
          <h1 className="title">Ekibimiz</h1>
          <div id="members">
            <div className="member">
              <div className="picture">
                <img src={hilmiPhoto} width="200px" alt="century21 logo" />
              </div>
              <h2 className="name">Hilmi Işıkören</h2>
              <div className="bio">
                29 yıllık tecrübesiyle gıda, teknoloji, gayrimenkul gibi birçok
                alanda pek çok şirketin markalaşma süreçlerine liderlik eden
                Hilmi Işıkören Işıkören Danışmanlık şirketinin kurucu ortağıdır.
              </div>
            </div>
            <div className="member">
              <div className="picture">
                <img src={belginPhoto} width="200px" alt="century21 logo" />
              </div>
              <h2 className="name">Belgin Benek</h2>
              <div className="bio">
                Işıkören Danışmanlık şirketinin kurucu ortağı Belgin Benek,
                iletişim ve pazarlama konusunda uzmanlığının yanı sıra yetişkin
                eğitimcisi olarak da mesleki yetkinliğe sahiptir.
              </div>
            </div>
          </div>
        </div>
        <div id="references">
          <h1 className="title">Kimlerle Çalıştık?</h1>
          <div className="list">
            <div className="reference">
              <img src={referenceImage} height="50px" alt="century21 logo" />
            </div>
            <div className="reference">
              <img src={referenceImage} height="50px" alt="century21 logo" />
            </div>
            <div className="reference">
              <img src={referenceImage} height="50px" alt="century21 logo" />
            </div>
            <div className="reference">
              <img src={referenceImage} height="50px" alt="century21 logo" />
            </div>
            <div className="reference">
              <img src={referenceImage} height="50px" alt="century21 logo" />
            </div>
            <div className="reference">
              <img src={referenceImage} height="50px" alt="century21 logo" />
            </div>
            <div className="reference">
              <img src={referenceImage} height="50px" alt="century21 logo" />
            </div>
            <div className="reference">
              <img src={referenceImage} height="50px" alt="century21 logo" />
            </div>
            <div className="reference">
              <img src={referenceImage} height="50px" alt="century21 logo" />
            </div>
            <div className="reference">
              <img src={referenceImage} height="50px" alt="century21 logo" />
            </div>
            <div className="reference">
              <img src={referenceImage} height="50px" alt="century21 logo" />
            </div>
            <div className="reference">
              <img src={referenceImage} height="50px" alt="century21 logo" />
            </div>
          </div>
        </div>
        <div id="galery">
          <h1 className="title">Galeri</h1>
          <div className="list">
            <div className="photo">
              <img src={photo} width="300px" alt="fotograf" />
            </div>
            <div className="photo">
              <img src={photo} width="300px" alt="fotograf" />
            </div>
            <div className="photo">
              <img src={photo} width="300px" alt="fotograf" />
            </div>
            <div className="photo">
              <img src={photo} width="300px" alt="fotograf" />
            </div>
            <div className="photo">
              <img src={photo} width="300px" alt="fotograf" />
            </div>
            <div className="photo">
              <img src={photo} width="300px" alt="fotograf" />
            </div>
            <div className="photo">
              <img src={photo} width="300px" alt="fotograf" />
            </div>
            <div className="photo">
              <img src={photo} width="300px" alt="fotograf" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
