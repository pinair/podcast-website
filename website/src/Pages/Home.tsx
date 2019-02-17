
import * as React from 'react';
import BigLast from "../Components/BigLast";
import Header from "../Components/Header";
import {RouteComponentProps} from "react-router";
import Footer from "../Components/Footer";
import Authors from "../Components/Authors";

export interface HomeState {
}

export interface HomeProps {
    route: RouteComponentProps;
}

class Home extends React.Component<HomeProps, HomeState> {

    render() {
        const route = this.props.route;

        return [

            <Header route={route}/>,

            <BigLast />,











            <main id="main" className="main">

                {/*{<!-- ===== PODCAST LIST ===== -->}*/}
                <section id="#episodes" className="section-positive">
                    <div className="container">

                        {/*{<!-- ===== SECTION TITLE ===== -->}*/}
                        <h2 className="title-default">Another Episodes</h2>

                        <div className="row">

                            {/*{<!-- ===== PODCAST CARD FULL ===== -->}*/}
                            <div className="col-sm-12 mb-40">
                                <div className="podcast-card full">
                                    <figure className="podcast-image"><a
                                        href="podcast-soundcloud.html"><img
                                        src="assets/img/cards/podcast-full-thumb.jpg" alt="Seattle"
                                        title="Seattle"/></a></figure>
                                    <div className="podcast-content">
                                        <span className="podcast-date">December 21, 2015</span>
                                        <h2 className="podcast-title"><a
                                            href="podcast-soundcloud.html">Episode #07 - Podcast
                                            embed from SoundCloud</a></h2>
                                        <p className="podcast-excerpt"><a
                                            href="podcast-soundcloud.html">This is a full card
                                            example, porro culpa minus ipsam a accusantium,
                                            cupiditate expedita accusamus, perspiciatis magni
                                            aliquid cumque facilis rerum eius. Ipsum facilis iste
                                            repudiandae ducimus accusamus...</a></p>
                                        <ul className="podcast-meta">
                                            <li className="item"><a href="#" className="podcast-tag"
                                                                    rel="tag">Lifestyle</a></li>
                                            <li className="item"><i
                                                className="fa fa-clock-o"></i> 37 mins.
                                            </li>
                                            <li className="item"><a href="podcast-soundcloud.html"
                                                                    className="podcast-play"><i
                                                className="fa fa-play"></i> Play Episode</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/*{<!-- ===== PODCAST CARD BOXED ===== -->}*/}
                            <div className="col-sm-6 mb-40">
                                <div className="podcast-card boxed">
                                    <figure className="podcast-image"><a
                                        href="podcast-video.html"><img
                                        src="assets/img/cards/podcast-boxed-thumb.jpg" alt="Biking"
                                        title="Biking"/></a></figure>
                                    <div className="podcast-content">
                                        <span className="podcast-date">December 19, 2015</span>
                                        <h2 className="podcast-title"><a href="podcast-video.html">Episode
                                            #06 - You can also post a video</a></h2>
                                        <p className="podcast-excerpt"><a href="podcast-video.html">This
                                            is a boxed podcast layout. Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit...</a></p>
                                        <ul className="podcast-meta">
                                            <li className="item"><a href="#" className="podcast-tag"
                                                                    rel="tag">Lifehacks</a></li>
                                            <li className="item"><i
                                                className="fa fa-clock-o"></i> 51 mins.
                                            </li>
                                            <li className="item"><a href="podcast-video.html"
                                                                    className="podcast-play"><i
                                                className="fa fa-play"></i> Play Episode</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/*{<!-- ===== PODCAST CARD BOXED ===== -->}*/}
                            <div className="col-sm-6 mb-40">
                                <div className="podcast-card boxed">
                                    <figure className="podcast-image"><a href="podcast.html"><img
                                        src="assets/img/cards/podcast-boxed-thumb2.jpg"
                                        alt="Photography" title="Photography"/></a></figure>
                                    <div className="podcast-content">
                                        <span className="podcast-date">December 12, 2015</span>
                                        <h2 className="podcast-title"><a href="podcast.html">Episode
                                            #05 - What I learned from photography</a></h2>
                                        <p className="podcast-excerpt"><a href="podcast.html">This
                                            is a boxed podcast layout. Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit...</a></p>
                                        <ul className="podcast-meta">
                                            <li className="item"><a href="#" className="podcast-tag"
                                                                    rel="tag">Lifehacks</a></li>
                                            <li className="item"><i
                                                className="fa fa-clock-o"></i> 29 mins.
                                            </li>
                                            <li className="item"><a href="podcast.html"
                                                                    className="podcast-play"><i
                                                className="fa fa-play"></i> Play Episode</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/*{<!-- ===== PODCAST CARD BOXED ===== -->}*/}
                            <div className="col-sm-6 mb-40">
                                <div className="podcast-card boxed">
                                    <figure className="podcast-image"><a href="podcast.html"><img
                                        src="assets/img/cards/podcast-boxed-thumb3.jpg" alt="Soccer"
                                        title="Soccer"/></a></figure>
                                    <div className="podcast-content">
                                        <span className="podcast-date">December 9, 2015</span>
                                        <h2 className="podcast-title"><a href="podcast.html">Episode
                                            #04 - How we decide to play soccer</a></h2>
                                        <p className="podcast-excerpt"><a href="podcast.html">This
                                            is a boxed podcast layout. Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit...</a></p>
                                        <ul className="podcast-meta">
                                            <li className="item"><a href="#" className="podcast-tag"
                                                                    rel="tag">Sports</a></li>
                                            <li className="item"><i
                                                className="fa fa-clock-o"></i> 40 mins.
                                            </li>
                                            <li className="item"><a href="podcast.html"
                                                                    className="podcast-play"><i
                                                className="fa fa-play"></i> Play Episode</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/*{<!-- ===== PODCAST CARD BOXED ===== -->}*/}
                            <div className="col-sm-6 mb-40">
                                <div className="podcast-card boxed">
                                    <figure className="podcast-image"><a href="podcast.html"><img
                                        src="assets/img/cards/podcast-boxed-thumb4.jpg"
                                        alt="Music Show" title="Music Show"/></a></figure>
                                    <div className="podcast-content">
                                        <span className="podcast-date">November 27, 2015</span>
                                        <h2 className="podcast-title"><a href="podcast.html">Episode
                                            #03 - The best show of our lifes</a></h2>
                                        <p className="podcast-excerpt"><a href="podcast.html">This
                                            is a boxed podcast layout. Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit...</a></p>
                                        <ul className="podcast-meta">
                                            <li className="item"><a href="#" className="podcast-tag"
                                                                    rel="tag">Lifestyle</a></li>
                                            <li className="item"><i
                                                className="fa fa-clock-o"></i> 18 mins.
                                            </li>
                                            <li className="item"><a href="podcast.html"
                                                                    className="podcast-play"><i
                                                className="fa fa-play"></i> Play Episode</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/*{<!-- ===== CHECK MORE ===== -->}*/}
                            <div className="col-sm-12 mb-50">
                                <a href="podcasts.html"
                                   className="btn btn-primary btn-block btn-lg">View more
                                    episodes</a>
                            </div>

                        </div>

                    </div>
                </section>

                <Authors route={route} />

                {/*{<!-- ===== NEWSLETTER ===== -->}*/}
                <section className="section-positive text-center">
                    <div className="container">

                        {/*{<!-- ===== SECTION TITLE ===== -->}*/}
                        <h2 className="title-default">Never miss an episode</h2>
                        <p className="section-description">Form with MailChimp ready, just change
                            the action! Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. <br/> Vel modi rem laudantium, alias minus temporibus nihil
                            reiciendis vero.</p>

                        {/*{<!-- ===== FORM NEWSLETTER ===== -->}*/}
                        <form
                            action="//myaccount.us10.list-manage.com/subscribe/post?u=599a4d2b746f06b367c5f8085&amp;id=f429f2b2f5"
                            method="POST" target="_blank" className="form-newsletter validate">
                            <fieldset className="row">
                                <div className="col-md-9 nopadding">
                                    <input type="email" name="EMAIL"
                                           className="form-control form-negative"
                                           id="email-newsletter" placeholder="Your email" required/>
                                </div>
                                <div className="col-md-3 nopadding">
                                    <button className="btn btn-success btn-lg btn-block"
                                            type="submit"><i className="fa fa-paper-plane"></i>
                                    </button>
                                </div>
                            </fieldset>
                        </form>

                    </div>
                </section>

                {/*{<!-- ===== DONATE ===== -->}*/}
                <section id="donate" className="section-highlight text-center">
                    <div className="container">

                        {/*{<!-- ===== SECTION TITLE ===== -->}*/}
                        <h2 className="title-default">We need your help</h2>
                        <p className="section-description">Help us support the show! Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit. <br/> Vel modi rem
                            laudantium, alias minus temporibus nihil reiciendis vero.</p>

                        {/*{<!-- ===== DONATE VALUES ===== -->}*/}
                        <div className="row mb-50">

                            <div className="col-lg-3 col-sm-6 mb-20">
                                <a href="#" className="btn btn-default btn-round btn-lg btn-block">U$
                                    5</a>
                            </div>

                            <div className="col-lg-3 col-sm-6 mb-20">
                                <a href="#" className="btn btn-default btn-round btn-lg btn-block">U$
                                    10</a>
                            </div>

                            <div className="col-lg-3 col-sm-6 mb-20">
                                <a href="#" className="btn btn-default btn-round btn-lg btn-block">U$
                                    25</a>
                            </div>

                            <div className="col-lg-3 col-sm-6 mb-20">
                                <a href="#" className="btn btn-default btn-round btn-lg btn-block">U$
                                    50</a>
                            </div>

                        </div>

                    </div>
                </section>

            </main>,

            <Footer/>
        ]
    }
}

export default Home;