const Fun = require("../lib/app.js");
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
    expect(Fun.pseudoArr2Array([])).to.not.be.equal(null);
  });
});

describe("deepClone函数测试:", function () {
  it("result:", function () {
    expect(Fun.deepClone({ name: "looper" })).to.be.deep.equal({
      name: "looper",
    });
  });
  it("result:", function () {
    expect(Fun.deepClone([1, 2])).to.not.be.equal([]);
  });
});

describe("convertDimensional函数测试:", function () {
  it("result:", function () {
    expect(Fun.convertDimensional([3, 4, [5, 6, [7, 8]]])).to.be.deep.equal([
      3, 4, 5, 6, 7, 8,
    ]);
  });
  it("result:", function () {
    expect(Fun.convertDimensional([1, 2])).to.not.be.equal([]);
  });
});

describe("trim函数测试:", function () {
  it("result:", function () {
    expect(Fun.trim("         ")).to.be.equal("");
  });
  it("result:", function () {
    expect(Fun.trim([])).to.be.equal(null);
  });
});

describe("getImgInstance函数测试:", function () {
  it("result:", function () {
    Fun.getImgInstance(
      "https://sponsor-static.segmentfault.com/cdce7ab67d0eb47a6c76ffad6afcdd60111.jpg"
    )
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(111, err);
      });
  });
});
