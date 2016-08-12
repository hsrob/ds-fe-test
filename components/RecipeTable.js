import React from 'react';
import { Table } from 'react-bootstrap';

const RecipeTable = ({ recipes, selections, toggleSelectRecipe }) =>  
    <Table bordered hover>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Type</th>
                <th>Ingredients</th>
            </tr>
        </thead>
        <tbody>
            { recipes.map((r) => (
                <tr key={r.name}>
                    <td>
                    <input type="checkbox" 
                        value={selections => selections.indexOf(r.name) > -1} 
                        onChange={ _ => toggleSelectRecipe(r.name)} />
                    </td>
                    <td>{r.name}</td>
                    <td>{r.type}</td>
                    <td>{r.ingredients.join(', ')}</td>
                </tr>
            ))}
        </tbody>
    </Table>;

export default RecipeTable;