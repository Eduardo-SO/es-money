import styled from 'styled-components';
import { darken, transparentize } from 'polished'

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

    border: 1px solid #222;
    background: var(--background);
    color: var(--text-body);

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


export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin: 1rem 0;
`

interface RadioBoxProps {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4rem;
  border: 1px solid #222;
  border-radius: 0.25rem;

  background: ${props => props.isActive
   ? transparentize(0.9, colors[props.activeColor])
   : 'transparent'
   };

  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${darken(0.11, '#333')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title)
  }
`
