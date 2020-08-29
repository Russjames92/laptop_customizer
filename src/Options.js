import React from 'react';

function Options(props) {
    return (
      <div className="feature__item">
        <input
          type="radio"
          id={props.name}
          className="feature__option"
          name={props.feature}
          checked={props.name === props.selected[props.feature].name}
          onChange={() => props.handleUpdate(props.feature, props.index)}
        />
        <label htmlFor={props.name} className="feature__label">
          {props.name} ({props.dollarFormat.format(props.cost)})
        </label>
      </div>
    );
  }

  function Features(props) {
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{props.feature}</h3>
        </legend>
        {props.options.map((option, idx) =>
          <Options
            key={idx}
            name={option.name}
            feature={props.feature}
            cost={option.cost}
            index={idx}
            handleUpdate={props.handleUpdate}
            selected={props.selected}
            dollarFormat={props.dollarFormat}
          />
        )}
      </fieldset>
    );
  }

  function OptionsForm(props) {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {Object.entries(props.features).map((feature, idx) =>
          <Features
            key={idx}
            feature={feature[0]}
            options={feature[1]}
            handleUpdate={props.handleUpdate}
            selected={props.selected}
            dollarFormat={props.dollarFormat}
          />
          )}
      </form>
    );
  }

    export default OptionsForm