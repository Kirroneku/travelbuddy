import styled from 'styled-components'

const StyledBurger = styled.button`
position: fixed;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background: transparent;
border: 0;
cursor: pointer;
padding: 0;
z-index: 10;
border-radius: 0px 5px 5px 0px;
top: 3.7em;
transition: transform 0.3s ease-in-out;
transform: ${({ open }) => open ? 'translateX(max(100%, 274px))' : 'translateX(4px)'};

&:focus {
  outline: none;
}

div {
  top: 0.5em;
  left: -0.5em;
  width: 0.5rem;
  height: 0.25rem;
  background: ${({ open }) => open ? '#0D0C1D' : '#0D0C1D'};
  transition: all 0.1s linear;
  position: relative;
  background: rgb(123 123 123) ;

  margin-left: 1em;
  transform-origin: 1px;
  
  :first-child {
    margin-bottom: -1em;
    transform: ${({ open }) => !open ? 'rotate(135deg)' : 'translateX(-4px) rotate(45deg)'};
  }

  :nth-child(2) {
    transform: ${({ open }) => !open ? 'rotate(-135deg)' : 'translateX(-4px) rotate(-45deg)'};
  }

  :nth-child(3) {
    top: -0.5em;
    left: 0em;
    margin-bottom: -1em;
    transform: ${({ open }) => !open ? 'rotate(135deg)' : 'translateX(-4px) rotate(45deg)'};
  }

  :nth-child(4) {
    top: -0.5em;
    left: 0em;
    transform: ${({ open }) => !open ? 'rotate(-135deg)' : 'translateX(-4px) rotate(-45deg)'};
  }

  :nth-child(5) {
    border-radius: 4px;
    margin: 0;
    left: 0em;
    top: 0.15em;
    position: absolute;
    height: 1.5em;
    width: 1.5em;
    background: none;
    z-index: 1;
    &:hover {
      background: rgba(200, 200, 200, 0.4);
    }
  }
}
`

export default StyledBurger;


  // :nth-child(2) {
  //   opacity: ${({ open }) => open ? '0' : '1'};
  //   transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
  // }