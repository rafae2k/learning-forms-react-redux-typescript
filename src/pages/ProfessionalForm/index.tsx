import { Container } from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ProfessionalData } from '../../redux/ducks/professional/types';

const ProfessionalForm: React.FC = () => {
  const INITIAL_STATE: ProfessionalData = {
    curriculum: '',
    description: '',
    role: '',
  };

  const [professional, setProfessional] = useState(INITIAL_STATE);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProfessional((prevState) => ({ ...prevState, [name]: value }));

    console.log(name, value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Header>Dados Profissionais</Header>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <TextArea
            name='curriculum'
            placeholder='13+ year exp in Typescript'
            value={professional.curriculum}
            onChange={handleChange}
          />
          <Input
            label='Role'
            name='role'
            placeholder='React Engineer'
            value={professional.role}
            onChange={handleChange}
          />
          <Input
            label='Role Description'
            name='description'
            placeholder='Emotional Salary'
            value={professional.description}
            onChange={handleChange}
          />
          <Button type='submit'>Enviar</Button>
        </fieldset>
      </form>
    </Container>
  );
};

export default ProfessionalForm;
