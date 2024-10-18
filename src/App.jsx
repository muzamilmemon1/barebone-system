import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Success from './components/Success';
import LearnMore from './components/LearnMore';
import Presentation from './components/Presentation';
import ResetPassword from './components/ResetPassword';
import NotFound from './components/NotFound';

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
          <Route path="/learn-more" element={<LearnMore />} /> 
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} /> 
          </Routes>
      </div>
    </Router>
  );
}

export default App;