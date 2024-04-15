import './App.css'
import { Typography, Icon, Button } from './components'

function App() {

  return (
    <>
      <div className="text-red-600">Hola</div>
      <Typography type='banner' color='red' text='Whereas recognition of the inherent dignity' />
      <Icon iconName='star' color='red' filled />
      <Button text='Hola mundoooooooooooooooooo' color='orange' icon={{ iconName: 'star', color: 'white' }} />
    </>
  )
}

export default App
