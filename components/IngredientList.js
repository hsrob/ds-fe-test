import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
const IngredientList = ({ ingredients }) => { 
    return ingredients.length > 0 ? 
        <ListGroup>
            { ingredients.map(i => <ListGroupItem key={i}>{i}</ListGroupItem>)}            
        </ListGroup>
        : <span className="text-muted">No recipes selected</span>
}

export default IngredientList;