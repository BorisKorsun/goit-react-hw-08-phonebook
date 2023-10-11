export default function RegisterForm() {
  const onSubmit = e => {
    e.preventDefault();
    const { elements } = e.target.form;
    const newUser = {
      name: elements.name.value,
      email: elements.email.value,
      password: elements.password.value,
    };
    console.log(newUser);
  };
  return (
    <form>
      <label>
        name
        <input type="text" autoComplete="off" name="name" />
      </label>
      <label>
        email
        <input type="email" autoComplete="off" name="email" />
      </label>
      <label>
        password
        <input type="password" autoComplete="off" name="password" />
      </label>
      <button onClick={onSubmit} type="submit">
        SignUp
      </button>
    </form>
  );
}
