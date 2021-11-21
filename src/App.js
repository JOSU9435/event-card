import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import EventCard from "./EventCard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/" element = {<EventCard />} />
          <Route path = "/login"/>
          <Route path = "/event/id"/>
          <Route path = "*"/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
