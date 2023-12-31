import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html, body {
	font-family: 'Roboto', sans-serif;
	overflow: auto;
	height: 100%;
}
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Global/>
		<App />
	</React.StrictMode>
);