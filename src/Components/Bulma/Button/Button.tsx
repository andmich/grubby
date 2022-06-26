import React, { ReactElement } from 'react';
import { IPropBase } from '../Interfaces/IPropBase';

export enum ButtonType {
  Anchor,
  Form,
  Submit,
  Reset
}

export enum ButtonColor {
  White = 'is-white',
  Light = 'is-light',
  Dark = 'is-dark',
  Black = 'is-black',
  Text = 'is-text',
  Ghost = 'is-ghost',
  Primary = 'is-primary',
  Link = 'is-link',
  Info = 'is-info',
  Success = 'is-success',
  Warning = 'is-warning',
  Danger = 'is-danger'
}

export enum ButtonSize {
  Small = 'is-small',
  Default = '',
  Normal = 'is-normal',
  Medium = 'is-medium',
  Large = 'is-large'
}

export enum ButtonsSize {
  Small = 'are-small',
  Default = '',
  Medium = 'are-medium',
  Large = 'are-large'
}

export interface IButtonProps extends IPropBase {
  type?: ButtonType,
  color?: ButtonColor,
  isLight?: boolean,
  size?: ButtonSize,
  content?: string,
  isOutlined?: boolean,
  isInverted?: boolean,
  isRounded?: boolean,
  isLoading?: boolean,
  isFullWidth?: boolean
}

function getButton(className: string, props: IButtonProps): ReactElement<any, any> {
  switch (props.type) {
    case ButtonType.Anchor:
      return <a 
        className={className} 
        onClick={() => props.onClick && props.onClick()}>{props.content}</a>
    case ButtonType.Form:
      return <button 
        className={className} 
        onClick={() => props.onClick && props.onClick()}>{props.content}</button>
    case ButtonType.Submit:
      return <input 
        className={className} 
        type='submit' 
        value={props.content}
         onClick={() => props.onClick && props.onClick()}/>
    case ButtonType.Reset:
      return <input 
        className={className} 
        type='reset' 
        value={props.content} 
        onClick={() => props.onClick && props.onClick()}/>
    default:
      return <button 
        className={className} 
        onClick={() => props.onClick && props.onClick()}>{props.content}</button>
  }
}

function Button(props: IButtonProps): ReactElement<any, any> {
  const buttonColor = props.color
    ? props.color
    : ButtonColor.Primary;
  const buttonSize = props.size 
    ? props.size 
    : ButtonSize.Default;
  const isOutlined = props.isOutlined
    ? 'is-outlined'
    : '';
  const isInverted = props.isInverted 
    ? 'is-inverted'
    : '';
  const isRounded = props.isRounded
    ? 'is-rounded'
    : '';
  const isLoading = props.isLoading 
    ? 'is-loading'
    : '';
  const isFullWidth = props.isFullWidth 
    ? 'is-fullwidth'
    : '';
  const className = `button ${buttonColor} ${buttonSize} ${isOutlined} ${isInverted} ${isRounded} ${isLoading} ${isFullWidth}`;
  const button = getButton(className, props);

  return (
    <>
      {button}
    </>
  );
}

export interface TButtonsProps extends IPropBase {
  size?: ButtonsSize
}

function Buttons(props: TButtonsProps): ReactElement<any, any> {
  const buttonsSize = props.size 
    ? props.size 
    : ButtonsSize.Default;
  const className = `buttons ${buttonsSize}`;
  return(
    <>
      <div className={className}>
        {props.children}
      </div>
    </>
  )
}

export {
  Button,
  Buttons
};