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
      id: "ISBNContainer",
      key: "ISBN",
      type: NUMBER,
    },
    {
      id: "AuthorNameContainer",
      key: "Author Name",
      type: TEXT,
    },
    {
      id: "BookNameContainer",
      key: "Book Name",
      type: TEXT,
    },
    {
      id: "PageNoContainer",
      key: "Page No",
      type: NUMBER,
    },
    {
      id: "PriceContainer",
      key: "Price",
      type: NUMBER,
    },
    {
      id: "DateofPublishContainer",
      key: "Date of Publish",
      type: DATE,
    },
    {
      id: "StockContainer",
      key: "Stock",
      type: TEXT,
    },
    {
      id: "DiscountContainer",
      key: "Discount",
      type: NUMBER,
    },
  ];

  return inputObjArr;
}
