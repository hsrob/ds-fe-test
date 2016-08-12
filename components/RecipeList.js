import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import map from 'lodash/map';
import { toggleSelectRecipe } from '../ducks/recipeSelect';

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
        const { props: { recipes, selections }, toggleSelection } = this;
        console.log('selections', selections);
        return <Row>
            <Col sm={6}>
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
                                <td><input type="checkbox" value={selections => selections.indexOf(r.name) > -1} onChange={ _ => toggleSelection(r.name)} /></td>
                                <td>{r.name}</td>
                                <td>{r.type}</td>
                                <td>{r.ingredients.join(', ')}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>;
    }
}
export default connect((state) => ({
    recipes: state.recipes,
    selections: state.selections
}))(RecipeList);