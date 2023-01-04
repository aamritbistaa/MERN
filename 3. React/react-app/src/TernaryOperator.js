import React from "react";
const TernaryOpeartor = (props) => {
  const a = true;
  let test = a ? "Amrit" : "Not Amrit";
  const b = props.user1;
  const c = props.class1;

  // -------object destructuring-----
  const { user1, class1 } = props;
  // alert(user1)
  console.log('props details', props)
  return (
    <div>
      {" "}
      My name is {test}
      <br />
      Class = {c}
      <br />
      {b}
      <br />
      user detail: {user1} <br />
      user class: {class1}
      <br />
      End of TernaryOpeartor
    </div>
  );
};
export default TernaryOpeartor;
