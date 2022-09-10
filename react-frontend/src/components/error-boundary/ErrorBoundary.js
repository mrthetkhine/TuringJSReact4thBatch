import React, { Suspense } from 'react';
export default class ErrorBoundary extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log('getDerivedStateFromError');
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('Component did catch');
        // You can also log the error to an error reporting service
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}