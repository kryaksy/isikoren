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
            <div className="content">
              <h3 className="title">Startup projeniz mi var?</h3>
              <p className="snippet">
                Yeni girişimlerin çoğu başarısızlıkla sonuçlanıyor. Farklılaşıp
                öne çıkmak, başarıyla tanışmak istiyorsanız yanınızdayız.
              </p>
            </div>
          </li>
          <li className="list-item">
            {/* Image or video */}
            <div className="media" />
            <div className="content">
              <h3 className="title">
                İnşaat projenizdeki satış ofisiniz için eğitim mi almak
                istiyorsunuz?
              </h3>
              <p className="snippet">
                İnşaat firmalarının proje satış ofislerinde çalışan satış
                ekiplerine özel eğitim ve koçluk programlarımızla yanınızdayız.
              </p>
            </div>
          </li>
          <li className="list-item">
            {/* Image or video */}
            <div className="media" />
            <div className="content">
              <h3 className="title">Markalaşmak mı istiyorsunuz?</h3>
              <p className="snippet">
                İsminizi marka yapmak, sadık müşterilerden oluşan güvenilir bir
                marka olmak istiyorsanız yanınızdayız.
              </p>
            </div>
          </li>
          <li className="list-item">
            {/* Image or video */}
            <div className="media" />
            <div className="content">
              <h3 className="title">
                İnşaat firmanız için danışmanlık mı almak istiyorsunuz?
              </h3>
              <p className="snippet">
                İnşaat firmanızın gayrimenkul projelerini satışa açmadan önce
                profesyonel stratejik iletişim, markalaşma, pazarlama ve satış
                danışmanlığı hizmeti almak isterseniz yanınızdayız.
              </p>
            </div>
          </li>
          <li className="list-item">
            {/* Image or video */}
            <div className="media" />
            <div className="content">
              <h3 className="title">
                Emlak ofisiniz için eğitim mi almak istiyorsunuz?
              </h3>
              <p className="snippet">
                Emlak ofislerinize özel motivasyon temelli eğitim programlarımız
                ile yanınızdayız.
              </p>
            </div>
          </li>
          <li className="list-item">
            {/* Image or video */}
            <div className="media" />
            <div className="content">
              <h3 className="title">
                Motivasyon üzerine seminer mi almak istiyorsunuz?
              </h3>
              <p className="snippet">
                Şirket için motivasyon, başarı için yüreklendirici, ekibinize
                ilham veren konuşmalar, seminerler için yanınızdayız.
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default WhatWeDo;
