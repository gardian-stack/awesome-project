import React, { useState } from 'react';
import {Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './menu.css'
import Content from '../../component/newTest/Content';
import BlogPost from '../../component/blogPost/BlogPost';
import Formregister from '../../component/formass/formregister';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
        <Navbar color="primary" light expand="md">
            <div className="container">
              <NavbarBrand href="/"><img src="./logo-dini.png" alt=""/></NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                      <NavItem>
                        {/* <NavLink href="/components/">Golden Age</NavLink> */}
                        <Link to="/golden">Golden Age</Link>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/register">Register</NavLink>
                      </NavItem>
                  </Nav>
                  <NavbarText><NavLink href="/components/"><img src="./logo-wa.png" alt=""/>0811-5555-678</NavLink></NavbarText>
                  <NavbarText><NavLink href="/components/"><img src="./logo-instagram.png" alt=""/></NavLink></NavbarText>
                  <NavbarText><NavLink href="/components/"><img src="./logo-youtube.png" alt=""/></NavLink></NavbarText>
              </Collapse>
            </div>
        </Navbar>

        <Switch>
          <Route exact path="/"><Content /></Route>
          <Route path="/golden"><BlogPosts /></Route>
          <Router path="/register"><Formregister /></Router>
        </Switch>
    </Router>
  );
  function BlogPosts() {
    return (
      <div>
        <BlogPost />
      </div>
    );
  }
}

export default Menu;