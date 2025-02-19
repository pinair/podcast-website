import * as React from 'react';
import flvjs from 'flv.js';
import hlsjs from 'hls.js';
import 'mediaelement';

// Import stylesheet and shims
import 'mediaelement/build/mediaelementplayer.min.css';
import './MediaElement.css';
import 'mediaelement/build/mediaelement-flash-video.swf';


export default class MediaElement extends React.Component<any, {player: any | null,}> {

    something: any| null = null;
    state = {player: this.something }

    success(media: any, node: any, instance: any) {
        // Your action when media was successfully loaded
    }

    error(media: any) {
        // Your action when media had an error loading
    }

    render() {

        const props = this.props;
        const sources = props.sources;
        const tracks = props.tracks;
        const sourceTags = [];
        const tracksTags = [];

        for (let i = 0, total = sources.length; i < total; i++) {
            const source = sources[i];
            sourceTags.push(`<source src="${source.src}" type="${source.type}">`);
        }

        for (let i = 0, total = tracks.length; i < total; i++) {
            const track = tracks[i];
            tracksTags.push(`<track src="${track.src}" kind="${track.kind}" srclang="${track.lang}"${(track.label ? ` label=${track.label}` : '')}>`);
        }

        const mediaBody = `${sourceTags.join("\n")}
				${tracksTags.join("\n")}`;
        const mediaHtml = props.mediaType === 'video' ?
                `<video id="${props.id}" width="${props.width}" height="${props.height}"${(props.poster ? ` poster=${props.poster}` : '')}
					${(props.controls ? ' controls' : '')}${(props.preload ? ` preload="${props.preload}"` : '')}>
					${mediaBody}
				</video>` :
                `<audio id="${props.id}" width="${props.width}" controls>
					${mediaBody}
				</audio>`
        ;

        return (<div dangerouslySetInnerHTML={{__html: mediaHtml}} className="container"></div>);

    }

    componentDidMount() {

        const globalAny: any = global;
        const windowAny: any = window;
        const MediaElementPlayer = globalAny.MediaElementPlayer;

        if (!MediaElementPlayer) {
            return;
        }

        const options = Object.assign({}, this.props.options, {
            // Read the Notes below for more explanation about how to set up the path for shims
            // pluginPath: './static/media/',
            success: (media: any, node: any, instance: any) => this.success(media, node, instance),
            error: (media: any, node: any) => this.error(media)
        });

        windowAny.flvjs = flvjs;
        windowAny.Hls = hlsjs;
        this.setState({player: new MediaElementPlayer(this.props.id, options)});
    }

    componentWillUnmount() {
        if (this.state.player != null) {
            this.state.player!.remove();
            this.setState({player: null});
        }
    }
}