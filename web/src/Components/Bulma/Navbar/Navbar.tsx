import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Color } from '../Enums/Color';
import { IPropBase } from '../Interfaces/IPropBase';

export interface INavbarProps extends IPropBase {
  color?: Color
}

function Navbar(props: INavbarProps): ReactElement<any, any> {
  const className = `navbar ${props.color}`;
  return(
    <>
      <nav className={className} role='navigation' aria-label='main navigation'>
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
  to?: string
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
    : props.to 
      ? <Link className={className} to={props.to!} onClick={() => props.onClick && props.onClick()}>{props.children}</Link>
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

export default Navbar;