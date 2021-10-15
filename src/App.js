import React, { Component } from 'react';
// import Main from './componets/Main/Main';
import Asaid from './componets/Asaid/Asaid';

// import Statistics from './componets/Statistics';

class App extends Component {
  
  render() {
    // const { good, neutral, bad } = this.state;
    // const {state, onLeaveFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this;
    return (
      <>
        {/* <Main >
          <Asaid/>
        </Main> */}
   <Asaid/>
      </>
  );
}
}

export default App;
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }

// onLeaveFeedback = event => {
//   const label = event.target.textContent;
  
//   this.setState(prevState => ({ [label]: (prevState[label] += 1) }));
// };


// countTotalFeedback = () => {
//   const total = Object.keys(this.state).reduce(
//     (acc, value) => acc + this.state[value],
//     0,
//   );

//   return total;
// };

// countPositiveFeedbackPercentage = () => {
//   const percent = Math.round(
//     (this.state.good * 100) / this.countTotalFeedback(),
//   );

//   return percent;
// };
