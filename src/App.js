import { Component } from "react";
class App extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            A: 0,
            B : 0 
        };
    }
    changerState = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        this.setState({ [fieldName]: fieldValue })
    }


    render() {
        return (
            <form>
                A :
                <input type='number' value={this.state.A} name="A"
                    onChange={this.changerState} />
                B :
                <input type="number" value={this.state.B} name="B"
                    onChange={this.changerState} />
                <p> <input type='number' value={parseInt(this.state.A) + parseInt(this.state.B)} /></p>

            </form>
        )
    }
}
export default App