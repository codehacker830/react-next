import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Form, 
    FormGroup, 
    Input
} from 'reactstrap';

//import css
import 'flag-icon-css/css/flag-icon.css';
import '../../assets/css/header/header.css';
import Logo from '../../assets/images/Logo.png';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTime: null,
            isOpen: false
        }

        this.toggle = this.toggle.bind(this);
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

        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let timeZone = today.getTimezoneOffset();
        let currentTime = date + '/' + month + '/' + year + '  '  + time + ' ' + 'GMT ' + timeZone;

        this.setState({
            currentTime: currentTime,
        })
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <>
                <div className="row topBar">
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
                <div className="row formBar" style={{height: '75px'}}>
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <img className="logo ml-1" style={{height: '42px'}} src={Logo} alt='logo'/>
                        <Form className="float-right form-responsive mt-1">
                            <FormGroup className="mb-0 mr-2">
                                <Input type="text" name="username" className="bg-input" id="username" placeholder="Username"/>
                            </FormGroup>
                            <div className="input-group mb-0">
                                <input type="text" className="form-control bg-input" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2"/>
                                <div className="input-group-append h-33">
                                    <span className="input-group-text bg-pink-shallow  border-0" id="basic-addon2">
                                        <i className="fa fa-lock"></i> 
                                    </span>
                                </div>
                                <button className="btn btn-warning ml-2 h-33">LOGIN</button>
                                <button type="button" className="btn btn-success btn-labeled ml-2 h-33">
                                    SIGN UP
                                    <span className="btn-label">
                                        <i className="fa fa-lock"></i>
                                    </span>
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="row" style={{backgroundColor: '#23324E'}}>
                    <div className="col-md-8 offset-md-2 col-sm-12 col-xs-12">
                        <Navbar className="bg-pink-shallow p-0" color="light" light expand="md">
                            <NavbarBrand href="#" className="mr-5 ml-1">
                                <i className="fa fa-home text-white"></i>
                            </NavbarBrand>
                            <NavbarToggler className="text-white" onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar >
                                <Nav className="space-between ml-1" navbar>
                                    <NavItem>
                                        <NavLink href="#" className="text-white">
                                            Slots
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" className="text-white">
                                            Live Casino
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" className="text-white">
                                            Promotions
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" className="text-white">
                                            VIP
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;