const { isIDNumberValid } = require("../src/script.js");

describe("validateIDNum", () => {
  it("should return true if the ID number is valid", () => {
    expect(isIDNumberValid("2001014800086")).toBeTruthy();
    expect(isIDNumberValid("2909035800085")).toBeTruthy();
  });
  it("should return true if ID number is 13 characters long", () => {
    expect(isIDNumberValid("20010148000")).toBeFalsy();
    expect(isIDNumberValid("2001014800086789")).toBeFalsy();
  });
  it("should return true if it is only be digits", () => {
    expect(isIDNumberValid("200101480008b")).toBeFalsy();
  });
  it("should return true if the year digits valid", () => {
    expect(isIDNumberValid("2001014800086")).toBeTruthy();
  });
  it("should return true if the month digits valid", () => {
    expect(isIDNumberValid("2001014800086")).toBeTruthy();
  });
  it("should return true if the day digits valid", () => {
    expect(isIDNumberValid("2001014800086")).toBeTruthy();
  });
});
