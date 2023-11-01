import React, { Component } from "react";

class StickyHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSticky: false
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 150) {
            this.setState({ isSticky: true });
        } else {
            this.setState({ isSticky: false });
        }
    };

    render() {
        const { isSticky } = this.state;
        const headerClass = isSticky ? "header is-sticky" : "header";

        return (
            <div className={headerClass}>
                {this.props.children}
            </div>
        );
    }
}

export default StickyHeader;
