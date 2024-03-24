import css from './LoginForm.module.css';

export const LoginForm = ({ onLogin }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const login = form.elements.login;
    const password = form.elements.password;
    console.log(login.value, password.value);
    onLogin({
      login: login.value,
      password: password.value,
    });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Login
        <input type="text" name="login" className={css.input} />
      </label>
      <label>
        Password
        <input type="password" name="password" className={css.input} />
      </label>

      <button type="submit" className={css.btn}>
        Log in
      </button>
    </form>
  );
};
