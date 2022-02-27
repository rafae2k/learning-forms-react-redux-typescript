import React from 'react';

import GlobalStyles from './Themes/GlobalStyles';

import FormDataDisplay from './pages/FormDataDisplay';

const App: React.FC = () => {
  return (
    <div className='App'>
      <GlobalStyles />
      <FormDataDisplay />
    </div>
  );
};

export default App;
