import User from "./User";

const ListUser = (props) => {
  return (
    <div>
      {props.data.map((ele) => (
        <User data={ele} />
      ))}
    </div>
  );
};

export default ListUser;
