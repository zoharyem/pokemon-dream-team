import './styles/index.css'
import Header from './Components/header'
import TeamBuilder from './Components/teambuilder'
import 'react-tooltip/dist/react-tooltip.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <TeamBuilder/>
    </div>
  );
}

export default App
