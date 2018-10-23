import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Service extends Component {
  render() {
    return (
      <div>
      <Header />
      <div id="service">
        <div className="media" />
        <div className="heading">
          <div className="back-line" />
          <h2 className="name">Emlakta Lider Geliştirme Programı</h2>
        </div>
        <div className="container">
          <p className="intro">
            Emlak ofisi sahibi ya da emlak danışmanı olarak her türlü bilgi,
            uygulama, iletişim, satış ve pazarlama stratejilerine hakim olup
            emlakta bölgenizin lideri olacaksınız.
          </p>
          <ul className="content list">
            <h3 className="title">İçerik</h3>
            <li className="item">
              <p className="name">
                Bakış açısını emlakta liderlik için konumlamak,
              </p>
            </li>
            <li className="item">
              <p className="name">
                Alıcılarla çalışmayı lidere yakışır şekilde yönetmek,
              </p>
            </li>
            <li className="item">
              <p className="name">
                Markanızı bölge liderliği üzerine doğru konumlandırmak,
              </p>
            </li>
            <li className="item">
              <p className="name">
                Tabela, ilan, reklam konularında lider tanıtımlar yapmanın
                sırlarını öğrenmek,
              </p>
            </li>
            <li className="item">
              <p className="name">
                Hedeflerinizi bölge liderliği için bilimsel yöntemlerle yeniden
                planlamak,
              </p>
            </li>
            <li className="item">
              <p className="name">
                Emlakta müşterileri ikna etme sanatını öğrenerek liderliğe
                ulaşmak,
              </p>
            </li>
            <li className="item">
              <p className="name">
                Danışmanların müşterilerine liderlik etmesi, ofis sahiplerinin
                danışmanlara liderlik etmesi üzerine stratejiler geliştirmek,
              </p>
            </li>
            <li className="item">
              <p className="name">
                Emlakta satışları katlamanın 13 yolunu öğrenerek liderliğe
                yükselmek,
              </p>
            </li>
            <li className="item">
              <p className="name">
                Sosyal medyayı emlakta bölge liderliği için yeniden
                yapılandırmak,
              </p>
            </li>
            <li className="item">
              <p className="name">
                Emlakta telefonda etkili iletişim biçimlerini öğrenerek
                liderliğe uzanmak,
              </p>
            </li>
            <li className="item">
              <p className="name">
                Emlakta bölge çalışmasını liderlik üzerine kurgulamak,
              </p>
            </li>
            <li className="item">
              <p className="name">
                Emlakta güven yaratarak satış açmanın yollarını öğrenerek
                liderliğe yürümek,
              </p>
            </li>
            <li className="item">
              <p className="name">
                Portföyler üzerine değer tuvali çalışmasıyla birinci el, proje
                ve ikinci el emlak satışlarında bölgenin lideri olmak,
              </p>
            </li>
            <li className="item">
              <p className="name">
                Emlakta satış kapatmanın sırlarını öğrenerek bölgenizin lideri
                olmak,
              </p>
            </li>
          </ul>
          <ul className="requirements list">
            <div>
              <h3 className="title">Katılım Şartları</h3>
              <div className="filter flex">
                <p>Kurumsal</p>
                <p>Bireysel</p>
              </div>
            </div>
            <li className="item">
              Programın katılımı 25 ile sınırlıdır. Bir emlak ofisinin bu
              sayının üzerinde katılımcısı olması durumunda yeni bir program
              açılır ve ayrıca ücretlendirilir.
            </li>
            <li className="item">
              36 saatlik program hafta içi bir gün, günde 3 saat olmak üzere
              ayda bir günden 1 yıla yayılmaktadır. Ancak emlak ofisi sahibi
              olarak programı daha yoğun hale getirebilir, daha kısa sürede
              bitirebilirsiniz. Örneğin haftada bir gün 3 saat alınırsa, ayda 12
              saatten 3 ayda programı tamamlamak mümkün olabilir.
            </li>
            <li className="item">
              Emlak ofisinizin Ticaret Odasına ya da Emlak Odasına kayıtlı
              olması gereklidir.
            </li>
            <li className="item">
              Emlak ofisi sahibi olarak sizin Emlakta Lider Geliştirme Programı
              sözleşmesini imzalayarak toplam 36’ı saate katılacağınızı taahhüt
              etmeniz ve yarım bıraktığınız takdirde kalan saatlerin bedelini
              ödemeyi kabul etmeniz gereklidir.
            </li>
            <li className="item">
              Emlakta Lider Geliştirme Programı rekabete duyarlıdır. Programa
              katılan bir emlak ofisi 36 saatlik programı tamamlayıncaya dek
              ofisinin bulunduğu yerden 1 km yarıçaplı daire içerisinde başka
              bir emlak ofisine aynı programın verilmeyeceği tarafımızdan
              sözleşmede taahhüt edilir, aksi durumda programın bedeli kadar
              cezai yaptırım kabul edilir.
            </li>
            <li className="item">
              Emlakta Lider Geliştirme Programı’na katılan katılımcılara
              bölgesinde lider olmaya hak kazandığının nişanesi olarak Işıkören
              Danışmanlık onaylı katılım belgesi verilir. Katılım belgesi olan
              lider ofis ve danışmanlar Işıkören Danışmanlığın ya da
              kendilerinin geliştirdiği bireysel ve kurumsal portföylerden
              paylaşım yapabilecekleri bir networkün içinde yer alırlar.
            </li>
          </ul>
          <button className="apply">Kayıt ol</button>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default Service;
