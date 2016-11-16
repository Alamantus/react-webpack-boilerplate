import React from 'react';

export class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  processClasses() {
    var classes = 'button';

    if (this.props.classes) {
      classes += ' ' + this.props.classes;
    }

    return classes;
  }

  render() {
    return (
      <a
        id={this.props.id}
        className={this.processClasses()}
        onClick={this.props.action}>
        {this.props.label}
      </a>
    );
  }
}

Button.defaultProps = {
  action: () => console.log('no action bound to button')
}