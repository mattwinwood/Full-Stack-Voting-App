import React from "react";
import PropTypes from "prop-types";

export default class ContestPreview extends React.Component {

    handleClick = () => {
        console.log("this.state.contest", this.props.categoryName);
    }

    render() {
        return (
            <div className="ContestPreview" onClick={this.handleClick}>
                <div className="category-name">
                    {this.props.categoryName}
                </div>
                <div className="contest-name">
                    {this.props.contestName}
                </div>
            </div>
        );
    }
}
ContestPreview.propTypes = {
    categoryName: PropTypes.string.isRequired,
    contestName: PropTypes.string.isRequired
}

