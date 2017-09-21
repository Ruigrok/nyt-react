import React from 'react';

export class Main extends React.Component {
  render() {
    return (
      <main >
        {/* For displaying sub-components */}
        {this.props.children}
      </main>
    );
  }
}


