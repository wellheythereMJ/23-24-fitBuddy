import { useMutation, gql } from '@apollo/client';

const SIGNUP_USER = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
    }
  }
`;

const Signup = () => {
  const [signup, { data, loading, error }] = useMutation(SIGNUP_USER);

  const handleSignup = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      await signup({ variables: { email, password } });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
