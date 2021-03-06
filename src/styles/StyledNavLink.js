import { NavLink } from 'react-router-dom'
import styled from 'react-emotion'

export default styled(NavLink)`
  background-color: ${props => (props.disabled ? '#7AE582' : '#004E64')};
  border: 1px solid #9fffcb;
  font-size: 1.2rem;
  height: 50px;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #00a5cf;
  padding: 5px;

  :first-child{
    border-radius 5px 0 0 5px;
  }
  :last-child{
    border-radius: 0 5px 5px 0;
  }
`
