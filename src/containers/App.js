import React, { Component } from 'react'
import CardList from '../components/CardList'
// import { robots } from '../Robots'
import SearchBox from '../components/SearchBox'
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
    constructor()
    {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
     
    
    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>this.setState({robots: users}));
        
    }
 




    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    
    
    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name
            .toLocaleLowerCase()
            .includes(searchfield.toLocaleLowerCase())
        })
        // ternary operator
        return !robots.length ?
            <h1 className='tc'>Loading...</h1>

        :
            (
                <div className='tc'>
                    <h1 className= 'f1'>MyRobots</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                    
                </div>
            )
        }
    }

export default App;