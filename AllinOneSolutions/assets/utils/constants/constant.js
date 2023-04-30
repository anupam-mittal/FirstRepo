const constantsObj = {
  NUMBER: "number",
  DATE: "date",
  BOOLEAN: "boolean",
  TEXT: "text",
};

function getInputArray() {
  const { NUMBER, DATE, BOOLEAN, TEXT } = constantsObj;

  const inputObjArr = [
    {
      id: "SizeContainer",
      key: "Size",
      type: TEXT,
    },
    {
      id: "LocalityContainer",
      key: "Locality",
      type: TEXT,
    },
    {
      id: "PrizeRangeContainer",
      key: "Prize Range",
      type: NUMBER,
    },
    {
      id: "ContactNoContainer",
      key: "Contact No",
      type: NUMBER,
    },
    {
      id: "EmailContainer",
      key: "Email",
      type: TEXT,
    },
    {
      id: "SquareFeetsContainer",
      key: "Square Feets",
      type: TEXT,
    },
    {
      id: "FloorContainer",
      key: "Floor",
      type: TEXT,
    },
    {
      id: "AddressContainer",
      key: "Address",
      type: TEXT,
    },
  ];

  return inputObjArr;
}