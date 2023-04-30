function getTag(obj) {
  const { key, type, id } = obj;

  const { NUMBER, DATE, BOOLEAN, TEXT } = constantsObj;

//   const inputContainerDiv = document.querySelector("#inputContainer");

  let input = null;

  switch (type) {

    case TEXT:

    case NUMBER:
      input = document.createElement("input");
      input.type = type;

      break;

    default:
      input = document.createElement("input");
      input.type = type;
      break;
  }

  const mainDiv = document.createElement("div");

  if (input === null) return mainDiv;

  input.id = id;

  input.classList.add("inputCls");

  const inputLabel = document.createElement("label");

  inputLabel.htmlFor = id;

  inputLabel.innerText = key;

  mainDiv.classList.add("inputContainerCls");

  mainDiv.appendChild(inputLabel);

  mainDiv.appendChild(input);

  return mainDiv;
}
