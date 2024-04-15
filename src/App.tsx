import './App.css'
import { Typography } from './components'
import Icon from './components/Icon/Icon'

function App() {

  return (
    <>
      <div className="text-red-600">Hola</div>
      <Typography type='banner' color='red' text='Whereas recognition of the inherent dignity' />
      <Icon iconName='star' color='red' filled/>
    </>
  )
}

export default App
