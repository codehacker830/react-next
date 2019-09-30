import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Head from 'next/head';
//import components
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';

//import image

import placeholder656_250 from '../../assets/images/placeholer656_250.png';
// import placeholer1441_500 from '../../assets/images/casino_bg.png';
import placeholer1441_500 from '../../assets/images/placeholer1441_500.png';
import BS from '../../assets/images/slots/BS_slots.jpg';
import GPI from '../../assets/images/slots/GPI_slots.jpg';
import GS from '../../assets/images/slots/GS_slots.jpg';
import ISB from '../../assets/images/slots/ISB_slots.jpg';
import MG from '../../assets/images/slots/MG_slots.jpg';
import PNG from '../../assets/images/slots/PNG_slots.jpg';
import PP from '../../assets/images/slots/PP_slots.jpg';
import PT from '../../assets/images/slots/PT_slots.jpg';
import QT from '../../assets/images/slots/QT_slots.jpg';
import TTG from '../../assets/images/slots/TTG_slots.jpg';
import UCB from '../../assets/images/slots/UCB_slots.jpg';
import placeholer296_194 from '../../assets/images/placeholer296_194.png';

placeholer296_194


class SlotsPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="main-container"> 
                    <section className="section"> 
                        <div className="hero slick-initialized slick-slider">
                            <div className="slick-list draggable" style={{backgroundColor:'#012248'}}>
                                <div className="slick-track" style = {{opacity: '1', width: '1400px',margin:'auto'}} >
                                    <div className="slick-slide slick-current slick-active" aria-hidden="false">
                                        <div className="hero-slide item" style={{width: '100%', display: 'inline-block'}}>  
                                            <img src={placeholer1441_500} alt="Live Casino" style={{display: 'block'}}/>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </section>  
                    <section className="section marquee-section">
                        <div className="container-fluid">
                            <div className="marquee-label"> Latest News: </div>
                            <div className="marquee-wrapper">
                                <ul className="marquee">
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="section container">
                        <ul className="row cards">
                            <li className="col-md-3">

                            <a href="/slots" target="_self" className="card" style={{}}>
                                <span className="card-img-wrapper">
                                <img className="card-img" src={PT} alt=""/>
                                </span>
                                <span className="card-footer card-img-overlay">
                                <span className="game-title">PT Slots</span>
                                </span>
                            </a>
                            </li>
                            <li className="col-md-3">
                            <a href="/slots" target="_self" className="card">
                                <span className="card-img-wrapper">
                                <img className="card-img" src={MG} alt=""/>
                                </span>
                                <span className="card-footer card-img-overlay">
                                <span className="game-title">MG Slots</span>
                                </span>
                            </a>
                            </li>
                            <li className="col-md-3">
                            <a href="/slots" target="_self" className="card">
                                <span className="card-img-wrapper">
                                <img className="card-img" src={PNG} alt="" />
                                </span>
                                <span className="card-footer card-img-overlay">
                                <span className="game-title">PNG Slots</span>
                                </span>
                            </a>
                            </li>
                            <li className="col-md-3">
                            <a href="/slots" target="_self" className="card">
                                <span className="card-img-wrapper">
                                <img className="card-img" src={GPI} alt="" />
                                </span>
                                <span className="card-footer card-img-overlay">
                                <span className="game-title">GPI Slots</span>
                                </span>
                            </a>
                            </li>

                            <li className="col-md-3">
                            <a href="/slots" target="_self" className="card">
                                <span className="card-img-wrapper">
                                <img className="card-img" src={TTG} alt="" />
                                </span>
                                <span className="card-footer card-img-overlay">
                                <span className="game-title">TTG Slots</span>
                                </span>
                            </a>
                            </li>
							
                            <li className="col-md-3">
                            <a href="/slots" target="_self" className="card">
                                <span className="card-img-wrapper">
                                <img className="card-img" src={ISB} alt="" />
                                </span>
                                <span className="card-footer card-img-overlay">
                                <span className="game-title">ISB Slots</span>
                                </span>
                            </a>
                            </li>
							
                            <li className="col-md-3">
                            <a href="/slots" target="_self" className="card">
                                <span className="card-img-wrapper">
                                <img className="card-img" src={BS} alt="" />
                                </span>
                                <span className="card-footer card-img-overlay">
                                <span className="game-title">BS Slots</span>
                                </span>
                            </a>
                            </li>
							
                            <li className="col-md-3">
                            <a href="/slots" target="_self" className="card">
                                <span className="card-img-wrapper">
                                <img className="card-img" src={GS} alt="" />
                                </span>
                                <span className="card-footer card-img-overlay">
                                <span className="game-title">GS Slots</span>
                                </span>
                            </a>
                            </li>
							
                            <li className="col-md-3">
                            <a href="/slots" target="_self" className="card">
                                <span className="card-img-wrapper">
                                <img className="card-img" src={QT} alt="" />
                                </span>
                                <span className="card-footer card-img-overlay">
                                <span className="game-title">QT Slots</span>
                                </span>
                            </a>
                            </li>
							
                            <li className="col-md-3">
                            <a href="/slots" target="_self" className="card">
                                <span className="card-img-wrapper">
                                <img className="card-img" src={UCB} alt="" />
                                </span>
                                <span className="card-footer card-img-overlay">
                                <span className="game-title">UCB Slots</span>
                                </span>
                            </a>
                            </li>
							
                            <li className="col-md-3">
                            <a href="/slots" target="_self" className="card">
                                <span className="card-img-wrapper">
                                <img className="card-img" src={PP} alt="" />
                                </span>
                                <span className="card-footer card-img-overlay">
                                <span className="game-title">PP Slots</span>
                                </span>
                            </a>
                            </li>
							
                            <li className="col-md-3">
                            <a href="/slots" target="_self" className="card">
                                <span className="card-img-wrapper">
                                <img className="card-img" src={placeholer296_194} alt="" />
                                </span>
                                <span className="card-footer card-img-overlay">
                                <span className="game-title">Netent Slots</span>
                                </span>
                            </a>
                            </li>

                        </ul>
                    </section>
                </div>
<style jsx>{`
* {
    font-family: "Microsoft YaHei", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 14px;
	line-height: 1.42857;
	color: #fff;
}

.main-container {
    background-color: #041A35
}
.container {
	margin-right: auto;
	margin-left: auto;
	padding-left: 15px;
	padding-right: 15px
}

.container:before,
.container:after {
	content: " ";
	display: table
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

ul.cards {
	margin-bottom: 0;
	margin: 0, -15px;
	list-style: none
}
ul.cards li:hover, 
ul.cards li:focus,
ul.cards li:active  {
	background-color:#041A35;
}
.cards:before,
.cards:after {
	content: " ";
	display: table
}

.cards:after {
	clear: both
}

.cards .card {
	margin-bottom: 30px
}

.card {
	display: block;
	position: relative;
	background-color: #23324E;
	border: 0;
	border-radius: 4px
}

.card,
.card h1,
.card h2,
.card h3,
.card h4,
.card h5,
.card h6 {
	color: #fff
}

.card-img-wrapper{
	display: block;
	overflow: hidden;
	position: relative;
	background-color: #23324E;
	border-radius: 4px
}

.card-img-overlay {
	position: absolute;
	z-index: 3;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 6px 12px
}

.card-img-overlay,
.card-img-overlay h1,
.card-img-overlay h2,
.card-img-overlay h3,
.card-img-overlay h4,
.card-img-overlay h5,
.card-img-overlay h6 {
	color: #fff
}

.card .card-img {
	position: relative;
	-webkit-transition: 0.3s;
	-o-transition: 0.3s;
	transition: 0.3s;
	display: block;
	max-width: 100%;
	height: auto;
	-webkit-backface-visibility: hidden
}


 .marquee-section {
	margin-bottom: 30px
}

 .card {
	background-color: #041A35
}

 .card-img {
	opacity: .6;
	filter: alpha(opacity=60)
}

 .card-footer {
	opacity: 1;
	filter: alpha(opacity=100);
	padding: 6px 12px
}

 .game-title {
	font-size: 16px
}

 .card:hover .card-img-wrapper:before,
 .card:hover .card-img-wrapper-top:before,
 .card:hover .card-img-wrapper-bottom:before,
 .card:focus .card-img-wrapper:before,
 .card:focus .card-img-wrapper-top:before,
 .card:focus .card-img-wrapper-bottom:before {
	display: none
}

 .card:hover .card-img,
 .card:focus .card-img {
	opacity: 1;
	filter: alpha(opacity=100);
	-webkit-filter: blur(0);
	-moz-filter: blur(0);
	filter: blur(0);
	-webkit-transform: scale(1);
	-moz-transform: scale(1);
	transform: scale(1)
}

.card .card-footer {
	border-top: 0;
	position: relative;
	padding: 12px;
	-webkit-transition: box-shadow 0.3s;
	-o-transition: box-shadow 0.3s;
	transition: box-shadow 0.3s
}

.card .card-footer.card-img-overlay {
	text-align: center;
	top: auto;
	z-index: 4;
	position: absolute;
	-webkit-transition: 0.3s;
	-o-transition: 0.3s;
	transition: 0.3s;
	background-color: rgba(4, 26, 53, 0.8)
}
.game-title {
	font-size: 16px;
    color:white;
}
ul.row,
ol.row {
	margin-bottom: 0;
	margin-left:-15px;
	padding-left: 0;
	list-style: none
}
h3{
    font-weight: 300;
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
    line-height: 1.1;
}

.marquee-section {
	overflow: hidden;
	color: #fff;
	padding: 0 !important;
	height: 40px;
	border: 1px solid #094484;
	background-color: #062448;
	border-radius: 4px;
	margin-top: 10px;
	margin-bottom: 30px;	
	margin-right: auto;
	margin-left: auto;
	padding-left: 15px;
	padding-right: 15px
}

.marquee-section:before,
.marquee-section:after {
	content: " ";
	display: table
}

.marquee-section:after {
	clear: both
}

@media (min-width: 768px) {
	.marquee-section {
		width: 750px
	}
}

@media (min-width: 992px) {
	.marquee-section {
		width: 1230px
	}
}

@media (min-width: 1200px) {
	.marquee-section {
		width: 1230px
	}
}

.marquee-section .marquee-label,
.marquee-section .marquee-wrapper {
	position: relative;
	vertical-align: top;
	height: 40px;
	line-height: 40px
}

.marquee-section>.container {
	position: relative
}

.marquee-section .marquee-label {
	float: left;
	margin-right: 10px;
	width: 110px;
	color: #FFCB01;
	text-transform: uppercase;
	font-size: 14px
}

.marquee-section .marquee-wrapper {
	float: left;
	cursor: pointer;
	width: calc(100% - 120px)
}

.marquee-section .marquee-wrapper>.marquee {
	margin: 0;
	padding: 0
}

.marquee-section .marquee-wrapper>.marquee li {
	margin-right: 30px
}

.marquee-section .marquee {
	padding-left: 0;
	list-style: none;
	margin-left: -5px
}

.marquee-section .marquee>li {
	display: inline-block;
	padding-left: 5px;
	padding-right: 5px;
	line-height: 40px;
	-webkit-transition: color 0.3s;
	-o-transition: color 0.3s;
	transition: color 0.3s
}

.marquee-section .marquee:hover * {
	color: #fff
}

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
	.marquee {
		white-space: normal
	}
}

@supports (-ms-accelerator: true) {
	.marquee {
		white-space: normal
	}
}
.carousel {
	position: relative
}

.carousel {
	background-color: #012248
}

.carousel .hero {
	margin: 0;
	padding: 0;
	width: 100% !important;
	min-height: 500px;
	overflow-x: hidden
}

.carousel .hero .item img {
	height: auto;
	margin-left: 50%;
	-webkit-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	transform: translateX(-50%)
}

.carousel .slick-dots {
	bottom: 45px
}

.carousel .slick-dots li {
	padding: 5px;
	line-height: 1
}

.carousel .slick-dots li button {
	cursor: pointer;
	border-radius: 0;
	width: 60px;
	height: 8px;
	background: none rgba(255, 255, 255, 0.3)
}

   `}</style>
                <Footer/>
            </div>
        )
    }
}

export default SlotsPage;