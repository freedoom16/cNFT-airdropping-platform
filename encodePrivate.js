const bs58 = require('bs58');

(async () => {
    const privateKey = Uint8Array.from([
        81, 1, 51, 178, 86, 218, 71, 52, 88, 190, 36, 1, 244, 103, 106, 158, 32, 118, 182, 103, 26, 173, 184, 5, 149,
        42, 22, 235, 202, 127, 134, 31, 10, 101, 29, 50, 78, 13, 178, 130, 175, 186, 229, 40, 161, 246, 61, 168, 111,
        180, 75, 95, 120, 40, 195, 25, 120, 197, 58, 35, 107, 61, 58, 78,
    ]);

    const secretKey = bs58.encode(privateKey);
    console.log(secretKey);
})();
