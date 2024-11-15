import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log('error ', error);
    return { hasError: true };
  }

  // componentDidCatch(error, info) {
  //   // logErrorToMyService(error, info.componentStack);
  // }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
