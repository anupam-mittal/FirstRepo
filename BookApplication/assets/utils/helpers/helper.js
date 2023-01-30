function getTag(obj) {
  const { key, type, id } = obj;

  const { NUMBER, DATE, BOOLEAN, TEXT } = constantsObj;

  const inputContainerDiv = document.querySelector("#inputContainer");

  let input = null;

  switch (type) {
    case DATE:

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

function onClickAddData() {
  const currData = [];

  const inputObjArr = getInputArray();

  for (let inputObj of inputObjArr) {
    const { key, type, id } = inputObj;

    const inputField = document.querySelector(`#${id}`);

    if (inputField.value) {
      currData.push(inputField.value);
      inputField.value = "";
    }
  }

  if (currData.length != inputObjArr.length) {
    alert("Enter all the fields.");
    return;
  }

  const tableBody = document.querySelector("#tableBody");

  const tableCurrRow = document.createElement("tr");

  for (let data of currData) {
    const tableCurrColumn = document.createElement("td");

    tableCurrColumn.innerText = data;

    tableCurrRow.appendChild(tableCurrColumn);
  }

  tableBody.appendChild(tableCurrRow);

  return;
}
