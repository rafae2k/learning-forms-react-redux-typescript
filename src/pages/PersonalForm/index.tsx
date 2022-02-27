import { Container } from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';

const PersonalForm: React.FC = () => {
  return (
    <Container>
      <Header>Dados Pessoais</Header>
      <fieldset>
        <Input
          label='Nome'
          placeholder='Pato da Silva'
          value={''}
          onChange={() => {}}
        />
        <Input
          label='Email'
          placeholder='pato@ducks.com'
          value={''}
          onChange={() => {}}
          type={'email'}
        />
        <Input
          label='CPF'
          placeholder='123.412.123-44'
          value={''}
          onChange={() => {}}
          type={'text'}
          // pattern={
          //   '([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})'
          // }
        />
        <Input
          label='Endereço'
          placeholder='Rua dos quacks, 132'
          value={''}
          onChange={() => {}}
          type={'text'}
        />
        <Input label='Estado' placeholder='SP' />
        <Input label='Cidade' placeholder='Patolândia' />
      </fieldset>
    </Container>
  );
};

export default PersonalForm;
