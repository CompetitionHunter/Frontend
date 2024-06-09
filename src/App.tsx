import "./App.css";
import { RecoilRoot } from "recoil";
import CharacterList from "./pages/CharacterList";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";
import Landing from "./pages/Landing";
import Test from "./pages/Test";
import Manage from "./Manage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bubbles from "./components/layout/Bubbles";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/character-list" element={<CharacterList />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/test" element={<Test />} />
            <Route path="/manage" element={<Manage />} />
          </Routes>
        </Router>
        <Bubbles />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
