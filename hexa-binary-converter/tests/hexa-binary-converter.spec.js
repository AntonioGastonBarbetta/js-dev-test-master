import { ConvertToBinary, ConvertToHexa } from "../index";

var assert = require("assert")


describe('Converter', function(){


    it('Convert to hexadecimal', function () {
        assert.equal("f", ConvertToHexa("1111"));
        assert.equal("0", ConvertToHexa("0"));
        assert.equal("5", ConvertToHexa("0101"));
        assert.equal("5ace124", ConvertToHexa("0101101011001110000100100100"));
        assert.equal("32af", ConvertToHexa("0011001010101111"));
    });

    it('Convert to binary', function () {
        assert.equal("1111", ConvertToBinary("f"));
        assert.equal("0", ConvertToBinary("0"));
        assert.equal("101", ConvertToBinary("5"));
        assert.equal("101101011001110000100100100", ConvertToBinary("5ace124"));
        assert.equal("11001010101111", ConvertToBinary("32af"));
    });


});