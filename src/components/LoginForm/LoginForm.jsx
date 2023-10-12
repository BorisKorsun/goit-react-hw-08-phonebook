import { useLogInUserMutation } from 'redux/authApi';

export default function LoginForm() {
  const [logInUser] = useLogInUserMutation();
  const onSubmitForm = e => {
    e.preventDefault();
    const { elements } = e.target.form;

    const user = {
      email: elements.email.value,
      password: elements.password.value,
    };
    console.log(user);
    logInUser(user);
  };
  return (
    <form>
      <label>
        email
        <input name="email" autoComplete="off" type="email" />
      </label>
      <label>
        password
        <input name="password" autoComplete="off" type="password" />
      </label>
      <button onClick={onSubmitForm} type="submit">
        Login
      </button>
    </form>
  );
}
