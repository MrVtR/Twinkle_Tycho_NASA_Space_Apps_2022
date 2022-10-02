import { Home, Learn, Play, Visualizer, Resources } from './Pages/exportPages';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { useLayoutEffect } from 'react';

import './App.css';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  window.watsonAssistantChatOptions = {
    integrationID: '494e2fd7-e592-4717-b0e0-faec28f94af2', // The ID of this integration.
    region: 'au-syd', // The region your integration is hosted in.
    serviceInstanceID: '49a4faab-d925-491e-bbd1-4f7882fdb0e2', // The ID of your service instance.
    onLoad: function (instance) {
      instance.render();
    },
  };
  setTimeout(function () {
    const t = document.createElement('script');
    t.src =
      'https://web-chat.global.assistant.watson.appdomain.cloud/versions/' +
      (window.watsonAssistantChatOptions.clientVersion || 'latest') +
      '/WatsonAssistantChatEntry.js';
    document.head.appendChild(t);
  });
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/learn" element={<Learn />} />
          <Route exact path="/play" element={<Play />} />
          <Route exact path="/visualizer" element={<Visualizer />} />
          <Route exact path="/resources" element={<Resources />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
