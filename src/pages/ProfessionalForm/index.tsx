import { Container } from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

const ProfessionalForm: React.FC = () => {
  return (
    <Container>
      <Header>Dados Profissionais</Header>
      <fieldset>
        <TextArea placeholder='13+ year exp in Typescript' />
        <Input label='Role' placeholder='React Engineer' />
        <Input label='Role Description' placeholder='Emotional Salary' />
      </fieldset>
    </Container>
  );
};

export default ProfessionalForm;
