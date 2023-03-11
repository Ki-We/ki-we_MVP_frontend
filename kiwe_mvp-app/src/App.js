import './App.css';
import SelectLanguagePage from './pages/SelectLanguagePage';
import LoadingPage from './pages/LoadingPage';
//import MainPage from './pages/MainPage';
import ProfileSettingPage from './pages/ProfileSettingPage';
import LoginPage from './pages/LoginPage';
import SelectTopic from './pages/SelectTopic';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';



function App() {
  return (
    <BrowserRouter>
      <Container fixed>
            <div id="page-body">
              <Routes>
                <Route path="/start/selectlanguage" element={<SelectLanguagePage/>}/>
                <Route path="/start/login" element={<LoginPage/>}/>
                <Route path="/start/profilesetting" element={<ProfileSettingPage/>}/>
                <Route path="/start/selecttopic" element={<SelectTopic/>}/>
              </Routes>
            </div>
      </Container>
    </BrowserRouter>
    
    );
}


export default App;
