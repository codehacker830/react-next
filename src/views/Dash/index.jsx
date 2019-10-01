import React from 'react';
import ReactDOM from 'react-dom';

//import components
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Card from './components/Card';
import LatestNews from './components/latestnews';
import JackPot from './components/jackpot';
import FeatureGames from './components/featuregames';

//import images
import bg_img from '../../assets/images/bg_img.jpg';
import card1 from '../../assets/images/card1.jpg';
import card2 from '../../assets/images/card2.jpg';
import card3 from '../../assets/images/card3.jpg';
import card4 from '../../assets/images/card4.jpg';

class Dash extends React.Component {
    render() {
        return (
            <>
            <div>
                <Header/>
                    <div className="main-container">
                        <section className="section carousel">
                            <div className="container-fluid">
                                <img src={bg_img} alt="Home" className="mx-auto d-block"/>
                            </div>
                        </section>
                        <section className="section featured-products">
                            <div className="container">
                                <ul  className="row cards">
                                    <li className="col-3">
                                        <Card source={card1}>sporstbook</Card>
                                    </li>
                                    <li className="col-3">
                                        <Card source={card2}>PROMOTIONS</Card>
                                    </li>
                                    <li className="col-3">
                                        <Card source={card3}>SLOT GAMES</Card>
                                    </li>
                                    <li className="col-3">
                                        <Card source={card4}>LIVE CASINO</Card>
                                    </li>
                                </ul>
                            </div>
                        </section>    
                        <JackPot/>
                        <LatestNews/>
                        <FeatureGames/>
                    </div>     
                <Footer/>
            </div>
            <style jsx>{`
* {
    font-family: "Microsoft YaHei",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    font-size: 14px;
    line-height: 1.42857;
}
.main-container {
    background-color: #041A35;
    padding-bottom: 30px;
    
}
.container {
    width: 1230px;
    max-width: none !important;
}

.carousel {
    margin:0;
    background-color: #012248;
    position: relative;
}

.featured-products {
	margin-top: -248px;
    background-color: #041A35;
}

.featured-products .cards {
	margin: 0 -15px;
	padding: 0;
	list-style: none
}

.featured-products .cards li:hover,
.featured-products .cards li:focus,
.featured-products .cards li:active,
{
	border-color: transparent;
	background-color: transparent;
}

            `}</style>
            </>
        )
    }
}

export default Dash;