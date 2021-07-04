import { FC } from 'react';

import Header from './components/Header';
import Table from './components/Table';
import DRIVERS from './data/drivers.json';
import TRACKS from './data/tracks.json';
import './App.scss';

const App: FC = () => {
  return (
    <>
      <Header title="Dynamic &amp; Responsive Table Component" />
      <Table
        tableData={TRACKS}
        headingColumns={['Name', 'Country', 'Length(km)', 'Number of laps']}
        title="Top F1 tracks"
        breakOn="small"
      />
      <Table
        tableData={DRIVERS}
        headingColumns={[
          '#',
          'Name',
          'Team',
          'Country',
          'Date of birth',
          'Place of birth'
        ]}
        title="F1 Drivers 2020"
      />
    </>
  );
};

export default App;
