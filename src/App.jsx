import './App.css'
import { Route, Routes } from 'react-router-dom';

import Home from '../assets/pages/Home';
import G1tbs from '../assets/pages/G1tbs.jsx';
import G2tbs from '../assets/pages/G2tbs.jsx';
import G3tbs from '../assets/pages/G3tbs.jsx';
import G4tbs from '../assets/pages/G4tbs.jsx';
import G5tbs from '../assets/pages/G5tbs.jsx';
import G6tbs from '../assets/pages/G6tbs.jsx';
import G7tbs from '../assets/pages/G7tbs.jsx';
import G8tbs from '../assets/pages/G8tbs.jsx';
import G9tbs from '../assets/pages/G9tbs.jsx';
import G10tbs from '../assets/pages/G10tbs.jsx';
import G11tbs from '../assets/pages/G11tbs.jsx';
import G12tbs from '../assets/pages/G12tbs.jsx';


function App() {
	return (
		<>	

			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="g1tbs" element={<G1tbs/>}></Route>
				<Route path="g2tbs" element={<G2tbs/>}></Route>
                <Route path="g3tbs" element={<G3tbs/>}></Route>
				<Route path="g4tbs" element={<G4tbs/>}></Route>
				<Route path="g5tbs" element={<G5tbs/>}></Route>
				<Route path="g6tbs" element={<G6tbs/>}></Route>
                <Route path="g7tbs" element={<G7tbs/>}></Route>
				<Route path="g8tbs" element={<G8tbs/>}></Route>
				<Route path="g9tbs" element={<G9tbs/>}></Route>
				<Route path="g10tbs" element={<G10tbs/>}></Route>
                <Route path="g11tbs" element={<G11tbs/>}></Route>
				<Route path="g12tbs" element={<G12tbs/>}></Route>
            </Routes>

		</>
	)
}

export default App;