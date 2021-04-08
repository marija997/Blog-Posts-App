const InputField = (props) => {
  return (
    <div className={`input-field`}>
      {props.type === "textarea" ? (
        <textarea className={`textarea-form-field`} {...props} />
      ) : (
        <input className={`form-field`} {...props} />
      )}
      <label for={props.name} class="form-label">
        {props.placeholder}
      </label>
      {props.label && <p className={`error-label`}>{props.label}</p>}
    </div>
  );
};

export default InputField;
