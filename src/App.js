
import './app.css'
import Header from './components/Header'

function App() {
  const data='Nandakumar'
  return (
    <div>
    <Header data={data}/>
    <p className='hello'>sample {data}</p>
    
    <br/>
    </div>
  );
}

export default App;


