export default function UserMenu({ email, name }) {
  return (
    <div>
      <p>{email}</p>
      <p>Welcome, {name}</p>
      <button>Logout</button>
    </div>
  );
}
