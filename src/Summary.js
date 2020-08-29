import React from 'react';
import Total from './Total'

function Summary(props) {
    return (
        <div className="summary__option">
            <div className="summary__option__label">{props.feature}</div>
            <div className="summary__option__value">{props.option}</div>
            <div className="summary__option__cost">{props.dollarFormat.format(props.cost)}</div>
        </div>
    );
}

function MainSummary(props) {
    return (
        <section className="main__summary">
            <h2>Your Cart</h2>
            {Object.entries(props.selected).map((feature, idx) =>
            <Summary
            key={idx}
            feature={feature[0]}
            option={feature[1].name}
            cost={feature[1].cost}
            dollarFormat={props.dollarFormat}
            />
            )}
            <Total
            selected={props.selected}
            dollarFormat={props.dollarFormat} />
        </section>
    )
}

export default MainSummary