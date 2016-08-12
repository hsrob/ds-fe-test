import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import initial from 'lodash/initial';
import last from 'lodash/last';

const IngredientList = ({ ingredients, selections }) => { 
    if(ingredients.length > 0 && selections.length > 0){
        const selectedRecipeText = selections.length > 1 ? `${initial(selections).join(', ')} and ${last(selections)}` : selections[0]; 
        return <div>
            <p className="text-info">You'll need these ingredients to make {selectedRecipeText}</p>
            <ListGroup>
                { ingredients.map(i => <ListGroupItem key={i}>{i}</ListGroupItem>)}            
            </ListGroup>
        </div>
    } 
        
    return <span className="text-muted">No recipes selected</span>
}

export default IngredientList;