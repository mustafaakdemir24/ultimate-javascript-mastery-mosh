const address = {
  street: "Zeki Pasa Cad.",
  city: "Erzincan",
  zipCode: 24182,
};

const showAddress = (address) => {
  for (let entry of Object.entries(address)) console.log(entry);
};

showAddress(address);
