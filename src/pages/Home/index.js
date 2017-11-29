import './style.css';

import smallThumb1 from './images/small-thumb-1.jpg';
import smallThumb2 from './images/small-thumb-2.jpg';
import smallThumb3 from './images/small-thumb-3.jpg';

import newsThumb1 from './images/news-thumb-1.jpg';
import newsThumb2 from './images/news-thumb-2.jpg';
import newsThumb3 from './images/news-thumb-3.jpg';
import newsThumb4 from './images/news-thumb-4.jpg';

import slide1 from './images/slide-1.jpg';

const React = require('react');

function Home(props) {
  return (
    <div class="site-content">
        <header class="site-header">
            <div class="container">
                <a href="#" class="branding">
                    <img src="images/logo.png" alt="" class="logo" />
                    <h1 class="site-title">True Church</h1>
                </a>

                <div class="main-navigation">
                    <button class="menu-toggle"><i class="fa fa-bars"></i> Menu</button>
                    <ul class="menu">
                        <li class="menu-item current-menu-item"><a href="index.html">Homepage <small>Lorem ipsum</small></a></li>
                        <li class="menu-item"><a href="#">Pastors <small>Cupidatat non proident</small></a></li>
                        <li class="menu-item"><a href="seremons.html">Seremons <small>Laboris nisi aliquip</small></a></li>
                        <li class="menu-item"><a href="events.html">Events <small>Sunt in culpa</small></a></li>
                        <li class="menu-item"><a href="families.html">Families <small>Aute irure</small></a></li>
                        <li class="menu-item"><a href="#">Contact <small>lorem ipsum</small></a></li>
                    </ul>
                </div>

                <div class="mobile-navigation"></div>
            </div>
        </header>

        <div class="hero">
            <div class="slides">
                <li data-bg-image={slide1}>
                    <div class="container">
                        <div class="slide-content">
                            <small class="slide-subtitle">True Church</small>
                            <h2 class="slide-title">Place with a real love</h2>

                            <a href="#" class="button">See our families</a>
                        </div>
                    </div>
                </li>

                <li data-bg-image={slide1}>
                    <div class="container">
                        <div class="slide-content">
                            <small class="slide-subtitle">True Church</small>
                            <h2 class="slide-title">Place with a real love</h2>

                            <a href="#" class="button">See our families</a>
                        </div>
                    </div>
                </li>
            </div>
        </div>

        <main class="main-content">
            <div class="fullwidth-block">
                <div class="container">
                    <h2 class="section-title">Recent news</h2>

                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="news">
                                <image class="news-image" src={newsThumb1}></image>
                                <h3 class="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
                                <small class="date"><i class="fa fa-calendar"></i>24 mar 2014</small>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="news">
                                <image class="news-image" src={newsThumb2}></image>
                                <h3 class="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
                                <small class="date"><i class="fa fa-calendar"></i>24 mar 2014</small>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="news">
                                <image class="news-image" src={newsThumb3}></image>
                                <h3 class="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
                                <small class="date"><i class="fa fa-calendar"></i>24 mar 2014</small>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="news">
                                <image class="news-image" src={newsThumb4}></image>
                                <h3 class="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
                                <small class="date"><i class="fa fa-calendar"></i>24 mar 2014</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fullwidth-block">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h2 class="section-title">Upcoming events</h2>
                            <ul class="event-list">
                                <li>
                                    <a href="#">
                                        <h3 class="event-title">africa mission trip</h3>
                                        <span class="event-meta">
                            <span><i class="fa fa-calendar"></i>30 mar 2014</span>
                                        <span><i class="fa fa-map-marker"></i> Africa</span>

                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h3 class="event-title">Bible school</h3>
                                        <span class="event-meta">
                            <span><i class="fa fa-calendar"></i>30 mar 2014</span>
                                        <span><i class="fa fa-map-marker"></i> Saint paul church</span>

                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h3 class="event-title">praying for kids</h3>
                                        <span class="event-meta">
                            <span><i class="fa fa-calendar"></i>30 mar 2014</span>
                                        <span><i class="fa fa-map-marker"></i> true church</span>

                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h3 class="event-title">love giving</h3>
                                        <span class="event-meta">
                            <span><i class="fa fa-calendar"></i>30 mar 2014</span>
                                        <span><i class="fa fa-map-marker"></i> St cathedral</span>

                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h3 class="event-title">god ont the vacation</h3>
                                        <span class="event-meta">
                            <span><i class="fa fa-calendar"></i>30 mar 2014</span>
                                        <span><i class="fa fa-map-marker"></i> greenie lake</span>

                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h3 class="event-title">homeless helping</h3>
                                        <span class="event-meta">
                            <span><i class="fa fa-calendar"></i>30 mar 2014</span>
                                        <span><i class="fa fa-map-marker"></i> Detroit city</span>

                                        </span>
                                    </a>
                                </li>
                            </ul>

                            <div class="text-center">
                                <a href="#" class="button">See all events</a>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h2 class="section-title">Latest seremons</h2>
                            <ul class="seremon-list">
                                <li>
                                    <img src={smallThumb1} alt=""/>
                                    <div class="seremon-detail">
                                        <h3 class="seremon-title"><a href="#">I believe in god with all my heart</a></h3>
                                        <div class="seremon-meta">
                                            <div class="pastor"><i class="fa fa-user"></i> Alan Ray</div>
                                            <div class="date"><i class="fa fa-calendar"></i> 18 mar 2014</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src={smallThumb2} alt=""/>
                                    <div class="seremon-detail">
                                        <h3 class="seremon-title"><a href="#">Trusting in jesus and god</a></h3>
                                        <div class="seremon-meta">
                                            <div class="pastor"><i class="fa fa-user"></i> David Clark</div>
                                            <div class="date"><i class="fa fa-calendar"></i> 18 mar 2014</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src={smallThumb3} alt=""/>
                                    <div class="seremon-detail">
                                        <h3 class="seremon-title"><a href="#">Love your kids</a></h3>
                                        <div class="seremon-meta">
                                            <div class="pastor"><i class="fa fa-user"></i> anthony roberts</div>
                                            <div class="date"><i class="fa fa-calendar"></i> 18 mar 2014</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div class="text-center">
                                <a href="#" class="button">See all seremons</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="widget">
                            <h3 class="widget-title">Our address</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi perspiciatis magnam, ab ipsa laboriosam tempore tenetur, aliquid repellat, ex cum dicta reiciendis accusamus. Omnis repudiandae quasi mollitia, iusto odio dignissimos.</p>
                            <ul class="address">
                                <li><i class="fa fa-map-marker"></i> 329 Church St, Garland, TX 75042</li>
                                <li><i class="fa fa-phone"></i> (425) 853 442 552</li>
                                <li><i class="fa fa-envelope"></i> info@yourchurch.com</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="widget">
                            <h3 class="widget-title">Topics from last meeting</h3>
                            <ul class="bullet">
                                <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="#">Consectetur adipisicing elit quis nostrud</a></li>
                                <li><a href="#">Eiusmod tempor incididunt ut labore et dolore magna</a></li>
                                <li><a href="#">Ut enim ad minim veniam cillum</a></li>
                                <li><a href="#">Exercitation ullamco laboris nisi ut aliquip</a></li>
                                <li><a href="#">Duis aute irure dolor in reprehenderit in voluptate</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="widget">
                            <h3 class="widget-title">Contact form</h3>
                            <form action="#" class="contact-form">
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" placeholder="Your name..."/>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" placeholder="Email..."/>
                                    </div>
                                </div>

                                <textarea name="" placeholder="Your message..."></textarea>
                                <div class="text-right">
                                    <input type="submit" value="Send message"/>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

                <p class="colophon">Copyright 2014 True Church. All right reserved</p>
            </div>
        </footer>
  </div>
  )
}

export default Home;