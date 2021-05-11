const app = require("./../server");
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const should = chai.should();

const server = require('../server.js')

chai.use(chaiHttp);

describe("API Tests", function() {
  it("TODO: Should test each endpoint of your API");
});

describe("Basic Test Routes", function() {
  it("returns a 200", (done => {

  }));
  it("Get a list of cars", (done => {
    
  }));
  it("Add a car to the DB", (done => {
    
  }));
  it("Update an existing car in the DB", (done => {
    
  }));
  it("Remove an existing car from the DB", (done => {
    
  }));
});
