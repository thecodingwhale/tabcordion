import { Component } from 'react';

class ActiveIndexError extends Error {}

class Tabcordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex,
    };
  }

  componentDidMount() {
    if (this.props.items.length <= this.props.activeIndex) {
      throw new ActiveIndexError(`active index (${this.props.activeIndex}) should not be greater than or equal to total items length (${this.props.items.length}).`);
    }
  }

  setActiveIndex = (index) => {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return this.props.children({
      activeIndex: this.state.activeIndex,
      setActiveIndex: this.setActiveIndex
    });
  }
}

Tabcordion.defaultProps = {
  activeIndex: 0,
}

export default Tabcordion;