import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
} from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputTypeAttribute> {
  label?: string;
  onChange?: (e: any) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  onChange,
  value = '',
}) => {
  return (
    <Container>
      <label>
        {label}
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </label>
    </Container>
  );
};

export default Input;
