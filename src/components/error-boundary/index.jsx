import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true }; // Update state to show fallback UI
  }
  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error, info); // Log error
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>; // Fallback UI
    }
    return this.props.children; // Normal UI
  }
}

export default ErrorBoundary;
