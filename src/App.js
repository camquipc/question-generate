
import './App.css';
import QuestionAdmin from './components/questionAdmin';
import Grafic from './components/grafico';
import { Route } from "wouter";
import QuestionUser from './components/questionUsers';


const NUM_QUESTION = 25;


const Admin = () => {
  return (
    <div className="App">
      <div className="content">
          <div className="grafic">
            <Grafic numQuestion={NUM_QUESTION} init="5"/>
          </div>
          <QuestionAdmin numQuestion={NUM_QUESTION}/>
      </div>
    </div>
  );
}

const User = () => {
  return (
    <div className="App">
      <div className="content">
          <div className="grafic">
            <Grafic numQuestion="3" init="1"/>
          </div>
          <QuestionUser numQuestion="3"/>
      </div>
    </div>
  );
}

function App() {
  return (<div>
    <Route path="/admin" component={Admin} />
    <Route path="/" component={User} />
  </div>)
}

export default App;

