import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 0.5rem;

  button {
    width: 100%;
    padding: 0.8rem 0.5rem;
    background-color: white;
    border: 1px solid rgb(209, 213, 219);
    border-radius: 0.5rem;

    transition: border 0.2s ease-in-out;

    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);

    &:hover {
      border: 2px solid rgba(19, 111, 238, 0.7);
    }
  }
`;
