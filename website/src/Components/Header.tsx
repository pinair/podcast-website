
import * as React from 'react';
import {RouteComponentProps} from "react-router";

export interface HeaderState {
}

export interface HeaderProps {
    route: RouteComponentProps;
}

class Header extends React.Component<HeaderProps, HeaderState> {

    redirectTo = (url: string) => {
        this.props.route.history.push(url);
    };

    render() {
        return ([<header className="header absolute" itemScope
                       itemType="http://schema.org/Organization">
            <div className="container">

                {/*{<!-- ===== LOGO ===== -->}*/}
                <h1 className="logo"><a onClick={()=>this.redirectTo('')}>Polleg</a></h1>

                {/*{<!-- ===== NAVIGATION ===== -->}*/}
                <nav className="navigation">
                    {/*{<!-- ===== MENU ===== -->}*/}
                    <ul className="menu">
                        <li className="menuitem active"><a onClick={()=>this.redirectTo('')}>Home</a></li>
                        <li className="menuitem"><a href="podcasts.html">Podcasts</a></li>
                        <li className="menuitem dropdown">
                            <a href="#">Pages</a>
                            <ul className="droplist">
                                <li className="droplist-item"><a href="columns.html">Columns</a>
                                </li>
                                <li className="droplist-item"><a
                                    href="shortcodes.html">Shortcodes</a></li>
                                <li className="droplist-item"><a
                                    href="typography.html">Typography</a></li>
                                <li className="droplist-item"><a href="single-page.html">Single
                                    Page</a></li>
                                <li className="droplist-item"><a href="sticky-header.html">Sticky
                                    Header</a></li>
                                <li className="droplist-item"><a href="static-header.html">Static
                                    Header</a></li>
                                <li className="droplist-item"><a href="404.html">404</a></li>
                            </ul>
                        </li>
                        <li className="menuitem"><a href="about-us.html">About Us</a></li>
                        <li className="menuitem"><a href="contact.html">Contact</a></li>
                    </ul>
                    {/*{<!-- ===== HAMBURGUER ICON ===== -->}*/}
                    <a href="#" className="btn-hamburguer-menu"><i className="fa fa-bars"></i></a>
                </nav>

            </div>
        </header>,
    ])}
}

export default Header;