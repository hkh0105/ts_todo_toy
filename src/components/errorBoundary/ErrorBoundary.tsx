import type { ErrorInfo, ReactNode, ReactElement } from 'react';
import React, { Component } from 'react';
interface Props {
  children?: ReactNode;
}

interface State {
  error: Error | null;
  info: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  state = {
    error: null,
    info: null,
  };

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.setState({ error, info });
  }

  render(): ReactNode {
    const { error } = this.state;
    if (error) {
      return <div>{error}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
