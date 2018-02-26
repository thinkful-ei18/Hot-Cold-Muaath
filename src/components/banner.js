import React from 'react';
import logo from '../logo.svg';
import NavBar from './navbar';
import './Banner.css'

export default function banner(props){
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hot and Cold</h1>
        <NavBar/>
        </header>
    );
}