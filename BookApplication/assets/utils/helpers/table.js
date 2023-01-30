function tableCreator() {
  const table = document.createElement("table");
  table.classList.add("tableCls");

  const tableHead = document.createElement("thead");

  for (let inputObj of inputObjArr) {
    const th = document.createElement("th");

    th.innerText = inputObj.key;

    tableHead.appendChild(th);
  }

  table.appendChild(tableHead);

  const tableBody = document.createElement("tbody");

  tableBody.id = "tableBody";

  table.appendChild(tableBody);

  return table;
}
