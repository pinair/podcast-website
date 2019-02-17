
import * as React from 'react';

export interface FooterState {
}

export interface FooterProps {

}

class Footer extends React.Component<FooterProps, FooterState> {

    render() {
        return <footer className="footer">
            {/*{<!-- ===== FOOTER CONTENT INFORMATION ===== -->}*/}
            <section className="section-positive">
                <div className="container">

                    <div className="row mt-70 mb-30">

                        {/*{<!-- ===== SITEMAP ===== -->}*/}
                        <div className="col-sm-3 mb-40">
                            <h2 className="title-separator white">Sitemap</h2>
                            <ul className="footer-list">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="podcasts.html">Podcasts</a></li>
                                <li><a href="single-page.html">Pages</a></li>
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>

                        {/*{<!-- ===== PODCASTS EPISODES ===== -->}*/}
                        <div className="col-sm-3 mb-40">
                            <h2 className="title-separator white">Lastest Episodes</h2>
                            <ul className="footer-complement">
                                <li>
                                    <a href="podcast.html">#08 - Our vacations have been so amazing!</a>
                                    <span>December 22, 2015</span>
                                </li>
                                <li>
                                    <a href="podcast-soundcloud.html">#07 - Podcast embed from SoundCloud</a>
                                    <span>December 21, 2015</span>
                                </li>
                            </ul>
                        </div>

                        {/*{<!-- ===== PODCASTS EPISODES ===== -->}*/}
                        <div className="col-sm-3 mb-40">
                            <h2 className="title-separator white">Who is helping?</h2>
                            <ul className="footer-complement">
                                <li>
                                    <a href="#">@reidarking</a>
                                    <span>Donation - U$ 10</span>
                                </li>
                                <li>
                                    <a href="#">@reidarking</a>
                                    <span>Donation - U$ 5</span>
                                </li>
                                <li>
                                    <a href="#">@reidarking</a>
                                    <span>Donation - U$ 50</span>
                                </li>
                            </ul>
                        </div>

                        {/*{<!-- ===== SOCIAL CONNECTION ===== -->}*/}
                        <div className="col-sm-3 mb-40">
                            <h2 className="title-separator white">We are social</h2>
                            <ul className="social-list">
                                <li className="social-item"><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li className="social-item"><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li className="social-item"><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                <li className="social-item"><a href="#" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                <li className="social-item"><a href="#" target="_blank"><i className="fa fa-soundcloud"></i></a></li>
                                <li className="social-item"><a href="#" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                                <li className="social-item"><a href="#" target="_blank"><i className="fa fa-youtube"></i></a></li>
                                <li className="social-item"><a href="#" target="_blank"><i className="fa fa-spotify"></i></a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </section>

            {/*{<!-- ===== FOOTER INFORMATION ===== -->}*/}
            <section className="footer-credits">
                <div className="container">

                    <div className="row">

                        {/*{<!-- ===== CREDIT LOGO ===== -->}*/}
                        <div className="col-sm-6 footer-logo">
                            <h2><a href="index.html"><img src="assets/img/logo.png" alt="Soudcast - Podcast Responsive Theme" title="Soundcast - Podcast Responsive Theme" /></a></h2>
                        </div>

                        {/*{<!-- ===== CREDIT LOGO ===== -->}*/}
                        <div className="col-sm-6 text-right">
                            Polleg - 2019. All rights reserved.
                        </div>

                    </div>

                </div>
            </section>

        </footer>
    }
}

export default Footer;