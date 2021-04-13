import React from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";

const timeout = 500;
const getTransitionStyles = {
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  entering: { opacity: 1 },
  entered: { opacity: 1 },
};

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {(status) => {
            return (
              <main
                style={{
                  ...getTransitionStyles[status],
                }}
              >
                {children}
              </main>
            );
          }}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}

export default Transition;
