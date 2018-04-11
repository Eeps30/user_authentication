import React from 'react';
import auth from '../hoc/auth';

const OpList = props => (
    <div>
        <h1 className="text-center">Operatives List</h1>
        <ol>
            <li>Tank</li>
            <li>Stank</li>
            <li>Bu-dank</li>
            <li>Rank</li>
            <li>Skank</li>
        </ol>
    </div>
)

export default auth(OpList);