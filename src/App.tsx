import { Routes, Route, Navigate } from 'react-router-dom';

import LogoTitle from "./components/LogoTitle/LogoTitle";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import GetProfile from './pages/GetProfile';
import GetUsageType from './pages/GetUsagePlan';
import GetWorkspace from './pages/GetWorkspace';
import Success from './pages/Success';
import { useOnboardContext } from './context/OnboardContext'

function App() {
  const { onboardStage } = useOnboardContext();

  return (
    <div className="App mt-6 lg:mt-9 px-4">
      <LogoTitle />
      {/* currentStage should be less than or equal to stageCount. */}
      <ProgressBar stageCount={4} currentStage={onboardStage} />
      <Routes>
        <Route path='/profileinfo' element={<GetProfile />} />
        <Route path='/workspaceinfo' element={<GetWorkspace />} />
        <Route path='/planinfo' element={<GetUsageType />} />
        <Route path='/success' element={<Success />} />
        <Route path='*' element={<Navigate to='/profileinfo' />} />
      </Routes>
    </div>
  );
}

export default App;
