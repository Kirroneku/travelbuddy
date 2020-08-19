import styled from 'styled-components'

const StyledBurger = styled.button`
position: absolute;
padding-left: 0.1rem;
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
background: grey;
border-radius: 0px 5px 5px 0px;
top: 4em;

transition: transform 0.3s ease-in-out;
transform: ${({ open }) => open ? 'translateX(max(100%, 600px))' : 'translateX(0px)'};

&:focus {
  outline: none;
}

div {
  top: 0.5em;
  left: -0.5em;
  width: 0.5rem;
  height: 0.25rem;
  background: ${({ open }) => open ? '#0D0C1D' : '#0D0C1D'};
  border-radius: 10px;
  transition: all 0.1s linear;
  position: relative;

  margin-left: 1em;
  transform-origin: 1px;
  
  :first-child {
    margin-bottom: -1em;
    transform: ${({ open }) => !open ? 'rotate(135deg)' : 'rotate(45deg)'};
  }

  :nth-child(2) {
    transform: ${({ open }) => !open ? 'rotate(-135deg)' : 'rotate(-45deg)'};
  }

  :nth-child(3) {
    top: -0.5em;
    left: 0em;
    margin-bottom: -1em;
    transform: ${({ open }) => !open ? 'rotate(135deg)' : 'rotate(45deg)'};
  }

  :nth-child(4) {
    top: -0.5em;
    left: 0em;
    transform: ${({ open }) => !open ? 'rotate(-135deg)' : 'rotate(-45deg)'};
  }
}
`

export default StyledBurger;


  // :nth-child(2) {
  //   opacity: ${({ open }) => open ? '0' : '1'};
  //   transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
  // }