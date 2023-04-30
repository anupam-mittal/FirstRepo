const { NUMBER, TEXT, DATE, BOOLEAN } = constantsObj;

const inputObjArr = getInputArray();

const TagArray = inputObjArr.map((val, idx, array) => {
  return getTag(val);
});

const inputContainerDiv = document.querySelector("#formContainer");

inputContainerDiv.append(...TagArray);