import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/layout/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Success from './components/layout/Success';
import Presentation from './components/presentation/Presentation';
import ResetPassword from './components/auth/ResetPassword';
import NotFound from './components/layout/NotFound';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/success" element={<Success />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
