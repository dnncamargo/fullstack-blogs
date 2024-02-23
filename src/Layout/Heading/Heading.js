import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';
  import classes from './Heading.module.css'

class Heading extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState(
            { isOpen: !this.state.isOpen }
        )
    }

    render() {
        return (
            <Navbar color='light' light expand='md'>
                <NavbarBrand href='/'>My Blog</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className='me-auto' navbar>
                        <NavItem>
                            <NavLink href='/newarticle'>New Article</NavLink>
                        </NavItem>
                    </Nav>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right dark>
                            <DropdownItem>
                                Login
                            </DropdownItem>
                            <DropdownItem>
                                Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                </Collapse>

            </Navbar>
        )
    }
}

export default Heading