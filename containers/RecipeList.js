import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import map from 'lodash/map';

import { toggleSelectRecipe } from '../ducks/recipeSelect';
import { getSelectedRecipes, getSelectedRecipeIngredientsSorted, getAllRecipeIngredients } from '../selectors/recipeSelectors';
import IngredientList from '../components/IngredientList';

class RecipeList extends React.Component{
    constructor(props){
        super(props);
        this.toggleSelection = this.toggleSelection.bind(this);
    }
    toggleSelection(name) {
        const { dispatch } = this.props;
        dispatch(toggleSelectRecipe(name));
    }
    render() {
        const { props: { recipes, selections, selectedIngredients }, toggleSelection } = this;
        return <Row>
            <Col sm={6}>
                <h2>Recipes</h2>
                <div>
                    <select >
                    
                    </select>
                </div>
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
                        { map(recipes, (r) => (
                            <tr key={r.name}>
                                <td>
                                <input type="checkbox" 
                                    value={selections => selections.indexOf(r.name) > -1} 
                                    onChange={ _ => toggleSelection(r.name)} />
                                </td>
                                <td>{r.name}</td>
                                <td>{r.type}</td>
                                <td>{r.ingredients.join(', ')}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
            <Col sm={6}>
                <h2>Required Ingredients</h2>
                <IngredientList ingredients={selectedIngredients} />
            </Col>
        </Row>;
    }
}
export default connect((state) => ({
    recipes: state.recipes,
    selections: state.selections,
    selectedIngredients: getSelectedRecipeIngredientsSorted(state),
    allIngredients: getAllRecipeIngredients(state)
}))(RecipeList);