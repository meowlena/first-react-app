//import logo from './logo.svg';
import kirmet from './shame.gif'
import './App.css';
import First from './components/First'
import UsingParameter from './components/UsingParameter';
import Parent from './components/Parent';
import Card from './components/layout/Card'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={kirmet} className="Kirmet-shame" alt="kirmet" />      
        <h1>Olá, Amaury!</h1>
        <First /> 
      </header>


      <body className="App-body">

        <Card>
          <Parent>
            <ul>
              <li>André</li>
              <li>Ana</li>
              <li>Beatriz</li>
              <li>Carol</li>
            </ul>
          </Parent>
        </Card>

        <Card>
          <h2 className='Title'>Com parâmetros:</h2>
          <UsingParameter titulo="A Milena é um gênio"
            subtitulo="e ela pode provar"
          />

        </Card>
        

      </body>
       
    </div>
  );

}

export default App;
