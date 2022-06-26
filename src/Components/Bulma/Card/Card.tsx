import React, { CSSProperties } from "react";
import { IPropBase } from "../Interfaces/IPropBase";

function Card({ children, style } : { children: any, style?: CSSProperties}) {
  let subComponents = Object.keys(Card).map(key => React.Children.map(children, child => 
    child.type.name === key ? child : null));

  return (
    <>
      <div 
        className='card'
        style={style}>
        {subComponents.map(component => component)}
      </div>
    </>
  );
}

export interface TCardHeaderProps extends IPropBase {
  headerTitle: string
  collapsable?: boolean
}

function Header(props: TCardHeaderProps) {
  return (
    <>
      <header className='card-header'>
        <p className='card-header-title'>
          {props.headerTitle}
        </p>
        {props.collapsable && (
          <button className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        )}
      </header>
    </>
  )
}

function Content({ children } : { children: React.ReactNode }) {
  return (
    <>
      <div className="card-content">
        <div className="content">
          {children}
        </div>
      </div>
    </>
  )
}

function Footer({ children } : { children: React.ReactNode }) {
  return (
    <>
      <footer className="card-footer">
        {children}
      </footer>
    </>
  )
}

function FooterItem({ children } : { children: React.ReactNode }) {
  return (
    <p className="card-footer-item">
      {children}
    </p>
  )
}

Card.Header = Header;
Card.Content = Content;
Card.Footer = Footer;
Card.FooterItem = FooterItem;

export default Card;