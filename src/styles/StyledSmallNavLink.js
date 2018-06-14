import { NavLink } from 'react-router-dom'
import styled from 'react-emotion'

export default styled(NavLink)`
  background-color: ${props => (props.disabled ? '#7AE582' : '#004E64')};
  border: 1px solid #9fffcb;
  font-size: 1rem;
  font-weight: bold;
  height: 50px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #00a5cf;

  :first-child{
    border-radius 5px 0 0 5px;
  }
  :last-child{
    border-radius: 0 5px 5px 0;
  }
`
