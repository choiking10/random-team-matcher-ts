import { createGlobalStyle } from 'styled-components';
import IconRadio from '@image/blt_radio.png';
import IconRadioOn from '@image/blt_radio_on.png';

const GlobalStyles = createGlobalStyle`
  input[type='radio'] {
    position: absolute;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    border: 0;
    padding: 0;
  }

  input[type='radio'] + label:before {
    content: '';
    display: inline-block;
    margin-right: 8px;
  }

  input[type='radio'] + label:before {
    vertical-align: -4px;
    width: 20px;
    height: 20px;
    background: url(${IconRadio}) 0 0 / 100% auto no-repeat;
  }
  
  input[type='radio']:checked + label:before {
    background-image: url(${IconRadioOn});
  }
`;

export default GlobalStyles;
