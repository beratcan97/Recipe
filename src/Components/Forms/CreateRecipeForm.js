import React, { Component } from 'react'

export class CreateRecipeForm extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="border">
                    <form onSubmit={this.props.CreateRecipe}>
                        <div className="form-group">
                            <input type="text" name="contentHeader" placeholder="Skriv rubrik här!" value={this.props.ContentHeader} onChange={this.props.OnChange} />
                        </div>
                        <div className="form-group">
                            <textarea type="text" name="content" placeholder="Skriv recept här!" value={this.props.Content} onChange={this.props.OnChange} />
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <input className="btn btn-success" type="submit" value="Ladda up!" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateRecipeForm
