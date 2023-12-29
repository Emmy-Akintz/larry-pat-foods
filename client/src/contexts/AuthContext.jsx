import React, { Component, createContext } from 'react'

export const AuthContext = createContext()

class AuthContextProvider extends Component {
    state = {
        isLoggedIn: false
    }
    toggleAuth = () => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn })
    }
    render() {
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;