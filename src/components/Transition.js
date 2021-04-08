import * as React from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
  SwitchTransition,
} from "react-transition-group";

const timeout = 500;
const getTransitionStyles = {
  entering: {
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 1,
  },
};

export default function Transition({ children, location }) {
  return (
    <>
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{ enter: timeout, exit: timeout }}
        >
          {(status) => (
            <main
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </main>
          )}
        </ReactTransition>
      </TransitionGroup>
    </>
  );
}
