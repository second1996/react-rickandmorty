import { Routes, Route } from 'react-router-dom'

import './assets/styles/main.scss'

import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import Favorite from './pages/Favorite'
import Home from './pages/Home'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="favorite" element={<Favorite />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
