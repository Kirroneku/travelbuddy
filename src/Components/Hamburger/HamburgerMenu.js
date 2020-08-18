import React from 'react';
import StyledBurger from './styled_burger';
import StyledMenu from './styled_menu';


// className={this.state.current==curLink? "link": "otherlink"}
// onClick={() => this.updateCurrent(curLink)}>
const Menu = ({ open, setOpen, Pages, setPage }) => {
  const style = {
    marginBottom: 0,
    padding: 0
  }

  return (
    <StyledMenu id="ham" open={open}>
        {Pages}
    </StyledMenu>
  )
}

const Burger = ({ open, setOpen }) => {
    return (
      <StyledBurger  open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
}

export {Burger, Menu};