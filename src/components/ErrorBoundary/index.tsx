import { Component, ReactElement } from "react";
import { notification } from "antd";

class ErrorBoundary extends Component<{
  children: ReactElement;
  errComponent: ReactElement;
}> {
  state = {
    hasError: false,
  };

  componentDidMount() {
    addEventListener(
      "error",
      err => {
        notification.error({ message: "异常报错 ===>" + err.message });
      },
      false
    );
  }

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
