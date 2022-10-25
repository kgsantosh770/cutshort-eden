import { Routes, Route } from 'react-router-dom';

import LogoTitle from "./components/LogoTitle";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import GetProfile from './pages/GetProfile';
import GetUsageType from './pages/GetUsagePlan';
import GetWorkspace from './pages/GetWorkspace';
import Success from './pages/Success';

function App() {
  return (
    <div className="App mt-9">
      <LogoTitle />
      {/* currentStage should be less than or equal to stageCount. */}
      <ProgressBar stageCount={4} currentStage={1} />
      <Routes>
        <Route path='/profileinfo' element={<GetProfile />} />
        <Route path='/workspaceinfo' element={<GetWorkspace />} />
        <Route path='/planinfo' element={<GetUsageType />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
