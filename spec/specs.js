describe("romanize", function(){
  it("Converts a number to Roman Numerals", function(){
    expect(romanize(5)).to.equal("V");
  });

  it("Converts a number to Roman Numerals 150 => CL", function(){
    expect(romanize(150)).to.equal("CL");
  });

  it("Converts a number to Roman Numerals 153 => CLIII", function(){
    expect(romanize(153)).to.equal("CLIII");
  });

  it("Converts a number to Roman Numerals 9 => IX", function(){
    expect(romanize(9)).to.equal("IX");
  });

  it("Converts a number to Roman Numerals 99 => XCIX", function(){
    expect(romanize(99)).to.equal("XCIX");
  });

  it("Converts a number to Roman Numerals 499 => CDXCIX", function(){
    expect(romanize(499)).to.equal("CDXCIX");
  });

  it("Converts a number to Roman Numerals 999 => CMXCIX", function(){
    expect(romanize(999)).to.equal("CMXCIX");
  });
});
