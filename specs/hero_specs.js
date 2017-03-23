var Hero = require('../hero');
var assert = require('assert');

describe('Hero', function(){

  var testHero;

  beforeEach(function(){
    testHero = new Hero("Bold Gary", "chips");
  })


  it('should have the name Bold Gary' , function(){
    assert.equal("Bold Gary", testHero.name);
  });

  it('should have health' , function(){
    assert.equal(100, testHero.health);
  });
  it('should have fave food' , function(){
    assert.equal("chips", testHero.favefood);
  })

  it('can talk saying their name' , function(){
    assert.equal("My name is Bold Gary!" , testHero.talk());
  })
})