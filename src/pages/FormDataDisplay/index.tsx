import { Container } from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

const FormDataDisplay: React.FC = () => {
  return (
    <Container>
      <Header>Dados Enviados</Header>
      <fieldset>
        <legend>Dados Pessoais</legend>
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
      <br />
      <fieldset>
        <legend>Dados Profissionais</legend>
        <TextArea placeholder='13+ year exp in Typescript' />
        <Input label='Role' placeholder='React Engineer' />
        <Input label='Role Description' placeholder='Emotional Salary' />
      </fieldset>
    </Container>
  );
};

export default FormDataDisplay;
