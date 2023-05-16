import React from 'react';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Router from './Router';

const App = () => {
	return (
		<>
			<Header />

			<Router />

			<Footer />
		</>
	);
};

export default App;
