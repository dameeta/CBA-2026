function FnCall() {
  const isAvailable = true;
  const name = "FnCall";

  const message = (name) => "Hello from greet function!" + name;
    return <h1>{message("Krish")&& name }, {isAvailable ? "Available" : "Not Available"}</h1>;

  }
  export default FnCall;
  