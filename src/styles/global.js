import { injectGlobal } from 'emotion'

export default function globalStyles() {
  injectGlobal`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%
  }

  body {
    background-color: #004E64;
    color: #9FFFCB;
    overflow: hidden;
    margin: 0;
  }`
}
