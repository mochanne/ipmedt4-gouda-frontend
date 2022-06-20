import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Home.css';
import RouteCard from '../components/home/RouteCard';

class Home extends React.Component {

    state = {
        routes: [],
        completed: 0
    }

    componentDidMount() {
        axios.get("http://lillibot.co.uk:8080/api/routelist")
        .then(res => {
            const routes = res.data;
            this.setState({ routes })
        })
    }

    render() {

        return(
            <main className='home'>
                <figure className='home__watermark'>
                    <img src="img/beeldmerk.png" alt="watermark" />
                </figure>
                <header className='home__header'>
                    <figure className='home__header-logo'>
                        <img src="img/logo.png" alt="logo" />
                    </figure>
                </header>

                <article className='home__content'>
                    <header className='home__content-header'>
                        <h1>Kies een route</h1>
                    </header>
                    <section className='home__routeCardList'>

                        {this.state.routes.map( route => 
                            
                            <Link to='/map' key={route.id} state={route}>
                                <RouteCard route={route} completed={this.state.completed}/>
                            </Link>

                        )}
                        
                    </section>
                </article>
            </main>
        )
    }
}

export default Home;