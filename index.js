// Factory Function
const createAddress = (street, city, zipCode) => {
  return {
    street,
    city,
    zipCode,
  };
};

// Constructor Function
function Address(street, city, zipCode) {
  (this.street = street), (this.city = city), (this.zipCode = zipCode);
}

const address = new Address("Zeki Pasa Cad.", "Erzincan", "24182");

console.log(address);
