import Button from "./Button";

const Login = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.name, e.target.value);
  };

  const loginMessage =
    props.messsage !== "" ? (
      <div className="d-flex justify-content-end">
        <div className="row row-cols-1 row-cols-md-3 justify-content-end align-items-center p-2">
          <div className="col-md-auto p-2">
            <p>{props.message}</p>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      <form className="d-flex justify-content-end" onSubmit={props.submit}>
        <div className="login-container row row-cols-1 row-cols-md-3 justify-content-end align-items-center p-2">
          <div className="col-md-auto p-2">
            <input
              className="form-control"
              type="text"
              name="userName"
              placeholder="Användarnamn"
              value={props.loginData.userName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-auto p-2">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Lösenord"
              value={props.loginData.password}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-auto p-2">
            <Button className="btn btn-primary" type="submit">
              Logga in
            </Button>
          </div>
        </div>
      </form>
      {loginMessage}
    </>
  );
};

export default Login;
