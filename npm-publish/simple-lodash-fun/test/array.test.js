const Fun = require("../lib/app.js");
var expect = require("chai").expect;

describe("arrNumSum函数测试:", function () {
  it("result:", function () {
    expect(Fun.arrNumSum([2, 3, -1, 1])).to.be.equal(5);
  });
  it("result:", function () {
    expect(Fun.arrNumSum({})).to.be.equal(undefined);
  });
  it("result:", function () {
    expect(Fun.arrNumSum([1, 3, "looper"])).to.be.equal(4);
  });
});

describe("arrNumMax函数测试:", function () {
  it("result:", function () {
    expect(Fun.arrNumMax([2, 3, -1, 1])).to.be.equal(3);
  });
  it("result:", function () {
    expect(Fun.arrNumSum({})).to.be.equal(undefined);
  });
  it("result:", function () {
    expect(Fun.arrNumMax([2, 3, "looper"])).to.be.deep.equal(NaN);
  });
});

describe("arrNumMin函数测试:", function () {
  it("result:", function () {
    expect(Fun.arrNumMin([2, 3, -1, 1])).to.be.equal(-1);
  });
  it("result:", function () {
    expect(Fun.arrNumMin({})).to.be.equal(Infinity);
  });
  it("result:", function () {
    expect(Fun.arrNumMin([2, 3, "looper"])).to.be.deep.equal(NaN);
  });
});

describe("compact函数测试:", function () {
  it("result:", function () {
    expect(Fun.compact([2, false, "", NaN])).to.be.deep.equal([2]);
  });
  it("result:", function () {
    expect(Fun.compact({})).to.be.deep.equal({});
  });
});
