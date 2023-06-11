import './Dashboard.css'
import MainDash from '../../components/MainDash/MainDash';
import RightSide from '../../components/RigtSide/RightSide';
import Sidebar from '../../components/Sidebar';

function App() {
  return (
    <div className="Dashboard">
      <div className="DashboardGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
