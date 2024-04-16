import './App.css'
import { Icon, Button } from './components'

function App() {

  return (
    <>
      <div className="text-red-600">Hola</div>
      <Icon iconName='star' color='red' filled />
      <Button onClick={() => alert('Has presionado un botón!')} typo={{ text: 'Hola mundoooooooooooooooooo', type: 'title' }} color='orange' icon={{ iconName: 'star', filled: true }} />
    </>
  )
}

export default App
