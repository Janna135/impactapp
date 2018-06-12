import { injectGlobal } from 'emotion'

export default function globalStyles() {
  injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #004E64;
    color: #9FFFCB;
    height: 100vh;
    overflow: hidden;
  }`
}
