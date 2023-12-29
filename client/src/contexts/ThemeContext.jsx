import React, { Component, createContext } from 'react'

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#008000', bg: '#f5f5f5' },
        dark: { syntax: '#f5f5f5', ui: '#008000', bg: '#555' }
    }
    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;