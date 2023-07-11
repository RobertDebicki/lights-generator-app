import './App.css'
import { SingleLight } from './components/SingleLight'
import { Counter } from './components/counter'
import { Text } from './components/text'

function App() {
	return (
		<div>
			<nav className={'nav'}>
				<Text>0 bulbs</Text>
				<Counter text={'rows'} count={0} />
				<Counter text={'columns'} count={0} />
			</nav>
      <div>
        <SingleLight/>
      </div>
		</div>
	)
}

export default App
