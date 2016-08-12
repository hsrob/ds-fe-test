import { createSelector } from 'reselect';
import flatMap from 'lodash/flatMap';
import uniq from 'lodash/uniq';

const getRecipes = state => state.recipes;
const selectedRecipes = state => state.selections;

const mapRecipeIngredientsSorted = recipes => uniq(flatMap(recipes.map(r => r.ingredients))).sort();

export const getSelectedRecipes = createSelector(
    [ getRecipes, selectedRecipes ],
    (recipes, selected) => recipes.filter(r => (selected || []).indexOf(r.name) > -1) || []
)

export const getSelectedRecipeIngredientsSorted = createSelector(
    getSelectedRecipes,
    mapRecipeIngredientsSorted
)

export const getAllRecipeIngredients = createSelector(
    getRecipes,
    mapRecipeIngredientsSorted
)