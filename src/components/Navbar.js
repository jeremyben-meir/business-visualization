import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import ReactLogo from '../assets/img/logo/rentable-logo-2-white.svg';
import ReactLogoColor from '../assets/img/logo/rentable-logo-2.svg';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          show: true,
          scrollPos: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
      
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const { scrollPos } = this.state;
        this.setState({
          scrollPos: document.body.getBoundingClientRect().top,
          show: document.body.getBoundingClientRect().top > -100
        });
      }
      
    static propTypes = {
        brand: PropTypes.shape({
          name: PropTypes.string.isRequired,
          to: PropTypes.string.isRequired
        }),
        links: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired
          })
        )
      };
  
    render() {
        const { brand, links } = this.props;
      
        const NavLinks = () =>
          links.map((link, index) => (
            <a key={index} href={link.to}>
              {link.name}
            </a>
        ));
      
        return (
            <Transition>
            <StyledNavbarTop className={this.state.show ? "botbar" : "topbar"}>
              <img src={ReactLogo}  href="/" className={this.state.show ? "botbarlogo" : "topbarlogo"} alt="React Logo" />
              {/* <nav>
                <NavLinks />
              </nav> */}
            </StyledNavbarTop>
            <StyledNavbar className={this.state.show ? "topbar" : "botbar"}>
              <img src={ReactLogoColor} href="/" className={this.state.show ? "topbarlogo" : "botbarlogo"} alt="React Logo" />

              {/* <nav>
                <NavLinks />
              </nav> */}
            </StyledNavbar>
            </Transition>
        );
    }
  }

  const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  background: white;
  z-index: 1000;
  a {
    margin-right: 3rem;
    font-weight: normal;
  }
  .brand {
    font-style: italic;
    margin-left: 3rem;
    font-weight: bold;
    color: white;
    font-size: 1.25rem;
  }`;
  const StyledNavbarTop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  z-index: 1000;
  a {
    margin-right: 3rem;
    font-weight: normal;
  }
  .brand {
    font-style: italic;
    margin-left: 3rem;
    font-weight: bold;
    color: white;
    font-size: 1.25rem;
  }`;



  const Transition = styled.div`
  .topbar {
    -webkit-transition: opacity .15s ease-in-out;
    -moz-transition: opacity .15s ease-in-out;
    -ms-transition: opacity .15s ease-in-out;
    -o-transition: opacity .15s ease-in-out;
     opacity: 0;
  }
  .botbar {
    -webkit-transition: opacity .15s ease-in-out;
    -moz-transition: opacity .15s ease-in-out;
    -ms-transition: opacity .15s ease-in-out;
    -o-transition: opacity .15s ease-in-out;
     opacity: 1;
  }
  .topbarlogo {
    -webkit-transition: opacity .15s ease-in-out;
    -moz-transition: opacity .15s ease-in-out;
    -ms-transition: opacity .15s ease-in-out;
    -o-transition: opacity .15s ease-in-out;
     opacity: 0;
     height: 50%;
     width: auto;
     padding-left: 30px;
  }
  .botbarlogo {
    -webkit-transition: opacity .15s ease-in-out;
    -moz-transition: opacity .15s ease-in-out;
    -ms-transition: opacity .15s ease-in-out;
    -o-transition: opacity .15s ease-in-out;
     opacity: 1;
    height: 50%;
    width: auto;
    padding-left: 30px;
  }
`;