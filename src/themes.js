// themes.js
import { createGlobalStyle } from 'styled-components';

import { darkTheme } from './darkTheme';

export const themes = {
    dark: darkTheme,
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Orbitron', sans-serif;
    background: orange;
    color: ${(props) => props.theme.textColor};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  

  h1 {
    font-size: 36px;
    color: ${(props) => props.theme.primaryTextColor};
    text-shadow: 0 0 10px ${(props) => props.theme.neonGlow};
    margin-bottom: 15px;
  }

  h2 {
    font-size: 24px;
    color: ${(props) => props.theme.secondaryTextColor};
  }

  p {
    font-size: 18px;
    color: ${(props) => props.theme.textColorSecondary};
    line-height: 1.6;
  }

  .input-container input {
    width: 100%;
    padding: 15px;
    margin: 10px 0;
    border: 1px solid ${(props) => props.theme.inputBorder};
    background-color: ${(props) => props.theme.inputBackground};
    color: ${(props) => props.theme.inputColor};
    border-radius: 0; /* Quadrado */
    font-size: 16px;
  }

  .button {
    background: green;
    color: white;
    border: 2px solid ${(props) => props.theme.buttonBorder};
    border-radius: 0; /* Botões quadrados */
    padding: 15px;
    font-size: 18px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.4s ease-in-out;
    box-shadow: 0px 0px 15px ${(props) => props.theme.neonGlow};
  }

  .button:hover {
    background: ${(props) => props.theme.buttonHoverBackground};
    transform: scale(1.02);
    box-shadow: 0px 0px 25px ${(props) => props.theme.neonGlowHover};
  }

  .product-card {
    background-color: ${(props) => props.theme.productCardBackground};
    padding: 20px;
    border-radius: 0; /* Quadrado */
    border: 1px solid ${(props) => props.theme.productCardBorder};
    box-shadow: 0px 4px 12px ${(props) => props.theme.neonGlow};
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .product-card:hover {
    transform: scale(1.03);
    box-shadow: 0px 8px 30px ${(props) => props.theme.neonGlow};
  }

  .product-card h3 {
    font-size: 22px;
    color: ${(props) => props.theme.productCardTitleColor};
  }

  .product-card p {
    color: ${(props) => props.theme.productCardTextColor};
    font-size: 16px;
  }

  .back-button {
    background-color: ${(props) => props.theme.backButtonBackground};
    color: ${(props) => props.theme.backButtonTextColor};
    padding: 10px 15px;
    border-radius: 0; /* Quadrado */
    border: none;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .back-button:hover {
    background-color: ${(props) => props.theme.backButtonHoverBackground};
  }
`;
