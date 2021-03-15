import styled from 'styled-components';

export const Container = styled.header`
  background-image: linear-gradient(180deg, var(--blue), var(--background));
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  button {
    height: 3rem;
    padding: 0 2rem;
    border-radius: 0.25rem;

    color: var(--text-title);
    background: var(--blue-light);
    font-size: 1rem;

    transition: filter 0.2s ease;

    :hover {
      filter: brightness(0.85)
    }
  }
`
