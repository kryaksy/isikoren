import React, { Component } from "react";
import Footer from "./Footer.js";
import aboutImage from "../assets/images/about.jpeg";

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App-about">
        <h1 className="title">Hakkımızda</h1>
        <div className="image">
          <img src={aboutImage} width="960" height="958"  alt="hilmi isikoren ve belgin benek" />
        </div>
        <div className="mission">
          <p className="intro">
            Işıkören Danışmanlık, 27 yılı aşkın profesyonel iş kariyerinde gıda
            ve bilişim sektörlerinin yanı sıra, uluslararası üç gayrimenkul
            markasındaki 14 yıllık üst düzey yöneticilik tecrübesiyle iş
            dünyasının önde gelen ismi Hilmi Işıkören ile 15 yıllık profesyonel
            iş kariyerinde iletişim ve pazarlama alanlarındaki uzmanlığı ve üst
            düzey yöneticilik deneyimiyle bilinen Belgin Benek tarafından 2010
            yılında kurulmuştur.
          </p>
          <p className="intro">
            Hayata olumlu bakan, gerçekçi iyimser kimliğimiz ve mutlu ruh
            halimizin avantajlarını cebimize koyarak 2010 yılında yola çıktık.
            Düşüncelerimize duygularımızı katarak eyleme geçtik. Bir nedenimiz
            vardı. Bildiğimiz, inandığımız ve sevdiğimiz şeyleri yaparsak mutlu
            kalacaktık. Mutluluk halimiz müşterilerimize, dostlarımıza ve
            çevremizdeki insanlara da yansıyacak, onların hayatlarında da olumlu
            değişiklikler yaratabilecektik. İşte bu bizim için başarı demekti.
            Yeteneklerimiz ve uzmanlıklarımız doğrultusunda insanlara yol
            göstermeyi, bilgilerimizi paylaşarak onlarla birlikte çoğalmayı,
            daha fazla öğrenmeyi, öğrendikçe değişmeyi, değiştikçe gelişmeyi
            hedefledik.
          </p>
          <p className="intro">
            İnsanlara bahşedilen yeteneklerin iş hayatında kullanılması durumda
            başarıya gitmenin kolaylaştığına inanıyoruz. Ayrıca Jack Trout’un
            dediği gibi ‘farklılaşmazsan ölürsün’ anlayışına da gönülden
            bağlıyız. Bu sebeple iş hayatında 30 yıla yakın tecrübemizden
            aldığımız dersleri, kazandığımız ödülleri, edindiğimiz başarıları
            yetenek ve uzmanlıklarımızla harmanlayarak oluşturduğumuz doğruları
            programlar haline getirdik. Programlarımız paylaşıldıkça çoğalacak,
            kullanıldıkça faydayı arttıracak, başarı yükselecek ve mutluluk
            hissedilecek.
          </p>
          <p className="intro">
            Gayrimenkul alım ve satım kararlarının riske atılmayacak kadar
            önemli girişimler olduğunu bilmekteyiz. Ehil kişilerle gerçekleşen
            emlak alışverişleri hem oturum hem de yatırım amaçlı kararları
            alırken hayati önem taşır. Ayrıca böyle ehil kişilerin sizin
            çıkarınız doğrultusunda bir uzman tarafından seçilmesi ve sürecin
            onunla yönetilmesi çok daha sağlıklı olmaktadır. İşte tam bu devrede
            bizim uzmanlığımız devreye girer.
          </p>
        </div>
        <div className="vision">
          <div className="bussiness">
            <h2 className="title">Ana işimiz:</h2>
            <p className="intro">
              Sektör ayrımı yapmaksızın işinde başarılı olmak isteyen
              şirketleri, kurumları ve hatta bireyleri farklılaştırarak öne
              çıkarmak amacıyla danışmanlık, eğitim ve seminerler veririz.
            </p>
          </div>
          <div className="focus">
            <h2 className="title">Odak konumuz:</h2>
            <p className="intro">
              Müşterilerimizin mevcut iş modellerini sorgulayarak yeni modeller
              geliştirmeleri konusunda onlara ilham verir, hayata geçirmelerine
              yardımcı olur, yol gösteririz. Müşterilerimizle birlikte
              inovasyonu esas alarak performans arttırmak ve rekabet gücünü
              yenilemek konusunda programlı bir çalışma yürütürüz.
            </p>
          </div>
          <div className="challenge">
            <h2 className="title">Meydan okuduklarımız:</h2>
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
