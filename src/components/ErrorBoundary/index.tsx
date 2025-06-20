import type { ReactElement } from "react";
import { Component } from "react";

class ErrorBoundary extends Component<{
  children: ReactElement;
  errComponent: ReactElement;
}> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, errMsg: error };
  }

  render() {
    const { hasError } = this.state;
    const { children, errComponent } = this.props;

    return hasError ? errComponent : children;
  }
}

export default ErrorBoundary;
