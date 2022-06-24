'use strict';
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { like: 'like' };
    this.test = this.test.bind(this);
  }

  componentDidMount() {
    console.log(123);
  }

  test() {
    debugger;
    this.setState({
      like: this.state.like === 'unlike' ? 'like' : 'unlike',
    });
  }

  render() {
    return <a onClick={this.test}>{this.state.like}</a>;
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(React.createElement(LikeButton), domContainer);
// ReactDOM.render(React.createElement('a', {}, 'LikeButton'), domContainer);
