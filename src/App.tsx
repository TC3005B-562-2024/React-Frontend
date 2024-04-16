import './App.css'
import { Typography, Icon, Button } from './components'

function App() {

  return (
    <>
      <div className="text-red-600">Hola</div>
      <Typography type='banner' color='red' text='Whereas recognition of the inherent dignity' />
      <Icon iconName='star' color='red' filled />
      <Button onClick={() => alert('Has presionado un botón!')} typo={{ text: 'Hola mundoooooooooooooooooo', type: 'title' }} color='orange' icon={{ iconName: 'star', filled: true }} />
    </>
  )
}

export default App
