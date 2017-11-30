import './style.css';

import logo from './images/logo.png';

import smallThumb1 from './images/small-thumb-1.jpg';
import smallThumb2 from './images/small-thumb-2.jpg';
import smallThumb3 from './images/small-thumb-3.jpg';

import newsThumb1 from './images/news-thumb-1.jpg';
import newsThumb2 from './images/news-thumb-2.jpg';
import newsThumb3 from './images/news-thumb-3.jpg';
import newsThumb4 from './images/news-thumb-4.jpg';

import Gallery from '../../components/Gallery';
import UpcomingEvents from '../../components/UpcomingEvents';

const React = require('react');

function Home(props) {
  return (
    <div className="site-content">
        <header className="site-header">
            <div className="container">
                <a href="#" className="branding">
                    <img src={logo} alt="" className="logo" style={{width: '4rem'}} />
                    <h1 className="site-title">Buen Samaritano</h1>
                </a>
            </div>
        </header>

        <Gallery />

        <main className="main-content">
            <div className="fullwidth-block">
                <div className="container">
                    <h2 className="section-title">Recent news</h2>

                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="news">
                                <img className="news-image" src={newsThumb1} />
                                <h3 className="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
                                <small className="date"><i className="fa fa-calendar"></i>24 mar 2014</small>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="news">
                                <img className="news-image" src={newsThumb2} />
                                <h3 className="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
                                <small className="date"><i className="fa fa-calendar"></i>24 mar 2014</small>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="news">
                                <img className="news-image" src={newsThumb3} />
                                <h3 className="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
                                <small className="date"><i className="fa fa-calendar"></i>24 mar 2014</small>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="news">
                                <img className="news-image" src={newsThumb4} />
                                <h3 className="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
                                <small className="date"><i className="fa fa-calendar"></i>24 mar 2014</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fullwidth-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <UpcomingEvents />
                        </div>
                        <div className="col-md-12">
                            <h2 className="section-title">Latest seremons</h2>
                            <ul className="seremon-list">
                                <li>
                                    <img src={smallThumb1} alt=""/>
                                    <div className="seremon-detail">
                                        <h3 className="seremon-title"><a href="#">I believe in god with all my heart</a></h3>
                                        <div className="seremon-meta">
                                            <div className="pastor"><i className="fa fa-user"></i> Alan Ray</div>
                                            <div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src={smallThumb2} alt=""/>
                                    <div className="seremon-detail">
                                        <h3 className="seremon-title"><a href="#">Trusting in jesus and god</a></h3>
                                        <div className="seremon-meta">
                                            <div className="pastor"><i className="fa fa-user"></i> David Clark</div>
                                            <div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src={smallThumb3} alt=""/>
                                    <div className="seremon-detail">
                                        <h3 className="seremon-title"><a href="#">Love your kids</a></h3>
                                        <div className="seremon-meta">
                                            <div className="pastor"><i className="fa fa-user"></i> anthony roberts</div>
                                            <div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div className="text-center">
                                <a href="#" className="button">See all seremons</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="widget">
                            <h3 className="widget-title">Our address</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi perspiciatis magnam, ab ipsa laboriosam tempore tenetur, aliquid repellat, ex cum dicta reiciendis accusamus. Omnis repudiandae quasi mollitia, iusto odio dignissimos.</p>
                            <ul className="address">
                                <li><i className="fa fa-map-marker"></i> 329 Church St, Garland, TX 75042</li>
                                <li><i className="fa fa-phone"></i> (425) 853 442 552</li>
                                <li><i className="fa fa-envelope"></i> info@yourchurch.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="widget">
                            <h3 className="widget-title">Topics from last meeting</h3>
                            <ul className="bullet">
                                <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="#">Consectetur adipisicing elit quis nostrud</a></li>
                                <li><a href="#">Eiusmod tempor incididunt ut labore et dolore magna</a></li>
                                <li><a href="#">Ut enim ad minim veniam cillum</a></li>
                                <li><a href="#">Exercitation ullamco laboris nisi ut aliquip</a></li>
                                <li><a href="#">Duis aute irure dolor in reprehenderit in voluptate</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="widget">
                            <h3 className="widget-title">Contact form</h3>
                            <form action="#" className="contact-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Your name..."/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Email..."/>
                                    </div>
                                </div>

                                <textarea name="" placeholder="Your message..."></textarea>
                                <div className="text-right">
                                    <input type="submit" value="Send message"/>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

                <p className="colophon">Copyright 2014 True Church. All right reserved</p>
            </div>
        </footer>
  </div>
  )
}

export default Home;