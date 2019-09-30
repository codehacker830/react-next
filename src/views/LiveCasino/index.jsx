import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Head from 'next/head';
//import components
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';

//import image

import placeholder656_250 from '../../assets/images/placeholer656_250.png';
import placeholer1441_500 from '../../assets/images/casino_bg.png';
// import placeholer1441_500 from '../../assets/images/placeholer1441_500.png';

class LiveCasino extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <div className="main-container"> 
                    <section className="section"> 
                        <div className="hero slick-initialized slick-slider">
                            <div className="slick-list draggable">
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
                    <section className="casino-section">
                        <div className="casino-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
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
                                    <div className="col-md-5">
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
                <Footer/>
<style jsx>{`
* {
    font-family: "Microsoft YaHei", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 14px;
	line-height: 1.42857;
	color: #fff;
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
.btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.btn:hover,
.btn:focus{
	background-color: #1b871b;
    color:white;
}
.slick-slide {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
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

.carousel .slick-dots .slick-active button {
	background-color: #fff
}

.carousel .slick-arrow {
	cursor: pointer;
	min-width: 40px;
	border-radius: 0;
	font: 0/0 a;
	color: transparent;
	text-shadow: none;
	background-color: transparent;
	border: 0;
	opacity: .2;
	filter: alpha(opacity=20);
	-webkit-transition: 0.3s;
	-o-transition: 0.3s;
	transition: 0.3s
}

.carousel .slick-arrow:after {
	content: '';
	color: #fff;
	text-align: center;
	font: 40px/40px 'icon-base';
	width: 40px;
	height: 40px;
	position: absolute;
	top: 50%;
	left: 0;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	transform: translateY(-50%)
}

.carousel .slick-arrow:hover,
.carousel .slick-arrow:focus {
	opacity: 1;
	filter: alpha(opacity=100)
}

.carousel .slick-prev:after {
	content: '\e909'
}

.carousel .slick-next:after {
	content: '\e90a'
}
.hero {
    background-color:#012248;
}

   `}</style>
            </>
        )
    }
}

export default LiveCasino;