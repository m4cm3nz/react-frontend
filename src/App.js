import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';

import './App.css';
// Fragment <></>

function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject() {

        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Rafael"
        });

        setProjects([...projects, response.data]);
    }

    return (
        <>
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <Header title="Projects">
                                <ul className="feeds" >
                                    {projects.map(project => <li key={project.id}>{project.title}</li>)}
                                </ul>
                            </Header>
                            <button className="btn btn-success" type="button" onClick={handleAddProject}>Adicionar projeto</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;