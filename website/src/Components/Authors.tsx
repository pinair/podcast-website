
import * as React from 'react';
import {RouteComponentProps} from "react-router";


export interface AuthorsProps {
    route: RouteComponentProps;
}

export interface AuthorsState {
    authors: Author[];
}

export interface Author {
    id: number,
    name: string,
    surname: string,
    description: string,
    pic: string,
    facebook: string,
    instagram: string,
    twitter: string,
    linkedin: string,
    reddit: string,
    active: boolean
}

class Authors extends React.Component<AuthorsProps, AuthorsState> {

    constructor(props: AuthorsProps){
        super(props);

        this.state = {
            authors: [],
        };
    }

    componentDidMount = async() => {
        const authors = await (await fetch(`http://localhost:3001/api/v1/authors`)).json();
        this.setState({authors})
    };

    render () {
        return <section id="about-us" className="section-negative">
            <div className="container">

                {/*{<!-- ===== SECTION TITLE ===== -->}*/}
                <h2 className="title-default text-center">Behind the mic...</h2>

                <div className="row mb-30">

                    {/*{<!-- ===== TEAM CARD ===== -->}*/}


                    {this.state.authors.map(author => {
                        //     id: number,
                        //     name: string,
                        //     surname: string,
                        //     description: string,
                        //     pic: string,
                        //     facebook: string,
                        //     instagram: string,
                        //     twitter: string,
                        //     linkedin: string,
                        //     reddit: string,
                        //     active: boolean
                        return <div
                            key={author.id}
                            className="col-lg-4 col-lg-offset-0 col-md-8 col-md-offset-2 col-sm-12 mb-40">
                            <div className="team-card">
                                <figure className="team-card-image"><img
                                    src={author.pic} alt={`${author.name} ${author.surname}`} title={`${author.name} ${author.surname}`} />
                                </figure>
                                <div className="team-card-content">
                                    <h2 className="team-card-title">{`${author.name} ${author.surname}`}</h2>
                                    <p className="team-card-job">{author.description}</p>
                                    <p className="team-card-description">Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Placeat itaque optio minus
                                        perferendis tempora, libero in fugiat, quisquam molestiae.</p>
                                    <ul className="team-card-social">
                                        {author.facebook && <li className="social-item"><a href={author.facebook} target="_blank"><i
                                            className="fa fa-facebook"></i></a></li> }
                                        {author.instagram && <li className="social-item"><a href={author.instagram} target="_blank"><i
                                            className="fa fa-instagram"></i></a></li>}
                                        {author.twitter && <li className="social-item"><a href={author.twitter} target="_blank"><i
                                            className="fa fa-twitter"></i></a></li>}
                                        {author.linkedin && <li className="social-item"><a href={author.linkedin} target="_blank"><i
                                            className="fa fa-linkedin"></i></a></li>}
                                        {author.reddit && <li className="social-item"><a href={author.reddit} target="_blank"><i
                                            className="fa fa-reddit"></i></a></li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    }
}

export default Authors;