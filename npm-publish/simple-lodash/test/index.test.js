const Fun = require("../lib/main.js");
var expect = require("chai").expect;

describe("accurateType函数测试:", function () {
  it("result:", function () {
    expect(Fun.accurateType([])).to.be.equal("Array");
  });
  it("result:", function () {
    expect(Fun.accurateType([])).to.not.be.equal("Object");
  });
});

describe("pseudoArr2Array函数测试:", function () {
  it("result:", function () {
    expect(Fun.pseudoArr2Array([])).to.be.deep.equal([]);
  });
  it("result:", function () {
    expect(Fun.accurateType([])).to.not.be.equal(null);
  });
});

describe("deepClone函数测试:", function () {
  it("result:", function () {
    expect(Fun.deepClone({ name: "looper" })).to.be.deep.equal({
      name: "looper",
    });
  });
  it("result:", function () {
    expect(Fun.accurateType([1, 2])).to.not.be.equal([]);
  });
});
