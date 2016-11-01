import * as React from "react";
import "./CounterButton.less";

export interface Props {
    onClick: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
    children?: string;
};

const CounterButton = ({ onClick, children }: Props) => {
    return (
        <button
            className="purpleButton"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CounterButton;
