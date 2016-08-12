import React from 'react';
import reduce from 'lodash/reduce';
import { Table } from 'react-bootstrap';

const RecipeTable = ({ recipes, selections, toggleSelectRecipe }) => {
    const recipeSelections = reduce(recipes, (accum, rcp) => {
        accum[rcp.name] = selections.indexOf(rcp.name) > -1;
        return accum;
    }, {});
    
    return <Table bordered hover>
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
                        checked={ recipeSelections[r.name] }
                        onChange={ _ => toggleSelectRecipe(r.name)} />
                    </td>
                    <td>{r.name}</td>
                    <td>{r.type}</td>
                    <td>{r.ingredients.join(', ')}</td>
                </tr>
            ))}
        </tbody>
    </Table>;
}
    

export default RecipeTable;