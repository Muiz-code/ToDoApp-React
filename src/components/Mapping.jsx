const Mapping = () => {
  let x = "muizOwolabi";
  let array = ["user1", "user2", "user3"];
  return (
    <div>
      {x}
      {array.map((user) => {
        return <h2>{user}</h2>;
      })}
    </div>
  );
};

export default Mapping;
