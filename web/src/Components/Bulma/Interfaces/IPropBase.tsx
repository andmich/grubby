import { ReactElement } from "react";

export interface IPropBase {
  children?: ReactElement<any, any> | ReactElement<any, any>[] | never[] | string;
  onClick?: Function
}