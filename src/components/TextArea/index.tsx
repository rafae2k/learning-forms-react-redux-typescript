import { TextareaHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  onChange?: (e: any) => void;
}

const TextArea: React.FC<InputProps> = ({
  label,
  placeholder,
  onChange,
  value = '',
}) => {
  return (
    <Container>
      <label>
        {label}
        <textarea
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          rows={3}
        />
      </label>
    </Container>
  );
};

export default TextArea;
