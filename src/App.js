// import './App.css';

import Profile from 'components/Profile';
import user from './data/user.json';

import Statistics from 'components/Statistics';
import statisticalData from 'data/statistical-data.json';

export default function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
    </div>
  );
}
