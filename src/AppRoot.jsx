import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

const start = () => {
    const rootElement = <Layout />;
    const rootNode = document.getElementById("root");

    ReactDOM.render(rootElement, rootNode);
}

export default { start };
