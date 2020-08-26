import React from 'react';

type SpinnerProps = {
    text?: string,
    spinner?: 'border' | 'grow',
    status: boolean,
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
};

export const Spinner: React.FunctionComponent<SpinnerProps> = (props: SpinnerProps) => {
    return <div className="text-center">
        {
            props.status &&
            <div className={`spinner-${props.spinner} text-${props.color}`} role="status">
                <span className="sr-only">{props.text}</span>
            </div>
        }
    </div>
}

Spinner.defaultProps = {
    text: 'Loading...',
    spinner: "border",
    color: "primary"
}