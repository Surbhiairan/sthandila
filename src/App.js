import React from 'react';
import AOS from 'aos'; 

import '../node_modules/aos/dist/aos.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/fontawesone/all.css';
import './App.css';

import logo from './assets/images/logo.png';
import bannerlogo from './assets/images/bannerlogo.png';
import reallyfast from './assets/images/reallyfast.svg';
import refreshinglysimple from './assets/images/refreshinglysimple.svg';
import remarkablyaffordable from './assets/images/remarkablyaffordable.svg';
import meet from './assets/images/meet.svg';
import whoWeAre from './assets/images/whoweare.svg';
import vision from './assets/images/vision.svg';
import technology from './assets/images/technology.svg';
import insights_img1 from './assets/images/insights_img1.jpg';
import insights_img2 from './assets/images/insights_img2.jpg';
import insights_img3 from './assets/images/insights_img3.jpg';
import dataImg1 from './assets/images/dataimg1.png';
import dataImg2 from './assets/images/dataimg2.png';
import dataImg3 from './assets/images/dataimg3.png';

import classNames from 'classnames';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
      this.setState({scroll: window.scrollY});
  }
  
  componentDidMount() {
    AOS.init();
    const el = document.querySelector('nav');
    this.setState({top: el.offsetTop, height: el.offsetHeight});
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentDidUpdate() {
    this.state.scroll > this.state.top ? 
        document.body.style.paddingTop = `${this.state.height}px` :
        document.body.style.paddingTop = 0;
}
         
    // var t = $(".navbar-sticky");
    //  $(window).on("scroll load", function() {
    //     var e = $(window).scrollTop();
    //     120 <= e ? t.addClass("navbar-sticky--moved-up") : t.removeClass("navbar-sticky--moved-up")
    //     250 <= e ? t.addClass("navbar-sticky--transitioned") : t.removeClass("navbar-sticky--transitioned")
    //     500 <= e ? t.addClass("navbar-sticky--on") : t.removeClass("navbar-sticky--on")
    // })
    render() {
      console.log('this. state---', this.state, 'window----', window.scrollY)
      let navbar = classNames({
        "navbar": true,
        "navbar-sticky--moved-up": 120 <= this.state.scroll ? true : false,
        "navbar-sticky--transitioned": 250 <= this.state.scroll ? true : false,
        "navbar-sticky--on": 500 <= this.state.scroll ? true : false,
        "sticky-bg-color--darkblue": true,
        "navbar-expand-lg": true,
        "navbar-dark": true
      })

      return (
        <main className="main" style={{fontFamily: 'Poppins, sans-serif'}}>
            <header id="nav" className={navbar}>
                <div className="container position-relative" style={{display: 'flex'}}>
                    <a className="navbar-brand" href="index.html">
                        <img className="navbar-brand__regular" src={logo} alt="brand-logo"/>
                        <img className="navbar-brand__sticky" src={logo} alt="sticky brand-logo"/>
                    </a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="navbar-inner ml-lg-auto" id="navbarSupportedContent" style={{lineHeight: 2.5}}>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-close"></span>
                        </button>
                        <nav>
                            <ul className="navbar-nav" id="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#insights">Insights</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#products">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="requestBtn" style={{lineHeight: 3.5}}>
                        <a href="#" className="btn">
                            <span className="btn__text d-flex align-items-center"> Request Demo </span>
                        </a>
                    </div>
                </div>
            </header>
    
            
    
            <div className="slider__warpper" id="home">
              <div className="slider-container flex--pikachu flex--active" data-slide="1">
                <div className="flex__item flex__item--left">
                  <div className="slider-content container">
                    <h1>Welcome to sthandila</h1>
                    <p className="slider-text">Unlocking the Power of DATA for enterprise by REPLICATION & DE-IDENTIFICATION in Real Time</p>
                    <a href="#" className="btn btn-border mr-3 active">
                        Learn More
                    </a>
                    <a href="#" className="btn btn-border mr-3">
                        Products 
                    </a>
                  </div>
                </div>
                <div className="flex__item slider-right"></div>
                <img className="slider-img" src={bannerlogo} alt=""/>
              </div>
              <div className="slider-container flex--piplup animate--start" data-slide="2">
                <div className="flex__item flex__item--left">
                  <div className="slider-content container">
                    <h1>Welcome to sthandila</h1>
                    <p className="slider-text">Unlocking the Power of DATA for enterprise by REPLICATION & DE-IDENTIFICATION in Real Time</p>
                    <a href="#" className="btn btn-border mr-3 active">
                         Learn More
                    </a>
                    <a href="#" className="btn btn-border mr-3">
                         Products
                    </a>
                  </div>
                </div>
                <div className="flex__item slider-right"></div>
                <img className="slider-img" src={bannerlogo} alt=""/>
              </div>      
            </div>
            <div className="slider-nav">
              <a href="#" className="slide-nav active" data-slide="1">pikachu</a>
              <a href="#" className="slide-nav" data-slide="2">piplup</a>
            </div>
    
          <section className="heroBottom" id="about">
            <div className="container">
              <div className="row">
                <div className="col-md-4 heroBottomContentBox text-center" data-aos="fade-up">
                  <img src={reallyfast} alt=""/>
                  <h2>Really fast</h2>
                  <p>Our automated software will mask and replicate the data into other environments in minutes, not days.</p>
                </div>
                <div className="col-md-4 heroBottomContentBox text-center" data-aos="fade-up">
                  <img src={refreshinglysimple} alt=""/>
                  <h2>Refreshingly simple</h2>
                  <p>Plug and Play with minimal development requirement and disruption to current Environment. Business and IT friendly</p>
                </div>
                <div className="col-md-4 heroBottomContentBox text-center" data-aos="fade-up">
                  <img src={remarkablyaffordable} alt=""/>
                  <h2>Remarkably affordable</h2>
                  <p>With SaaS and Daas model we do it for a fraction of the cost of traditional services.</p>
                </div>
              </div>
            </div>
          </section>
    
          <section className="meetSthandila">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 meetSthandilaLeft" data-aos="fade-in">
                  <img className="mb-2" src={meet} alt=""/>
                  <h2 className="mb-2"> Meet Sthandila </h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                </div>
                <div className="col-md-6 meetSthandilaRight text-center">
                  <div className="meetSthandilaRightBox d-flex">
    
                    <div className="meetSthandilaRightBoxFirst d-flex align-items-center float-right" style={{width: "50%"}}>
                      <div className="whoWeAre meetSthandilaBox" data-aos="fade-up-right" style={{width: "100%"}}>
                        <img src={whoWeAre} alt=""/>
                        <h3> &nbsp;&nbsp;Who &nbsp;&nbsp;<br/>> we are </h3>
                      </div>
                    </div>
    
                    <div className="meetSthandilaRightBoxSecond" style={{width: "50%"}}>
                      <div className="visionBox meetSthandilaBox" data-aos="fade-left">
                        <img src={vision} alt=""/>
                        <h3> Vision </h3>
                      </div>
                      <div className="technologyBox meetSthandilaBox" data-aos="fade-up-left">
                        <img src={technology} alt=""/>
                        <h3> Technology </h3>
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="InSightsSection" id="insights">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1>Insights</h1>
                    </div>
                  </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card inSightCard" data-aos="zoom-out-right" style={{width: "18rem"}}>
                      <img className="card-img-top" src={insights_img1} alt="Card cap"/>
                      <div className="card-body">
                        <h5 className="card-title"> Data Explosion </h5>
                        <p className="card-text">According to IDC Research, digital data will grow at a compounded annual  growth  rate (CAGR) of 42% through 2020. ...                    </p>
                        <div className="text-center">
                          <a href="#" className="btn btn-primary"> Read More </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card inSightCard" data-aos="zoom-out-up" style={{width: "18rem"}}>
                      <img className="card-img-top" src={insights_img2} alt="Card cap"/>
                      <div className="card-body">
                        <h5 className="card-title"> Data Strategy </h5>
                        <p className="card-text">Only 1 in 7 enterprise say that they are enjoying the promised benefits of Data.</p>
                        <div className="text-center">
                          <a href="#" className="btn btn-primary"> Read More </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card inSightCard" data-aos="zoom-out-left" style={{width: "18rem"}}>
                      <img className="card-img-top" src={insights_img3} alt="Card cap"/>
                      <div className="card-body">
                        <h5 className="card-title"> Data Decesion </h5>
                        <p className="card-text">63% of the Companies  takes more than 4 weeks to replicate data leading to delay in decision making ...  </p>
                        <div className="text-center">
                          <a href="#" className="btn btn-primary"> Read More </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          
          <section className="RAMSSection" id="products">
            <div className="container">
              <div className="row mt-50 align-items-center pt-4 pb-4">
                <div className="col-md-6 col-lg-6 RAMSContent dataContentBox" data-aos="fade-in">
                  <h3> RAMS - 9 </h3>
                  <h2> Data Seamlessly </h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                    or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
                    anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                    making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
                    to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic 
                    words etc.
                  </p>
                </div>
                <div className="col-md-6 col-lg-6 dataContentBox">
                   <img className="w-100" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" src={dataImg1} alt=""/>
                </div>
              </div>
    
              <div className="row mt-50 align-items-center pt-4 pb-4">
                <div className="col-md-6 col-lg-6 dataContentBox">
                  <img className="w-100" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" src={dataImg2} alt=""/>
                </div>
                <div className="col-md-6 col-lg-6 metaMaskContent dataContentBox" data-aos="fade-in">
                  <h3> RAMS - 9 </h3>
                  <h2> Data Seamlessly </h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                    or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
                    anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                    making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
                    to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic 
                    words etc.
                  </p>
                </div>
              </div>
    
              <div className="row mt-50 align-items-center pt-4 pb-4">
                <div className="col-md-6 col-lg-6 RAMSContent dataContentBox" data-aos="fade-in">
                  <h3> RAMS - 9 </h3>
                  <h2> Data Seamlessly </h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                    or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
                    anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                    making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
                    to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic 
                    words etc.
                  </p>
                </div>
                <div className="col-md-6 col-lg-6 dataContentBox">
                    <img className="w-100" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" src={dataImg3} alt=""/>
                </div>
              </div>
            </div>
          </section>
    
          <footer id="contact">
            <div className="container">
              <div className="row top-footer">
                <div className="col-lg-4 text-center" data-aos="fade-up">
                  <div className="footer-box">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <div className="footer-btn">
                      <a href="#" className="btn moreBtn btn-border rounded--full btn-hover--3d btn-hover--splash">
                          <span className="btn__text"> info@sthandila.com </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center" data-aos="fade-up">
                  <div className="footer-box bor-right bor-left">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <div className="footer-btn">
                      <a href="#" className="btn moreBtn btn-border rounded--full btn-hover--3d btn-hover--splash">
                          <span className="btn__text"> 415-259-4865 </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center" data-aos="fade-up">
                  <div className="footer-box">
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    <div className="footer-btn">
                      <a href="#" className="btn btn-border rounded--full btn-hover--3d btn-hover--splash">
                          <span className="btn__text"> Request Demo </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row footer-social" data-aos="fade-in">
                <div className="col-lg-6">
                  <img className="footer-logo" src={logo} alt=""/>
                </div>
                <div className="col-lg-6 footer-social-icon">
                  <div>
                    <a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                    <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <section className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <ul className="footer-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Insights</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <p> &#9400;2019 by Sthandila</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      );
    }
  
}

export default App;
