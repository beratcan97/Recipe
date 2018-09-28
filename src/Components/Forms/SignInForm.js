import React, { Component } from 'react'

export class SignInForm extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="border">
                    <form>
                        <div className="form-group">
                            <input className="form-control" type="text" name="email" placeholder="Your email" value={this.props.email} onChange={this.props.onChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password" placeholder="Your password" value={this.props.password} onChange={this.props.onChange} />
                        </div>
                    </form>
                    <div className="form-group d-flex justify-content-center">
                        <button className="btn btn-primary" onClick={this.props.onLogin}>Login</button>
                        <button className="btn btn-primary" onClick={this.props.onRegister}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignInForm
