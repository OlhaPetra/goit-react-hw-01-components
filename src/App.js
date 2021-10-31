import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import StatList from './components/statistics/StatList';
import Friends from './components/friends/Friends';
import TransactionHistory from './components/transactions/TransactionHistory';

//json - data
import profileData from './profileData.json';
import statisticsData from './statisticsData.json';
import friendsData from './friendsData.json';
import transactionsData from './transactionsData.json';

function App() {
  return (
    <>
      <Profile data={profileData} />
      <Statistics title="Upload stats">
        <StatList items={statisticsData} />
      </Statistics>
      <Friends items={friendsData} />
      <TransactionHistory items={transactionsData} />
    </>
  );
}

export default App;
