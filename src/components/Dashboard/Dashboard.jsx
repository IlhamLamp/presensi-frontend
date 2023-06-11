import './Dashboard.css'
import Sidebar from './components/Sidebar';
import Home from './pages/Home/Home';
import RightSide from './components/RightSide/RightSide';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboardGlass">
        <Sidebar/>
        <Home/>
        <RightSide/>
      </div>
    </div>
  );
}

export default Dashboard;
