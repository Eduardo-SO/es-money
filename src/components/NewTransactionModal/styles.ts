import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    color: var(--text-title);
    font-size: 1.5rem;
  }

  input {
    height: 4rem;
    width: 100%;
    padding: 0 1.5rem;
    border-radius: 0.25rem;

    border: 1px solid #333;
    background: var(--shape);

    font-weight: 400;
    font-size: 1rem;

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;

    margin-top: 1.5rem;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    border: 0;

    background: var(--green);
    color: var(text-title);

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(0.85)
    }
  }
`;
