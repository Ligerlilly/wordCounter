var wordOrder = require('./word_order');
var expect = require('chai').expect;

describe("wordOrder", function() {
  it("returns world: 2 hello: 1 for input hello world world", function() {
    expect(wordOrder("hello hello world world world")).to.eql([ 'world: 3', 'hello: 2' ]);
  });
});
