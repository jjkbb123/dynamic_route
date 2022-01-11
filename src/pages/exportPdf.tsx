import React from "react";
import excel from "../assets/50.xlsx";
import TestComponent from "./TestComponent";

export default class ExportPef extends React.PureComponent {
    constructor(props: any) {
        super(props);
        this.state = {
            a: "",
        };
    }

    render() {
        const tProps = {
            component: 'span',
        };
        return (
            <div>
                <TestComponent {...tProps} />
            </div>
        );
    }
}
