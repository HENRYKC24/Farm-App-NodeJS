module.exports.replaceVariables = (data, cardHTML) => {
  let filledCard = cardHTML.replace(/{%PRODUCT_NAME%}/g, data.productName);
  filledCard = filledCard.replace(/{%IMAGE%}/g, data.image);
  filledCard = filledCard.replace(/{%QUANTITY%}/g, data.quantity);
  filledCard = filledCard.replace(/{%FROM%}/g, data.from);
  filledCard = filledCard.replace(/{%NUTRIENTS%}/g, data.nutrients);
  filledCard = filledCard.replace(/{%DESCRIPTION%}/g, data.description);
  filledCard = filledCard.replace(/{%PRICE%}/g, data.price);
  filledCard = filledCard.replace(/{%PRODUCT_ID%}/g, data.id);
  if (!data.organic) {
    filledCard = filledCard.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  } else {
    filledCard = filledCard.replace(/{%NOT_ORGANIC%}/g, '');
  }
  return filledCard;
};

// export default replaceVariables;
