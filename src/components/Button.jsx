const Button = (props) => {
  return (
    <button type={props.type} onClick={props.onClick}>
      {children}
    </button>
  );
};

export default Button;
