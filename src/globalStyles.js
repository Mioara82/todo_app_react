import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    box-sizing:border-box;
    margin:0;
    padding:20px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
    width:100%;
    max-width:1440px;
    transition: all 0.50s linear;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    user-select:none;
  }

  h1{
    font-size:24px;
    margin:0;
    font-weight:400;
  }

  h2{
    font-size:18px;
    font-weight:400;
    margin-top:20px;
  }

  h5{
    margin:0;
  }

  p{
    margin:0;
  }

  label{
    margin-top:20px;
    font-size:18px;
    color: ${({ theme }) => theme.text};
  }

  main {
    width:500px;
    padding:50px 20px;
    margin:20px auto;
    border:1px solid ${({ theme }) => theme.boxBorder};
    border-radius:12px;
    position:relative;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
`;
