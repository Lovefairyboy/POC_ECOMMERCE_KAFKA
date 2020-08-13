
import logo from './logo.svg';
import React from 'react';
import './App.css';
import * as d3 from 'd3';

class App extends React.Component {
  constructor(props){
     super(props);
     this.myRef = React.createRef(); 
  }
  componentDidMount(){
     console.log(this.myRef);
     d3.select(this.myRef.current)
     .append('p')
     .text('Hello d3');
  }
  render(){