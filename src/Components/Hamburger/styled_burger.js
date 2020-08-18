import styled from 'styled-components'

const StyledBurger = styled.button`
position: absolute;
top: 0.3em;
left: 1rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;

&:focus {
  outline: none;
}

div {
  width: 2rem;
  height: 0.25rem;
  background: ${({ open }) => open ? '#0D0C1D' : '#0D0C1D'};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  top: 4em;
  transform-origin: 1px;

  :first-child {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  :nth-child(2) {
    opacity: ${({ open }) => open ? '0' : '1'};
    transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
  }

  :nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}
`

export default StyledBurger;