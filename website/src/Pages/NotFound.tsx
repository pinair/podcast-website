
import * as React from 'react';
import {RouteComponentProps} from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export interface NotFoundProps {
    route: RouteComponentProps;
}

export interface NotFoundState {

}


class NotFound extends React.Component<NotFoundProps, NotFoundState> {

    constructor(props: NotFoundProps) {
        super(props);
    }


    redirectToHome = () => {
        this.props.route.history.push(`/`);
    };

    render() {
        const route = this.props.route;

        return [

            <Header route={route}/>,



            <main id="main" className="main">

            <section className="page-error" style={{backgroundImage: 'url(assets/img/error-background.jpg)'}}>
                <div className="page-error-inner">
                    <div className="container">

                        {/*{<!-- ===== PAGE HEADER CONTENT ===== -->}*/}
                        <div className="page-error-content text-center">
                            <h2>Page not Found</h2>
                            <p className="mb-40">The page you are looking for doesn't exist. <br /> Don't worry... It happens to the best of us.</p>
                            <a onClick={()=>this.redirectToHome()} className="btn btn-info">Back to home</a>
                        </div>

                    </div>
                </div>
            </section>

        </main>,

        <Footer/>

    ];
    }
}

export default NotFound