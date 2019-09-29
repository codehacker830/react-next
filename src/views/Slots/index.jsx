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
                            <div className="slick-list draggable" style={{backgroundColor:'#041A34'}}>
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
                    <section class="section container">
                        <ul class="row cards">
                            <li class="col-md-3">
                            <a href="/slots/pt" target="_self" class="card_box">
                                <span class="card-img-wrapper">
                                <img class="card-img" src={PT} alt=""/>
                                </span>
                                <span class="card-footer card-img-overlay">
                                <span class="game-title">PT Slots</span>
                                </span>
                            </a>
                            </li>
                            <li class="col-md-3">
                            <a href="/slots/mgs" target="_self" class="">
                                <span class="card-img-wrapper">
                                <img class="card-img" src={MG} alt=""/>
                                </span>
                                <span class="card-footer card-img-overlay">
                                <span class="game-title">MG Slots</span>
                                </span>
                            </a>
                            </li>
                            <li class="col-md-3">
                            <a href="/slots/png" target="_self" class="card_box">
                                <span class="card-img-wrapper">
                                <img class="card-img" src={PNG} alt="" />
                                </span>
                                <span class="card-footer card-img-overlay">
                                <span class="game-title">PNG Slots</span>
                                </span>
                            </a>
                            </li>
                            <li class="col-md-3">
                            <a href="/slots/gpi" target="_self" class="card_box">
                                <span class="card-img-wrapper">
                                <img class="card-img" src={placeholer296_194} alt="" />
                                </span>
                                <span class="card-footer card-img-overlay">
                                <span class="game-title">GPI Slots</span>
                                </span>
                            </a>
                            </li>

                            <li class="col-md-3">
                            <a href="/slots/netent" target="_self" class="card_box">
                                <span class="card-img-wrapper">
                                <img class="card-img" src={placeholer296_194} alt="" />
                                </span>
                                <span class="card-footer card-img-overlay">
                                <span class="game-title">Netent Slots</span>
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
ul {
    list-style: none;
    list-style-type:none;
}
.card-box {
    margin-bottom: 30px;
    display: block;
    position: relative;
}
.card-img {
	border-radius: 4px
}
.card-img-wrapper{
    min-height: 250px;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    text-align: center;
    position: relative
}
.card-img {
    position: relative;
	-webkit-transition: 0.3s;
	-o-transition: 0.3s;
	transition: 0.3s;
	display: block;
	max-width: 100%;
	height: auto;
	-webkit-backface-visibility: hidden
}

.card-footer {
	color: #fff;
	background-color: #23324E;
	padding: 8px 12px;
	border-top: 1px solid rgba(255, 255, 255, 0.1)
}


.card-footer .card-img-overlay {
	text-align: center;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
	z-index: 4;
	position: absolute;
	-webkit-transition: 0.3s;
	-o-transition: 0.3s;
	transition: 0.3s;
    background-color: rgba(4, 26, 53, 0.8);
    padding: 6px 12px;
    color: white;
}
.game-title {
	font-size: 16px
}
ul.row,
ol.row {
	margin-bottom: 0;
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
a:hover,
a:focus{
    color:white;
}
.btn {
    transition: color 0.3s,background-color 0.4s;
        color: #fff;
    background-color: #23B223;
    border-color: #1f9d1f;
}
.btn-primary {
    color: #fff;
    background-color: #23B223;
    border-color: #1f9d1f;
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

.marquee-section {
	overflow: hidden;
	color: #fff;
	padding: 0 !important;
	height: 40px;
	border: 1px solid #094484;
	background-color: #062448;
	border-radius: 4px;
	margin: 10px auto;
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