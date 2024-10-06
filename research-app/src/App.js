import AppHeader from './Layout/Header';
import AppSideBar from './Layout/SideBar';
import AppContent from './Layout/Content';
import AppFooter from './Layout/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppSideBar />
      <AppContent />
      <AppFooter />      
    </div>
  );
}

export default App;
