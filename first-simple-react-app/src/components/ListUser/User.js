const User = (props) => {
  console.log(props);
  return (
    <div>
      <label><h2>Username:</h2> {props.data.username}</label>
      <label><h3>Age:</h3> {props.data.age}</label>
    </div>
  );
};

export default User;
