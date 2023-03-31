import React from 'react';

export default function Project({projectData}) {
    return (
        <div className="card row m-3">
            <img src={projectData.screenshot} className="card-img-top" alt={projectData.name}></img>
            <div className="card-body">
                <h5 className="card-title">{projectData.name}</h5>
                <div className="d-flex align-items-center justify-content-around">
                    <a href={projectData.liveUrl} className="btn btn-primary">Live</a>
                    <a href={projectData.repoUrl} className="btn btn-primary">Repo</a>
                </div>
            </div>
        </div>
    )
}