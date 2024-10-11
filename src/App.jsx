import Router from './router/Router'
import './assets/scss/_colors.scss'
import './App.scss'
import Footer from './components/Footer/Footer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className='App'>
      <Router />
      <Footer/> 
    </div>
  )
}

export default App
