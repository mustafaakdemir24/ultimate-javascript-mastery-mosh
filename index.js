// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000

// Read, Write, Execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;

let message = myPermission & readPermission ? "Yes" : "No";

console.log(message);
