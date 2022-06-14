import React from 'react';
import './Home.css';

import RouteCard from '../components/home/RouteCard';

class Home extends React.Component {

    render() {

        
        const routeList = [
            {
                id: 0,
                name: 'West 3',
                distance: '5km',
                totalPoints: 15,
                completedPoints: 12,
                imgUrl: 'img/west3.jpg'
            },
            {
                id: 1,
                name: 'Noord 1',
                distance: '3km',
                totalPoints: 10,
                completedPoints: 0,
                imgUrl: 'img/noord1.jpg'
            },
        ];
    

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

                        {routeList.map( route => 
                            <RouteCard key={route.id} route={route}/>
                        )}
                        
                    </section>
                </article>
            </main>
        )
    }
}

export default Home;