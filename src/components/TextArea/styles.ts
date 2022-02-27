import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 0.5rem;

  label {
    display: flex;
    align-items: center;

    width: 100%;
    margin-bottom: 1rem;
  }

  textarea {
    width: 100%;
    margin-left: 0.3rem;

    padding: 0.5rem;

    --tw-border-opacity: 1;
    border-color: rgb(209 213 219 / var(--tw-border-opacity));
    border: 1px solid rgb(209, 213, 219);
    border-radius: 0.75rem /* 6px */;

    resize: vertical;

    &:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));
    }
  }
`;
