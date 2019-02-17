import * as React from 'react';
import MediaElement from 'src/Utils/MediaElement';


export interface BigLastState {
}

export interface BigLastProps {

}

class BigLast extends React.Component<BigLastProps, BigLastState> {
    render() {
        //<!-- ===== LASTEST PODCAST (HERO) ===== -->
         return <section className="podcast-hero" style={{backgroundImage: 'url(assets/img/podcast-hero.jpg)'}}>
            <div className="podcast-hero-inner">
                {/*{<!-- ===== PODCAST INFO ===== -->}*/}
                <div className="container">
                    <div className="podcast-hero-content">
                        <span className="podcast-hero-date">December 22, 2015</span>
                        <h2 className="podcast-hero-title"><a href="podcast.html">Episode #08 - Our vacations have been so amazing!</a></h2>
                        <ul className="podcast-hero-meta">
                            <li className="item"><a href="#" className="podcast-hero-tag" rel="tag">Lifestyle</a></li>
                            <li className="item"><i className="fa fa-clock-o"></i> 45 mins.</li>
                            <li className="item"><a href="#" className="podcast-hero-download"><i className="fa fa-download"></i> Download</a></li>
                        </ul>
                    </div>
                </div>

                {/*{<!-- ===== PODCAST PLAYER ===== -->}*/}
                <div className="podcast-hero-player-content">
                    <MediaElement
                        className="container"
                        id="player1"
                        mediaType="audio"
                        preload="none"
                        controls
                        width="auto"
                        height="360"
                        poster=""
                        sources={[
                            {src:"http://localhost:3000/assets/audio/emotional.mp3", type: 'audio/mpeg'},
                        ]}
                        options={{}}
                        tracks={{}}
                    />
                </div>

            </div>
        </section>;
    }
}

export default BigLast;