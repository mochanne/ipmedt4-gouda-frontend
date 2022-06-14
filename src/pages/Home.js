import React from 'react';
import './Home.css';

import RouteCard from '../components/home/RouteCard';

class Home extends React.Component {

    render() {

        
        const routeList = [
            {
                name: 'West 3',
                distance: '5km',
                totalPoints: 15,
                completedPoint: 5
            },
            {
                name: 'Noord 1',
                distance: '3km',
                totalPoints: 10,
                completedPoint: 0
            },
        ];
    

        return(
            <main className='home'>
                <figure className='home__watermark'>
                    <img src="beeldmerk.png" alt="watermark" />
                </figure>
                <header className='home__header'>
                    <figure className='home__header-logo'>
                        <img src="logo.png" alt="logo" />
                    </figure>
                </header>

                <article className='home__content'>
                    <header className='home__content-header'>
                        <h1>Kies een route</h1>
                    </header>
                    <section className='home__routeCardList'>

                        {routeList.map((route) => {
                            return <RouteCard route={route}/>
                        })}
                        
                    </section>
                </article>
            </main>
        )
    }
}

export default Home;