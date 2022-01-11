import React from "react";
import excel from "../assets/50.xlsx";

export default class TestComponent extends React.PureComponent<{
    component: string;
}> {
    static defaultProps = {
        testProps: 123,
    }
    constructor(props: {
        component: React.JSXElementConstructor<string>;
    }) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            component: Tag,
        } = this.props;
        console.log(this.props);
        return (
            <div>
                <Tag>123123</Tag>
            </div>
        );
    }
}
