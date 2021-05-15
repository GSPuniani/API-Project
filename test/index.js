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
  // Describe what you are testing
  it("Should have home page", function(done) {
    // Describe what should happen
    // In this case we test that the home page loads
    chai
      .request(app)
      .get("/")
      .end(function(err, res) {
      if (err) {
          return done(err);
      }
      res.status.should.be.equal(200);
      return done(); // Call done if the test completed successfully.
      });
  });

  it("Get a list of cars", (done => {
    
  }));
  it("Add a car to the DB", (done => {
    
  }));
  it("Update an existing car in the DB", (done => {
    
  }));
  it("Remove an existing car from the DB", (done => {
    
  }));
});
