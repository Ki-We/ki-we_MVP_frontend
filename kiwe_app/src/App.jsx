/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import SelectLanguagePage from './pages/SelectLanguagePage';
// import LoadingPage from './pages/LoadingPage';
//import MainPage from './pages/MainPage';
import ProfileSettingPage from './pages/ProfileSettingPage';
import LoginPage from './pages/LoginPage';
import SelectTopic from './pages/SelectTopic';
import InterestingLangPage from './pages/InterestingLangPage';
import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router-dom';
// import Container from '@mui/material/Container';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/start/selectlanguage" element={<SelectLanguagePage />} />
        <Route path="/start/login" element={<LoginPage />} />
        <Route path="/start/profilesetting" element={<ProfileSettingPage />} />
        <Route path="/start/selecttopic" element={<SelectTopic />} />
        <Route path="/start/select-interesting-lang" element={<InterestingLangPage />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
