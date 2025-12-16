import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TentangPage from './pages/TentangPage';
import RefleksiPage from './pages/RefleksiPage';
import PembelajaranPage from './pages/PembelajaranPage';
import PencapaianPage from './pages/PencapaianPage';
import KontakPage from './pages/KontakPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <ScrollToTop /> {/* <-- scroll otomatis ke atas */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang" element={<TentangPage />} />
            <Route path="/refleksi" element={<RefleksiPage />} />
            <Route path="/pembelajaran" element={<PembelajaranPage />} />
            <Route path="/pencapaian" element={<PencapaianPage />} />
            <Route path="/kontak" element={<KontakPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
