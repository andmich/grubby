import { ReactElement } from "react";
import { IPropBase } from "../Interfaces/IPropBase";

export interface IMenuProps extends IPropBase {

}
function Menu(props: IMenuProps): ReactElement<any, any> {
  return ( 
    <>
      <aside className='menu'>
        {props.children}
      </aside>
    </>
  );
}

export interface IListProps extends IPropBase {
  children?: ReactElement<IListItemProps> | ReactElement<IListItemProps>[] | never[]
}

function List(props: IListProps): ReactElement<any, any> {
  return (
    <>
      <ul className='menu-list'>
        {props.children}
      </ul>
    </>
  );
}

export interface IListItemProps extends IPropBase {
  id: number
  label: string,
  isActive?: boolean
}

function ListItem(props: IListItemProps): ReactElement<any, any> {
  const isActive = props.isActive 
    ? 'is-active'
    : '';
  return (
    <>
      <li key={props.id.toString()}>
        <a className={isActive} onClick={() => props.onClick && props.onClick()}>{props.label}</a>

        {props.children}
      </li>
    </>
  )
}

export interface ILabelProps extends IPropBase {

}

function Label(props: ILabelProps): ReactElement<any, any> {
  return ( 
    <>
      <p className='menu-label'>
        {props.children}
      </p>
    </>
  );
}

Menu.List = List;
Menu.ListItem = ListItem;
Menu.Label = Label;

export default Menu;