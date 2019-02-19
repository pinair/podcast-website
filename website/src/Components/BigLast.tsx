import * as React from 'react';
import MediaElement from 'src/Utils/MediaElement';


export interface BigLastState {
    blob: Blob | null;
}

export interface BigLastProps {

}

export interface Blob {
    id: number,
    number: number,
    title: string,
    description: string,
    date: Date,
    contentLength: number,
    blog: string,
    videoSrc: string,
    audioSrc: string,
    backgroundImage: string
}

class BigLast extends React.Component<BigLastProps, BigLastState> {

    constructor(props: BigLastProps) {
        super(props);
        this.state = {
            blob: null
        };
    }

    componentDidMount = async () => {
        const res = await (await fetch(`http://localhost:3001/api/v1/blob/last`)).json();
        const blob: Blob = {
            id: res.id,
            number: res.number as number,
            title: res.title,
            description: res.description,
            date: res.date as Date,
            contentLength: res.content_length as number,
            blog: res.blog,
            videoSrc: res.video_src,
            audioSrc: res.audio_src,
            backgroundImage: res.background_image,
        };
        console.log(res);
        this.setState({blob})
    };


    showBlob = (blob: Blob) => {
        return <section className="podcast-hero"
                        style={{backgroundImage: `url(http://localhost:3000/${blob.backgroundImage})`}}>


            <div className="podcast-hero-inner">
                {/*{<!-- ===== PODCAST INFO ===== -->}*/}
                <div className="container">
                    <div className="podcast-hero-content">
                        <span className="podcast-hero-date">{blob.date}</span>
                        <h2 className="podcast-hero-title"><a href="podcast.html">Episode #{blob.number} - {blob.title}</a></h2>
                        <ul className="podcast-hero-meta">
                            <li className="item"><a href="#" className="podcast-hero-tag"
                                                    rel="tag">Lifestyle</a></li>
                            <li className="item"><i className="fa fa-clock-o"></i> {blob.contentLength/60} mins.</li>
                            <li className="item"><a href={blob.audioSrc}
                                                    className="podcast-hero-download"><i
                                className="fa fa-download"></i> Download</a></li>
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
                            {
                                src: `http://localhost:3000/${blob.audioSrc}`,
                                type: 'audio/mpeg'
                            },
                        ]}
                        options={{}}
                        tracks={{}}
                    />
                </div>

            </div>
        </section>
    };

    render() {

        const blob = this.state.blob;

        return blob? this.showBlob(blob) : "";
    }
}

    export
    default
    BigLast;