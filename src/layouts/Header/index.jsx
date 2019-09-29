import React from 'react';
import ReactDOM from 'react-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Form, 
    FormGroup, 
    Input
} from 'reactstrap';
import swal from 'sweetalert';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

//import css
import 'flag-icon-css/css/flag-icon.css';
import '../../assets/css/header/header.css';
import Logo from '../../assets/images/Logo.png';
import slots_01 from '../../assets/images/slots/slots_01.png';
import slots_02 from '../../assets/images/slots/slots_02.png';
import slots_03 from '../../assets/images/slots/slots_03.png';
import slots_04 from '../../assets/images/slots/slots_04.png';
import slots_05 from '../../assets/images/slots/slots_05.png';
import slots_06 from '../../assets/images/slots/slots_06.png';
import slots_07 from '../../assets/images/slots/slots_07.png';
import slots_08 from '../../assets/images/slots/slots_08.png';
import slots_09 from '../../assets/images/slots/slots_09.png';
import slots_10 from '../../assets/images/slots/slots_10.png';
import slots_11 from '../../assets/images/slots/slots_11.png';
import slots_12 from '../../assets/images/slots/slots_12.png';
import placeHolder from '../../assets/images/live-casino/place-holder.png';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTime: null,
            isShowCasinoDropDown: false,
            isShowSlotsDropDown: false,
            isShowSignUpModal: false,
            username: '',
            password: '',
        }

        this.showCasinoDropDown = this.showCasinoDropDown.bind(this);
        this.showSlotsDropDown = this.showSlotsDropDown.bind(this);
        this.logIn = this.logIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.hideSignUpModal = this.hideSignUpModal.bind(this);
    }

    componentDidMount() {
        setInterval(this.getCurrentTime, 100);
    }

    getCurrentTime = () => {
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        if (month > 9) {
            month = month;
        } else {
            month = '0' + month;
        }

        let date = today.getDate();
        if (date > 9) {
            date = date;
        } else {
            date = '0' + date;
        }

        let hours = today.getHours();
        if(hours < 10) {
            hours = '0' + hours;
        }
        let minutes = today.getMinutes();
        if(minutes < 10) {
            minutes = '0' + minutes;
        }
        let seconds = today.getSeconds();
        if(seconds < 10) {
            seconds = '0' + seconds;
        }
        let time = hours + ':' + minutes + ':' + seconds;
        let timeZone = today.getTimezoneOffset();
        let currentTime = date + '/' + month + '/' + year + '  '  + time + ' ' + 'GMT ' + timeZone;

        this.setState({
            currentTime: currentTime,
        })
    }

    showSlotsDropDown = () => {
        this.setState({
            isShowSlotsDropDown: true,
        })
    }

    showCasinoDropDown = () => {
        this.setState({
            isShowCasinoDropDown: true,
        })
    }

    hideSlotsDropDown = () => {
        this.setState({
            isShowSlotsDropDown: false,
        })
    }

    hideCasinoDropDown = () => {
        this.setState({
            isShowCasinoDropDown: false,
        })
    }

    handleUserNameChange = ($event) => {
        this.setState({
            username: $event.target.value
        })
    }

    handlePasswordChange = ($event) => {   
        this.setState({
            password: $event.target.value
        })
    }

    logIn = () => {
        if(this.state.username == '' || this.state.password == '') {
            console.log("username and password is invalid");
            swal({
                title: "Alert",
                text: "Please Enter Username and Password",
                dangerMode: true,
            });
        } else {
            let loginData = {
                username: this.state.username,
                password: this.state.password,
            }
            console.log("here goes login api: ", loginData);
        }
    }

    signUp = () => {
        
        this.setState({
            isShowSignUpModal: true
        })
        console.log("here sign up action occurs: ", this.state);
    }

    hideSignUpModal = () => {
        this.setState({
            isShowSignUpModal: false
        })
    }

    render() {
        return(
            <>
            <div className="header-container">
                <div className="row ml-0 mr-0 topBar">
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <div style={{ float: 'left'}}>
                            <span className="ml-3"> { this.state.currentTime } </span>
                        </div>
                        <div className="mr-2" style={{ float: 'right'}}>
                            <span className="mr-3 hover-yellow">
                                <i className="fa fa-bell mr-1" style={{color: '#fff'}}></i>
                                <span>Latest News</span>
                            </span>
                            <span className="mr-3 hover-yellow">
                                <i className="fa fa-comment mr-1" style={{color: '#23B223'}}></i>
                                <span> Live Chat </span>
                            </span>
                            <span className="dropdown language">
                                <a href="#" data-toggle="dropdown" style={{textDecoration: 'none', color: 'white'}} aria-haspopup="true" aria-expanded="false">
                                    <span className="hover-yellow pr-2">English</span>
                                    <span className="flag-icon flag-icon-us"></span>
                                </a>
                                <ul data-js="dropdown-menu" style={{fontSize: '12px'}} className="dropdown-menu bg-pink" aria-labelledby="language">
                                    <li>
                                        <a data-js="language-selection" style={{textDecoration: 'none', color: 'white'}} href="#" data-lang="zh-hans">
                                            <span className="hover-yellow pl-2 pr-2">简体中文</span>
                                            <span className="flag-icon flag-icon-cn"></span>
                                        </a>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row ml-0 mr-0 formBar" style={{height: '75px'}}>
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <img className="logo ml-1" style={{height: '42px'}} src={Logo} alt='logo'/>
                        <Form onSubmit={($event) => {$event.preventDefault()}} className="float-right form-responsive mt-1">
                            <FormGroup className="mb-0 mr-2">
                                <Input type="text" name="username" value={this.state.username} onChange={this.handleUserNameChange} className="bg-input mb-0 h-100 text-white" id="username" placeholder="Username"/>
                            </FormGroup>
                            <div className="input-group mb-0">
                                <input type="text" className="form-control bg-input mb-0 h-100 text-white" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" aria-label="Password" aria-describedby="basic-addon2"/>
                                <div className="input-group-append h-33">
                                    <span className="input-group-text bg-pink-shallow  border-0" id="basic-addon2">
                                        <i className="fa fa-lock"></i> 
                                    </span>
                                </div>
                                <button className="btn btn-warning ml-2 h-33" onClick={this.logIn}>LOGIN</button>
                                <button type="button" onClick={this.signUp} className="btn btn-success btn-labeled ml-2 h-33">
                                    SIGN UP
                                    <span className="btn-label">
                                        <i className="fa fa-lock"></i>
                                    </span>
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="row ml-0 mr-0 " style={{backgroundColor: '#23324E'}}>
                    <div className="col-md-8 offset-md-2 col-sm-12 col-xs-12">
                        <Navbar className="bg-pink-shallow p-0" color="light" light expand="md" style={{marginBottom: '0px'}}>
                            <Nav className="space-between ml-1" navbar>
                                <NavItem>
                                    <NavLink href='/'>
                                        <i className="fa fa-home text-white"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="dropdown slots">
                                    <NavLink  onMouseOver={this.showSlotsDropDown} onMouseLeave={this.hideSlotsDropDown} href='/slots' className="text-white">
                                        Slots
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onMouseOver={this.showCasinoDropDown} onMouseLeave={this.hideCasinoDropDown} href="live-casino" className="text-white">
                                        Live Casino
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='promotions' className="text-white">
                                        Promotions
                                        </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='vip' className="text-white">
                                        VIP
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </div>
                </div>
                <div className='row ml-0 mr-0 card-background'>
                    {this.state.isShowSlotsDropDown && (
                        <div className='col-8 offset-2 slots-dropdown'>
                            <div className='row'>
                                <div className="card card-background text-center max-h-200 border-0 p-2 col-2">
                                    <img src={slots_01} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '150px', height: '100px'}} alt='slots_01'/>
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase'> pt slots </button>
                                    </div>
                                </div>
                                <div className="card card-background text-center max-h-200 border-0 p-2 col-2">
                                    <img src={slots_02} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '150px', height: '100px'}} alt='slots_02' />
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase'> mgs slots </button>
                                    </div>
                                </div>
                                <div className="card card-background text-center max-h-200 border-0 p-2 col-2">
                                    <img src={slots_03} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '150px', height: '100px'}} alt='slots_03' />
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase'> png slots </button>
                                    </div>
                                </div>
                                <div className="card card-background text-center max-h-200 border-0 p-2 col-2">
                                    <img src={slots_04} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '150px', height: '100px'}} alt='slots_04' />
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase'> gpi slots </button>
                                    </div>
                                </div>
                                <div className="card card-background text-center max-h-200 border-0 p-2 col-2">
                                    <img src={slots_05} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '150px', height: '100px'}} alt='slots_05' />
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase text-dark'> ttg slots </button>
                                    </div>
                                </div>
                                <div className="card card-background text-center max-h-200 border-0 p-2 col-2">
                                    <img src={slots_06} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '150px', height: '100px'}} alt='slots_06' />
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase'> isb slots </button>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="card card-background text-center max-h-200 border-0 p-2 col-2">
                                    <img src={slots_07} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '150px', height: '100px'}} alt='slots_07' />
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase'> bs slots </button>
                                    </div>
                                </div>
                                <div className="card card-background text-center max-h-200 border-0 p-2 col-2">
                                    <img src={slots_08} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '150px', height: '100px'}} alt='slots_08' />
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase'> gspot slots </button>
                                    </div>
                                </div>
                                <div className="card card-background text-center max-h-200 border-0 p-2 col-2">
                                    <img src={slots_09} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '150px', height: '100px'}} alt='slots_09' />
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase'> qtech slots </button>
                                    </div>
                                </div>
                                <div className="card card-background text-center max-h-200 border-0 p-2 col-2">
                                    <img src={slots_10} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '150px', height: '100px'}} alt='slots_10' />
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase'> ucs slots </button>
                                    </div>
                                </div>
                                <div className="card card-background text-center max-h-200 border-0 p-2 col-2">
                                    <img src={slots_11} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '150px', height: '100px'}} alt='slots_11' />
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase'> pplay slots </button>
                                    </div>
                                </div>
                                <div className="card card-background text-center max-h-200 border-0 p-2 col-2">
                                    <img src={slots_12} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '150px', height: '100px'}} alt='slots_12' />
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase'> metent slots </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    { this.state.isShowCasinoDropDown && (
                        <div className='col-6 offset-3 casino-dropdown'>
                            <div className='row text-center' style={{justifyContent: 'space-around'}}>
                                <div className="card card-background max-h-200 border-0 p-2 col-3">
                                    <img src={placeHolder} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '200px', height: '100px'}} alt='slots_01'/>
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase'> gpi casino preminere </button>
                                    </div>
                                </div>
                                <div className="card card-background max-h-200 border-0 p-2 col-3">
                                    <img src={placeHolder} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '200px', height: '100px'}} alt='slots_02' />
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase'> gpi casino </button>
                                    </div>
                                </div>
                                <div className="card card-background max-h-200 border-0 p-2 col-3">
                                    <img src={placeHolder} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '200px', height: '100px'}} alt='slots_03' />
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase'> mgs casino </button>
                                    </div>
                                </div>
                                <div className="card card-background max-h-200 border-0 p-2 col-3">
                                    <img src={placeHolder} className="card-img-top" style={{marginLeft: 'auto', marginRight: 'auto', width: '200px', height: '100px'}} alt='slots_04' />
                                    <div className="card-body text-center pl-2 pr-2">
                                        <button className='btn btn-warning text-dark w-100 text-uppercase'> ag casino </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <style jsx>{`
            `}</style>
            </>
        )
    }
}

export default Header;