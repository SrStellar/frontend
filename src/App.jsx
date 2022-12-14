import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AuthRouter from './Routers/AuthRouter';
import DashboardRouter from './Routers/DashboardRouter';
import NProgress from "nprogress";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "nprogress/nprogress.css";
import "./Assets/css/nprogress.css";
import './Assets/js/plugins/nucleo/css/nucleo.css';
import './Assets/js/plugins/@fortawesome/fontawesome-free/css/all.min.css';
import './Assets/css/argon-dashboard.css?v=1.1.1';
import './Assets/js/argon-dashboard.min.js?v=1.1.1';

function App() {
	React.useEffect(() => {
		fetch('/api/afk', {
			credentials: 'include'
		})
			.then(response => response.json())
			.then(json => {
				const script = document.createElement("script");

				script.src = `https://arc.io/widget.min.js#${json.arcio_code}`;
				script.async = true;

				document.body.appendChild(script);
			});
	}), [];

	const location = useLocation();

	React.useEffect(() => {
		NProgress.start();
		NProgress.done();
	}, [location.pathname]);

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Routes>
				<Route path="/" element={<div>Carregando</div>} />
				<Route path="/auth/*" element={<AuthRouter />} />
				<Route path="/dashboard/*" element={<DashboardRouter />} />
			</Routes>
		</>
	);
}

export default App;
