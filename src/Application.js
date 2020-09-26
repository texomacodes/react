import React, {Component} from 'react';
import Highscore from './highscore';

class Application extends Component {
    constructor (props) {
        super(props);

        this.state = {
            count: 0,
            overTen: false
        }
    }

    handledClick = () => {
        this.setState({count: this.state.count + 1});
    }

    componentDidUpdate(props, state) {
        if(this.state.count > 10 && this.state.count !== state.count && !this.state.overTen) {
            console.log("Over ten")
            this.setState({overTen: true})
        }
    }

    render() {
        let {count} = this.state;

        return (
            <div id="name">
                <h1>You have clicked the button <span data-value={count}>{count}</span> times</h1>
                <Highscore 
                    overTen={this.state.overTen}
                />
                <span><button onClick={() => this.handledClick()}>Click Me</button></span>
            </div>
        );
    }
}

export default Application;