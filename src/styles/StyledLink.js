import { Link } from 'react-router-dom'
import styled from 'react-emotion'

export default styled(Link)`
  background-color: ${props => (props.disabled ? '#7AE582' : '#004E64')};
  border: 1px solid #9fffcb;
  color: #00a5cf;
  height: 35px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;  

  :first-child{
  border-radius 5px 0 0 5px;
}
  :last-child{
  border-radius: 0 5px 5px 0;
}
`
