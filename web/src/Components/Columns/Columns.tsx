import { ReactElement } from "react";
import { IPropBase } from "../Bulma/Interfaces/IPropBase";

export enum ColumnSizeFraction {
  Full = 'is-full',
  FourFifths = 'is-four-fifths',
  ThreeQuarters = 'is-three-quarters',
  TwoThirds = 'is-two-thirds',
  ThreeFifths = 'is-three-fifths',
  Half = 'is-half',
  TwoFifths = 'is-two-fifths',
  OneThird = 'is-one-third',
  OneQuarter = 'is-one-quarter',
  OneFifth = 'is-one-fifth'
}

export enum ColumnSizeTwelve {
  One = 'is-1',
  Two = 'is-2',
  Three = 'is-3',
  Four = 'is-4',
  Five = 'is-5',
  Six = 'is-6',
  Seven = 'is-7',
  Eight = 'is-8',
  Nine = 'is-9',
  Ten = 'is-10',
  Eleven = 'is-11',
  Twelve = 'is-12',
}

export enum ColumnOffsetFraction {
  Full = 'is-offset-full',
  FourFifths = 'is-offset-four-fifths',
  ThreeQuarters = 'is-offset-three-quarters',
  TwoThirds = 'is-offset-two-thirds',
  ThreeFifths = 'is-offset-three-fifths',
  Half = 'is-offset-half',
  TwoFifths = 'is-offset-two-fifths',
  OneThird = 'is-offset-one-third',
  OneQuarter = 'is-offset-one-quarter',
  OneFifth = 'is-offset-one-fifth'
}

export enum ColumnOffsetTwelve {
  One = 'is-offset-1',
  Two = 'is-offset-2',
  Three = 'is-offset-3',
  Four = 'is-offset-4',
  Five = 'is-offset-5',
  Six = 'is-offset-6',
  Seven = 'is-offset-7',
  Eight = 'is-offset-8',
  Nine = 'is-offset-9',
  Ten = 'is-offset-10',
  Eleven = 'is-offset-11',
  Twelve = 'is-offset-12',
}

export interface IColumns extends IPropBase {

}

function Columns(props: IColumns): ReactElement<any, any> {
  return (
    <>
      <div className='columns'>
        {props.children}
      </div>
    </>
  );
}

export interface IColumn extends IPropBase {
  isMobile?: boolean
  isNarrow?: boolean
  Size?: ColumnSizeFraction | ColumnSizeTwelve
  Offset?: ColumnOffsetFraction | ColumnOffsetTwelve
}

function Column(props: IColumn): ReactElement<any, any> {
  const isMobile = props.isMobile
    ? 'is-mobile'
    : '';
  const isNarrow = props.isNarrow
    ? 'is-narrow'
    : '';
  const size = props.Size 
    ? props.Size
    : '';
  const offset = props.Offset
    ? props.Offset
    : '';

  const className = `column ${isMobile} ${isNarrow} ${size} ${offset}`;
  return(
    <>
      <div className={className}>
        {props.children}
      </div>
    </>
  );
}

Columns.Column = Column;

export default Columns;