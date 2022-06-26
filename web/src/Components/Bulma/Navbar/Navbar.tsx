import React, { ReactElement } from 'react';
import { IPropBase } from '../Interfaces/IPropBase';

export interface INavbarProps extends IPropBase {
  
}

function Navbar(props: INavbarProps): ReactElement<any, any> {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Home
          </a>

          <a className="navbar-item">
            Documentation
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                About
              </a>
              <a className="navbar-item">
                Jobs
              </a>
              <a className="navbar-item">
                Contact
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Nav(props: INavbarProps): JSX.Element {
  return(
    <>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        {props.children}
      </nav>
    </>
  )
}

export interface IBrandProps extends IPropBase {

}

function Brand(props: IBrandProps): ReactElement<any, any> {
  return(
    <>
      <div className='navbar-brand'>
        {props.children}
      </div>
    </>
  )
}

export interface IItemProps extends IPropBase {
  hasDropDown?: boolean
  isHoverable?: boolean
  linkTitle?: string
}

function Item(props: IItemProps): ReactElement<any, any> {

  const dropDown = props.hasDropDown
    ? 'has-dropdown'
    : '';
  const hoverable = props.isHoverable
    ? 'is-hoverable'
    : '';
  const linkTitle = props.hasDropDown
    ? props.linkTitle 
      ? props.linkTitle 
      : 'More'
    : 'More';
  const className = `navbar-item ${dropDown} ${hoverable}`;
  const item = props.hasDropDown 
    ? <div className={className}>
        <a className='navbar-link'>
          {linkTitle}
        </a>

        <Dropdown>
          {props.children}
        </Dropdown>
      </div>
    : <a className={className} onClick={() => props.onClick && props.onClick()}>{props.children}</a>
  return (
    <>
      {item}
    </>
  )
}


export interface IDropdownProps extends IPropBase {

}

function Dropdown(props: IDropdownProps): ReactElement<any, any> {
  return (
    <>
      <div className='navbar-dropdown'>
        {props.children}
      </div>
    </>
  )
}

export interface IBurgerProps extends IPropBase {
  targetId: string
}

function Burger(props: IBurgerProps): JSX.Element {
  return(
    <>
      <a className='navbar-burger' role='button' aria-label='menu' aria-expanded='false' data-target={props.targetId}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </>
  )
}

export interface IBurgerMenuProps extends IPropBase {
  id: string,
  startItems: ReactElement<any, any>[],
  endItems: ReactElement<any, any>[]
}

function Menu(props: IBurgerMenuProps) {
  return ( 
    <>
      <div id={props.id} className='navbar-menu'>
        <div className='navbar-start'>
          {props.startItems && props.startItems}
        </div>
        <div className='navbar-end'>
          {props.endItems && props.endItems}
        </div>
      </div>
    </>
  );
}

function Divider(props: IPropBase): ReactElement<any, any> {
  return(
    <>
      <hr className='navbar-divider' />
    </>
  )
}

Navbar.Brand = Brand;
Navbar.Item = Item;
Navbar.Burger = Burger;
Navbar.Menu = Menu;
Navbar.Dropdown = Dropdown;
Navbar.Divider = Divider;
Navbar.Nav = Nav;

export default Navbar;