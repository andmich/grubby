import { IPropBase } from "../Interfaces/IPropBase";

export interface IContainerProps extends IPropBase {
  id?: string
}

function Container(props: IContainerProps) {
  const div = props.id 
    ? <div id={props.id} style={props.style} className='container'>{props.children}</div>
    : <div className='container' style={props.style}>{props.children}</div>

  return (
    <>
      {div}
    </>
  );
}

export default Container;