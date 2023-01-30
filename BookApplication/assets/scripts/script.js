const { NUMBER, TEXT, DATE, BOOLEAN } = constantsObj;

const inputObjArr = getInputArray();

const TagArray = inputObjArr.map((val, idx, array) => {
  return getTag(val);
});

const inputContainerDiv = document.querySelector("#inputContainer");

inputContainerDiv.append(...TagArray);

const tableContainerDiv = document.querySelector(".tableContainer");
const table = tableCreator();

tableContainerDiv.appendChild(table);

const saveButton = document.querySelector(".saveBtn");

saveButton.addEventListener("click", onClickAddData);
