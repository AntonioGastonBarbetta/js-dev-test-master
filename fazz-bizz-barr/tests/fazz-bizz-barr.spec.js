import { FazzBizzBarr } from "../index";

var assert = require("assert")


describe('FazzBizzBarr', function(){

    it('Test', function () {
        assert.equal(1, FazzBizzBarr(1));
        assert.equal("Fazz", FazzBizzBarr(3));
        assert.equal("Bizz", FazzBizzBarr(5));
        assert.equal("Barr", FazzBizzBarr(7));
        assert.equal(11, FazzBizzBarr(11));
        assert.equal("FazzBizz", FazzBizzBarr(15));
        assert.equal("FazzBarr", FazzBizzBarr(21));
        assert.equal("BizzBarr", FazzBizzBarr(35));
        assert.equal(43, FazzBizzBarr(43));
    });

});