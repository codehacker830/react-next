import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
//import components
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';

//import image

import placeholder656_250 from '../../assets/images/placeholer656_250.png';
// import placeholer1441_500 from '../../assets/images/casino_bg.png';
import placeholer1441_500 from '../../assets/images/placeholer1441_500.png';

class LiveCasino extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="main-container"> 
                    <section className="section carousel"> 
                    <div className="container">
                        <div className="hero slick-initialized slick-slider">
                                <div className="slick-list draggable">
                                    <div className="slick-track" style = {{opacity: '1', width: '1400px'}} >
                                        <div className="slick-slide slick-current slick-active" aria-hidden="false" style={{width: '1400px', position: 'relative', left: '0px', top: '0px', opacity: '1'}}>
                                            <div className="hero-slide item" style={{width: '100%', display: 'inline-block'}}>  
                                                <img src={placeholer1441_500} alt="Live Casino" style={{display: 'block'}}/>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </section>  
                    <section className="section marquee-section"> 
                        <div className="container">  
                            <div className="marquee-label"> Latest News: </div> 
                            <div className="marquee-wrapper"> 
                                <ul className="marquee">  
                                </ul> 
                            </div> 
                        </div>
                    </section>
                    <section className="casino-section">
                        <div className="casino-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5 content-left">
                                        <h3>Gameplay Interactive</h3>
                                        <p>Lorem ipsum dolor sit amet, semper laoreet enim, faucibus maiores et. A turpis a</p>
                                        <Link href="/live-casino"><a data-hook="launch-if-auth" className="btn btn-primary">Play Now</a></Link>
                                    </div>
                                    <div className="col-md-7">
                                        <img src={placeholder656_250} className="img-right"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="casino-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <img src={placeholder656_250} className="img-left"/>
                                    </div>
                                    <div className="col-md-5 content-right">
                                        <h3>PT Live Casino</h3>
                                        <p>Lorem ipsum dolor sit amet, semper laoreet enim, faucibus maiores et. A turpis a</p>
                                        <Link href="/live-casino"><a data-hook="launch-if-auth" className="btn btn-primary">Play Now</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="casino-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5 content-left">
                                        <h3>GPI Classic</h3>
                                        <p>Lorem ipsum dolor sit amet, semper laoreet enim, faucibus maiores et. A turpis a</p>
                                        <Link href="/live-casino"><a data-hook="launch-if-auth" className="btn btn-primary">Play Now</a></Link>
                                    </div>
                                    <div className="col-md-7">
                                                <img src={placeholder656_250} className="img-right"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>  
                </div>
<style jsx>{`
.hero .item img {
    height: auto;
    margin-left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    transform: translateX(-50%);
}
.main-container{
    background-color: #041A35
}
.container {
	margin-right: auto;
	margin-left: auto;
	padding-left: 15px;
	padding-right: 15px
}

.container:after {
	clear: both
}

@media (min-width: 768px) {
	.container {
		width: 750px
	}
}

@media (min-width: 992px) {
	.container {
		width: 1230px
	}
}

@media (min-width: 1200px) {
	.container {
		width: 1230px
	}
}
.container {
	width: 1230px;
	max-width: none !important
}


    `}</style>
                <Footer/>
            </div>
        )
    }
}

export default LiveCasino;