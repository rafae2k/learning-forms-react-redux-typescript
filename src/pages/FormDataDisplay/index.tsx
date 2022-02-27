import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Components
import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import { rootReducerState } from '../../redux/ducks';

// Styles | styled-components
import { Container } from './styles';

const FormDataDisplay: React.FC = () => {
  const [formState, setFormState] = useState({});

  const { personal, profissional } = useSelector(
    (state: rootReducerState) => state,
  );

  useEffect(() => {}, []);

  return (
    <Container>
      <Header>Dados Enviados</Header>
      <fieldset>
        <legend>Dados Pessoais</legend>
        <Input label='Nome' placeholder='Pato da Silva' value={personal.name} />
        <Input
          label='Email'
          placeholder='pato@ducks.com'
          value={personal.email}
          type={'email'}
        />
        <Input
          label='CPF'
          placeholder='123.412.123-44'
          value={personal.cpf}
          // pattern={
          //   '([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})'
          // }
        />
        <Input
          label='Endereço'
          placeholder='Rua dos quacks, 132'
          value={personal.address}
        />
        <Input label='Estado' placeholder='SP' value={personal.state} />
        <Input label='Cidade' placeholder='Patolândia' value={personal.city} />
      </fieldset>
      <br />
      <fieldset>
        <legend>Dados Profissionais</legend>
        <TextArea
          placeholder='13+ year exp in Typescript'
          value={profissional.curriculum}
        />
        <Input
          label='Role'
          placeholder='React Engineer'
          value={profissional.role}
        />
        <Input
          label='Role Description'
          placeholder='Emotional Salary'
          value={profissional.description}
        />
      </fieldset>
    </Container>
  );
};

export default FormDataDisplay;
