import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';

// Router
import { useNavigate } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { loadPersonalData } from '../../redux/ducks/personal/actions';
import { PersonalData } from '../../redux/ducks/personal/types';

//Components
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

//Styles | styled-components
import { Container } from './styles';

const PersonalForm: React.FC = (props) => {
  const INITIAL_STATE: PersonalData = {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
  };

  const [personal, setPersonal] = useState(INITIAL_STATE);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonal((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    dispatch(loadPersonalData(personal));

    setPersonal(INITIAL_STATE);

    navigate('/professionalform');
  };

  return (
    <Container>
      <Header>Dados Pessoais</Header>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <Input
            label='Nome'
            name='name'
            placeholder='Pato da Silva'
            value={personal.name}
            onChange={handleChange}
          />
          <Input
            label='Email'
            name='email'
            placeholder='pato@ducks.com'
            value={personal.email}
            onChange={handleChange}
            type={'email'}
          />
          <Input
            label='CPF'
            name='cpf'
            placeholder='123.412.123-44'
            value={personal.cpf}
            onChange={handleChange}
            // pattern={
            //   '([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})'
            // }
          />
          <Input
            label='Endereço'
            name='address'
            placeholder='Rua dos quacks, 132'
            value={personal.address}
            onChange={handleChange}
          />
          <Input
            label='Estado'
            name='state'
            placeholder='SP'
            value={personal.state}
            onChange={handleChange}
          />
          <Input
            label='Cidade'
            name='city'
            placeholder='Patolândia'
            value={personal.city}
            onChange={handleChange}
          />
          <Button type={'submit'}>Enviar</Button>
        </fieldset>
      </form>
    </Container>
  );
};

export default PersonalForm;
