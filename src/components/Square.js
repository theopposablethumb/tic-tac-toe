import React from 'react';

const Square = (props) => {
  
  const empty = () => {return props.value ? `fg${props.value}` : `hv${props.turn}`};
  
  const winner = () => {
    if (props.win) return props.win.includes(props.num) ? `bg${props.value}` : null};

  return <button type="button" className={`tile ${empty()} ${winner()}`} onClick={(e) => {e.preventDefault(); props.playerInput(props.num)}}>{props.value}</button>
}

export default Square;