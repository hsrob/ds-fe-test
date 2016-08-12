import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, ListGroup, ListGroupItem, Table } from 'react-bootstrap';

import { clearSelectedRecipes, toggleSelectRecipe } from '../ducks/recipeSelectDuck';
import { applyIngredientFilter, clearIngredientFilter } from '../ducks/ingredientFilterDuck';
import { getAllRecipeIngredients, getIngredientFilteredRecipes, getSelectedRecipeIngredientsSorted } from '../selectors/recipeSelectors';

import RecipeTable from '../components/RecipeTable';
import IngredientList from '../components/IngredientList';

class RecipeList extends React.Component{
    render() {
        const { allIngredients, clearSelectedRecipes, ingredientFilter, recipes, selections, selectedIngredients, /* bound action creators -> */ applyIngredientFilter, clearIngredientFilter, toggleSelectRecipe } = this.props;
        
        return <Row>
            <Col sm={6}>
                <h2>Recipes</h2>
                <div>
                    <label htmlFor="ingredient-filter">Show only recipes containing</label>
                    <select id="ingredient-filter" className="form-control" 
                        value={ingredientFilter} onChange={e => { clearSelectedRecipes(); applyIngredientFilter(e.target.value); }}>
                        <option value="" key="__any">-- Any Ingredients --</option>
                        {allIngredients.map(i => <option value={i} key={i}>{i}</option>)}
                    </select>
                </div>
                <RecipeTable recipes={recipes} selections={selections} toggleSelectRecipe={toggleSelectRecipe} />
            </Col>
            <Col sm={6}>
                <h2>Required Ingredients</h2>
                <IngredientList ingredients={selectedIngredients} selections={selections} />
            </Col>
        </Row>;
    }
}
export default connect((state) => ({
    allIngredients: getAllRecipeIngredients(state),
    ingredientFilter: state.ingredientFilter,
    recipes: getIngredientFilteredRecipes(state),
    selections: state.selections,
    selectedIngredients: getSelectedRecipeIngredientsSorted(state)    
}), { applyIngredientFilter, clearIngredientFilter, clearSelectedRecipes, toggleSelectRecipe })(RecipeList);