import React from 'react';

export default function Header({title, children})
{
    return (
        <header>
            <h1 className="card-title">{title}</h1>           
            {children}
        </header>
    );
}