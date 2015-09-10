var wordOrder = require('./word_order');
var expect = require('chai').expect;

describe("wordOrder", function() {
  it("returns true", function() {
    expect(wordOrder()).to.eq(true);
  });
});
