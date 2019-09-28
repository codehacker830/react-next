import React from 'react';
import Link from 'next/link';
import Head from "next/head";

class Footer extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>Prometheus Template</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                    <link href="https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet" />
                    <link href="https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
                </Head>
                <div>
                    <footer id="footer">
                        <section className="section nav-section">
                            <div className="container text-center">
                                <ul className="nav justify-content-center footer-nav list-inline">
                                    <li className="nav-item"><Link href="/"><a className="nav-link" title="Affiliate" target="_blank">Affiliate </a></Link></li>
                                    <li className="nav-item"><Link href="/"><a className="nav-link" title="About Us" target="_blank">About Us </a></Link></li>
                                    <li className="nav-item"><Link href="/"><a className="nav-link" title="Privacy" target="_blank">Privacy </a></Link></li>
                                    <li className="nav-item"><Link href="/"><a className="nav-link" title="Disclaimer" target="_blank">Disclaimer </a></Link></li>
                                    <li className="nav-item"><Link href="/"><a className="nav-link" title="Responsible Gaming" target="_blank">Responsible Gaming </a></Link></li>
                                    <li className="nav-item"><Link href="/"><a className="nav-link" title="Technology" target="_blank">Technology </a></Link></li>
                                    <li className="nav-item"><Link href="/"><a className="nav-link" title="FAQ" target="_blank">FAQ </a></Link></li>
                                    <li className="nav-item"><Link href="/"><a className="nav-link" title="Terms &amp; Conditions" target="_blank">Terms &amp; Conditions </a></Link></li>
                                    <li className="nav-item"><Link href="/"><a className="nav-link" title="Help" target="_blank">Help </a></Link></li>
                                </ul>
                                <div className="text-muted">© 2019<Link href="/"><a> Gameplay Interactive</a></Link>. All rights reserved. | 18+</div>
                            </div>
                        </section>
                        <section className="section info-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3"><h5 className="heading">Information</h5>
                                        <h6 className="sub-heading">Gameplay Interactive is operated under the Curacao license (license number: 8048 / JAZ). Joint venture plan Contact us Rules and terms About us</h6>
                                        <p>Gameplay Interactive is one of the world's leading online gaming sites. We have the best and best offers and have a lot of registration bonuses for the novice. Want to get a registration bonus? Sign up now!</p>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="heading">Online Sports Betting</h5>
                                        <p>Experience more than 20,000 live sports betting each month, including soccer, tennis championships, basketball, ice hockey, handball, golf and so on. Bet at the beginning of each game, there are not only dozens of betting methods, and live betting is more than any betting company.</p>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="heading">The first casino deposit dividends</h5>
                                        <p>Yes, now we have the highest deposit bonus in the Gameplay Interactive casino. Register now, get your deposit, play baccarat, roulette, blackjack, feel the latest casino sensation. We also have the most complete VIP service team, providing unique services.</p>
                                        </div>
                                    <div className="col-md-3">
                                        <h5 className="heading">Choose your best payment method!</h5>
                                        <p>Gameplay Interactive makes it easier for you to pay according to your choice. Our 100% safe and secure financial work means that your money is absolutely safe and, if necessary, you are welcome to consult for help.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section logos">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-4 social">
                                        <h6>Connect with us</h6>
                                        <ul className="nav list-inline">
                                            <li className="nav-item"><Link href="https://weibo.com"><a target="_blank"><span className="data-icon icon-weibo"></span></a></Link></li>
                                            <li className="nav-item"><Link href="http://t.qq.com"><a target="_blank"><span className="data-icon icon-weibo"></span></a></Link></li>
                                            <li className="nav-item"><Link href="https://www.wechat.com" ><a target="_blank"><span className="data-icon icon-weibo"></span></a></Link></li>
                                            <li className="nav-item"><Link href="http://www.imqq.com" ><a target="_blank"><span className="data-icon icon-weibo"></span></a></Link></li>
                                            <li className="nav-item"><Link href="http://sns.renren.com" ><a target="_blank"><span className="data-icon icon-weibo"></span></a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-8 certificate text-right"><br/>
                                        <ul className="nav justify-content-end list-inline">
                                            <li className="nav-item"><Link href="/" ><a target="_blank" className="fc">First Cagayan </a></Link></li>
                                            <li className="nav-item"><Link href="/" ><a target="_blank" className="bmm">BMM </a></Link></li>
                                            <li className="nav-item"><Link href="/" ><a target="_blank" className="gli">GLI Certifications</a></Link></li>
                                            <li className="nav-item"><a href="#" className="tst">Payouts Reviewed </a></li>
                                            <li className="nav-item"><a href="#" className="itech">Tech Lab </a></li>
                                            <li className="nav-item"><a href="#" className="verified">Verified &amp; Secured</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section logos">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 payment">
                                        <h6>Payment Method</h6>
                                        <ul className="list-inline">
                                            <li><Link href="https://usa.visa.com"><a  target="_blank" className="visa"> Visa </a></Link></li>
                                            <li><Link href="https://www.mastercard.us"><a  target="_blank" className="mastercard"> Mastercard </a></Link></li>
                                            <li><Link href="https://intl.alipay.com"><a  target="_blank" className="alipay"> Alipay </a></Link></li>
                                            <li><Link href="https://www.skrill.com"><a  target="_blank" className="skrill"> Skrill </a></Link></li>
                                            <li><Link href="https://pay.weixin.qq.com"><a  target="_blank" className="wechat"> WeChat </a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 browser text-right">
                                        <h6>Suggested Browser</h6>
                                        <ul className="nav list-inline justify-content-end">
                                            <li className="nav-item"><Link href="https://www.google.com/chrome"><a  target="_blank"><span className="data-icon icon-weibo"></span></a></Link></li>
                                            <li className="nav-item"><Link href="https://www.mozilla.org/en-US/firefox/new"><a  target="_blank"><span className="data-icon icon-weibo"></span></a></Link></li>
                                            <li className="nav-item"><Link href="https://www.microsoft.com/en-us/download/internet-explorer.aspx"><a  target="_blank"><span className="data-icon icon-weibo"></span></a></Link></li>
                                            <li className="nav-item"><Link href="https://support.apple.com/downloads/safari"><a  target="_blank"><span className="data-icon icon-weibo"></span></a></Link></li>
                                            <li className="nav-item"><Link href="https://pinyin.sogou.com"><a target="_blank"><span className="data-icon icon-weibo"></span></a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </footer>
                </div>
<style jsx>{`
a {
	-webkit-transition: color 0.3s;
	-o-transition: color 0.3s;
	transition: color 0.3s;
    background-color: transparent
}

a:active,
a:hover {
	outline: 0
}
footer{
	display: block;
    padding-bottom: 35px;
}
.text-right {
	text-align: right
}
.row {
    margin-left: 1px;
    margin-right: 1px;
}
.container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
.container {
    width: 1230px;
    max-width: none !important;
}
.container:before,
.container:after {
	content: " ";
	display: table
}

.container:after {
	clear: both
}
.list-inline {
	padding-left: 0;
	list-style: none;
	margin-left: -5px
}

.list-inline>li {
	display: inline-block;
	padding-left: 5px;
	padding-right: 5px
}
@media (min-width: 320px) {
	.container {
		width: 300px
	}
}
@media (min-width: 520px) {
	.container {
		width: 480px
	}
}
@media (min-width: 768px) {
	.container {
		width: 750px
	}
}

@media (min-width: 992px) {
	.container {
		width: 980px
	}
}

@media (min-width: 1200px) {
	.container {
		width: 1180px
	}
}


#footer {
	position: absolute;
	position: relative;
	width: 100%;
	bottom: 0;
	font-size: 12px;
	background-color: #062448;
    font-family: "Microsoft YaHei",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    line-height: 1.42857;
}

#footer,
#footer .text-muted {
	color: rgba(155, 155, 155, 0.5)
}

#footer a {
	color: rgba(255, 255, 255, 0.5);
}

#footer a:hover,
#footer a:focus {
	color: #FFCB01;
    background-color: #062448;
    text-decoration:none;
}

#footer h1,
#footer h2,
#footer h3,
#footer h4,
#footer h5,
#footer h6 {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.5);
    font-weight: 300;
}

#footer h1:first-child,
#footer h2:first-child,
#footer h3:first-child,
#footer h4:first-child,
#footer h5:first-child,
#footer h6:first-child {
	margin-top: 0
}

#footer>.section {
	padding-top: 20px;
}
#footer>.section> div {

    padding: 0px 15px;
}
#footer>.section .info-section> div,
#footer>.section .logos> div {
    padding-top: 20px;
}
#footer>.section> div> ul {
    margin-top: 0;
    margin-bottom: 10px;
}
#footer>.section a {
    padding: 0;
}
#footer>.section+.section .container {
    padding-top: 20px;
	border-top: 1px dotted rgba(128, 128, 128, 0.2)
}
#footer>.section .list-inline li {
	vertical-align: middle;
}

#footer>.section:not(.logos) .list-inline li {
	padding: 0 10px
}

#footer>.section:not(.logos) .list-inline li+li {
	border-left: 1px solid rgba(128, 128, 128, 0.2)
}

#footer .info-section .heading {
	text-transform: uppercase;
	margin-bottom: 15px;
	padding-bottom: 20px;
	border-bottom: 1px dotted rgba(128, 128, 128, 0.2)
}

#footer .info-section p:last-child {
	margin-bottom: 0
}

#footer .logos ul,
#footer .logos ol {
	margin-bottom: 0
}

#footer .logos a {
	color: rgba(255, 255, 255, 0.8)
}

#footer .logos a:hover,
#footer .logos a:focus {
	color: #FFCB01
}

#footer .logos .data-icon {
	font-size: 30px
}

#footer .payment a,
#footer .certificate a {
	font: 0/0 a;
	color: transparent;
	text-shadow: none;
	background-color: transparent;
	border: 0;
	display: block;
	vertical-align: middle;
	width: 22px;
	height: 26px;
	background: transparent url("/uploaded/prometheus_core_template/f4e5124a1f92e9bf273bcd193f8fa2679b8d0d223516bf6f14909e4c649c62be.png") 0 0 no-repeat;
	-webkit-filter: grayscale(100%);
	-moz-filter: grayscale(100%);
	filter: grayscale(100%);
	-webkit-transition: 0.3s;
	-o-transition: 0.3s;
	transition: 0.3s;
	mix-blend-mode: luminosity
}

#footer .payment a:hover,
#footer .payment a:focus,
#footer .certificate a:hover,
#footer .certificate a:focus {
	mix-blend-mode: normal;
	-webkit-filter: grayscale(0%);
	-moz-filter: grayscale(0%);
	filter: grayscale(0%)
}

#footer .certificate a {
	height: 36px
}

#footer .certificate a.fc {
	width: 110px;
	background-position-x: -106px;

    background-color: black;
}

#footer .certificate a.bmm {
	width: 74px;
	background-position-x: -220px;
    background-color: white;

}

#footer .certificate a.gli {
	width: 36px;
	background-position-x: -303px;
    background-color: black;

}

#footer .certificate a.tst {
	width: 67px;
	background-position-x: -349px;
	cursor: default;
	-webkit-filter: grayscale(100%);
	-moz-filter: grayscale(100%);
	filter: grayscale(100%);
	mix-blend-mode: luminosity;
    background-color: white;

}

#footer .certificate a.itech {
	width: 25px;
	background-position-x: -426px;
	cursor: default;
	-webkit-filter: grayscale(100%);
	-moz-filter: grayscale(100%);
	filter: grayscale(100%);
	mix-blend-mode: luminosity;
    background-color: black;    
}

#footer .certificate a.verified {
	width: 132px;
	background-position-x: -461px;
	cursor: default;
	-webkit-filter: grayscale(100%);
	-moz-filter: grayscale(100%);
	filter: grayscale(100%);
	mix-blend-mode: luminosity;
    background-color: white;
}

#footer .payment a {
	height: 27px;
	background-position-y: -36px
}

#footer .payment a.visa {
	width: 62px;
	background-position-x: 0px;
    background-color: white;
}

#footer .payment a.mastercard {
	width: 42px;
	background-position-x: -72px;
    background-color: black;
}

#footer .payment a.alipay {
	width: 26px;
	background-position-x: -124px;
    background-color: white;
}

#footer .payment a.skrill {
	width: 65px;
	background-position-x: -160px;
    background-color: black;
}

#footer .payment a.wechat {
	width: 115px;
	background-position-x: -235px;
    background-color: white;
}

.data-icon,
[data-icon]:before {
	display: inline-block;
	font-family: "icon-base" !important;
	speak: none;
	line-height: 1;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale
}

[data-icon]:before {
	content: attr(data-icon)
}

`}</style>
            </>
        )
    }
}

export default Footer;