// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. establishes state, will hold our userinput in dynamic storage to hold without refreshing page.
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. this uses setstate to make value the userInput without altering state
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3. destructures userInput so we don't have to type this.state
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. when something in this input changes we call the robot function */}
          onChange={ this.robot }
          {/* 5. take the userInput and assign it as the value*/}
          value={ userInput }
        />

        <div>
          {/* 6. This is a component call for GoodRobot*/}
          <GoodRobot
            {/* 7. passes userInput as userInput to the components so they can access them as a prop */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. everything in a component must be contained in a single div or fragment, this holds everything together so we return one thing only.
      <div>
        <h3>Good Robot</h3>
        {/* 9. This is using the prop userInput passed from 41 to put it into the functionality of GoodRobot*/}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. exports the component so that it can be called in the main app
export default GoodRobot
