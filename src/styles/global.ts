import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --shape: #14111D;
    --background: #070411;

    --blue-light: #6933FF;
    --blue: #5429CC;
    --green: #33CC95;
    --red: #E52E4D;

    --text-title: #FFFFFF;
    --text-body: #CCC8D7;
  }

  * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) { font-size: 93.75% }
    @media (max-width: 720px) { font-size: 87.5% }
  }

  body {
    background: var(--background);
    color: var(--text-body);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(7, 4, 17, 0.5);
  }

  .react-modal-content {
    position: relative;

    width: 100%;
    max-width: 576px;
    padding: 3rem;

    border-radius: 0.25rem;
    border: 2px solid var(--shape);

    outline: 0;
    box-shadow: 0px 0px 30px var(--background);
    background: var(--background);
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
