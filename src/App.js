import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import ProductSingle from "./pages/ProductSingle";

import {
	BrowserRouter as Router,
	Routes,
	Route, 
	Navigate} from "react-router-dom"


function App() {
	const user = true
	
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={ <Home/>}/>
				<Route path='/register' element={user ? <Navigate to='/' replace/> : <Register/>}/>
				<Route path='/login' element={user ? <Navigate to='/' replace /> : <Login/>}/>
				<Route path='/cart' element={ <Cart/>}/>
				<Route path='/products/:category' element={ <ProductList/>}/>
				<Route path='/product/:id' element={ <ProductSingle/>}/>
			</Routes>
		</Router>
	);
}

export default App;
