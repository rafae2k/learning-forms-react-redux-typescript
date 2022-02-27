import React from 'react';

import GlobalStyles from './Themes/GlobalStyles';

import FormDataDisplay from './pages/FormDataDisplay';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';

const App: React.FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<PersonalForm />} />
          <Route path='/professionalform' element={<ProfessionalForm />} />
          <Route path='/formdisplay' element={<FormDataDisplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
