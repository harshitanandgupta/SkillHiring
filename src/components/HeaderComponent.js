import React,{Component} from 'react'
import {Navbar,NavbarToggler,NavbarBrand,Collapse,Nav,NavItem,NavLink,Jumbotron} from 'reactstrap'
import Typical from 'react-typical'
class HeaderComponent extends Component
{
    constructor(props){
        super(props)
        this.state={
            isNavOpen:false
        }
        this.toggleNav=this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }
    
    render(){
        return (
            <div>
        <Navbar dark expand="md">
            <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto ml-auto" href="/"><img src='assets/images/logo2.png' height="50" width="60" 
            alt='Job' /></NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            </div>
      </Navbar>
      <Jumbotron>
         <div className="justify-content-center">
            <h1 className="text-center"><Typical steps={['Search Employees By Skill',1000,'Hire Now!!',1000]} loop={Infinity}
        wrapper="p"/></h1>
             <h6 className="text-center"><Typical steps={['',5000,'Hire Employees based on the skill set you need!',200]} loop={1}
        wrapper="p"/></h6>
         </div>
       </Jumbotron>
      </div>
        )
    }
}
export default HeaderComponent