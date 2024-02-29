import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import DonationList from './DonationList';
import DonateForm from './DonateForm';
import Summary from './Summary';
import Home from './Home';
import { DonationProvider } from './Context/DonationContext';
import { DollarProvider } from './Context/DollarContext';

function App() {
  return (
    <div className="App">
      {/* PROVIDERבקומפוננטה אפ אטתי כל המקומות שאני רוצה להתמש בקונטקס שבניתי עם ה    */}
        <DonationProvider>
          <DollarProvider>
            <NavBar />
            <Routes>
              <Route path='/Home' element={<Home />} />
              <Route path='/donationList' element={<DonationList />} />
              <Route path='/Donations' element={<DonationList />} />
              <Route path='/form' element={<DonateForm />} />
              <Route path='/Summary' element={<Summary />} />
              <Route path='*' element={<Home />} />
            </Routes>
          </DollarProvider>
        </DonationProvider>
    </div>
  );
}

export default App;