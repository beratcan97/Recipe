import React, { Component } from 'react'
import firebase from '../../firebase.js';
import Recipe from '../Images/Recipe.jpg';

class ListRecipe extends Component {
    state = {
        recipeHolder: {},
        popUpClass: "displayNon",
        popUpHeader: "",
        popUpContent: ""
    }

    componentDidMount() {
        firebase.database().ref(`Recipe`).orderByChild('Timestamp').on('value', (snapshot) => {
            this.setState({ recipeHolder: snapshot.val() });
        });
    }

    pushMessage = () => {
        firebase.database().ref(`Recipe`).push("Hampus was here!");
        console.log("Added message!");
    }

    removeMessage = (item) => {
        firebase.database().ref(`Recipe/${item}`).remove();
        console.log("Removed message!");
    }

    popUp = (recipeHolder) => {
        if (this.state.popUpClass === "displayNon") {
            this.setState({ popUpClass: "popUp" });
            this.setState({ popUpHeader: recipeHolder.Header });
            this.setState({ popUpContent: recipeHolder.Content });
        }
        else {
            this.setState({ popUpClass: "displayNon" });
        }
    }

    baked = (item) => {
        const baked = this.state.recipeHolder[item].Baked + 1;
        firebase.database().ref(`Recipe/${[item]}/Baked`).set(baked);
    }

    sortRecipes = (itemToSort) => {
        const arrayToSort = this.state.recipeHolder;
        let keysArray = [];
        for (let key in arrayToSort) {
            keysArray.push(key);
        }

        let i, m, j;
        for (i = -1; ++i < keysArray.length;) {
            for (m = j = i; ++j < keysArray.length;) {
                if (arrayToSort[keysArray[m]][itemToSort] > arrayToSort[keysArray[j]][itemToSort]) m = j;
            }
            [arrayToSort[keysArray[m]], arrayToSort[keysArray[i]]] = [arrayToSort[keysArray[i]], arrayToSort[keysArray[m]]];
        }

        if (itemToSort === "Header") {
            this.setState({ recipeHolder: arrayToSort });
        }
        else {
            let reverseArray = [];
            for (let i = keysArray.length - 1; i >= 0; i--) {
                reverseArray.push(arrayToSort[keysArray[i]]);
            }
            this.setState({ recipeHolder: reverseArray });
        }


        firebase.database().ref(`Recipe`).set(this.state.recipeHolder).then();
    }
    shortContent = (item) => {
        if (item.length > 100) {
            return (item.substring(0, 50) + "...")
        }
        else {
            return item;
        }
    }

    render() {
        let list = [];
        for (let item in this.state.recipeHolder) {
            list.push(
                <div className="card cardContainer" key={item}>
                    <img className="card-img-top" src={Recipe} alt={this.state.recipeHolder[item].Header} />
                    <div className="card-body">
                        <h3>{this.state.recipeHolder[item].Header}</h3>
                        <p>{this.shortContent(this.state.recipeHolder[item].Content)}</p>
                        <div>
                            <button className="btn btn-danger" onClick={() => this.removeMessage(item)}>Delete</button>
                            <button className="btn btn-success" onClick={() => this.baked(item)}>Baked {this.state.recipeHolder[item].Baked}</button>
                        </div>
                        <button className="btn btn-info" onClick={() => this.popUp(this.state.recipeHolder[item])}>Read more!</button>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <h1>Sort result</h1>
                    <button className="btn btn-primary" onClick={() => this.sortRecipes("Header")} >Title</button>
                    <button className="btn btn-primary" onClick={() => this.sortRecipes("Timestamp")} >Latest</button>
                    <button className="btn btn-primary" onClick={() => this.sortRecipes("Baked")} >Baked</button>
                </div>
                <div className={this.state.popUpClass + " flex-md-column"} >
                    <button className="btn btn-danger float-sm-right" onClick={this.popUp}>Close</button>
                    <h1>{this.state.popUpHeader}</h1>
                    <p>{this.state.popUpContent}</p>
                </div>
                <div>
                    {list}
                </div>

            </div>
        )
    }
}

export default ListRecipe
