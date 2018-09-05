var Wallet = require("nativescript-wallet").Wallet;
var wallet = new Wallet();

describe("greet function", function() {
    it("exists", function() {
        expect(wallet.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(wallet.greet()).toEqual("Hello, NS");
    });
});