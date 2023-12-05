const ConditionalRendering = () => {
  let data = "girl";
  return <div>{data === "boy" ? <h1>Boy</h1> : <h1>Girl</h1>}</div>;
};

export default ConditionalRendering;
