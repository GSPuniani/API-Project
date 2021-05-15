const app = require("./../server");
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const should = chai.should();

// Import the Query model from our models folder so we
// we can use it in our tests.
const Query = require('../models/query');

const server = require('../server')

chai.use(chaiHttp);

describe("API Tests", function() {
  it("Should test each endpoint of your API");
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

  it("Get a list of queries", (done => {
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
  }));

  it("Add a query to the DB", (done => {
    chai
      .request(app)
      .get("/createQuery")
      .end(function(err, res) {
      if (err) {
          return done(err);
      }
      res.status.should.be.equal(200);
      return done(); // Call done if the test completed successfully.
      });
  }));

  it("Update an existing query in the DB", (done => {
    chai
      .request(app)
      .get("/updateQuery")
      .end(function(err, res) {
      if (err) {
          return done(err);
      }
      res.status.should.be.equal(200);
      return done(); // Call done if the test completed successfully.
      });
  }));

  it("Remove an existing query from the DB", (done => {
    chai
      .request(app)
      .get("/deleteQuery")
      .end(function(err, res) {
      if (err) {
          return done(err);
      }
      res.status.should.be.equal(200);
      return done(); // Call done if the test completed successfully.
      });
  }));

  describe('Queries', function() {

    const agent = chai.request.agent(server);
    // Query that we'll use for testing purposes
    const newQuery = {
        season: 2014,
        round: 8,
    };
  
    it("should create with valid attributes at POST /queries/new", function (done) {
      // Checks how many posts there are now
      Query.estimatedDocumentCount()
      .then(function (initialDocCount) {
          agent
              .post("/queries/new")
              // This line fakes a form post,
              // since we're not actually filling out a form
              .set("content-type", "application/x-www-form-urlencoded")
              // Make a request to create another
              .send(newQuery)
              .then(function (res) {
                  Query.estimatedDocumentCount()
                      .then(function (newDocCount) {
                          // Check that the database has one more query in it
                          expect(res).to.have.status(200);
                          // Check that the database has one more query in it
                          expect(newDocCount).to.be.equal(initialDocCount + 1)
                          done();
                      })
                      .catch(function (err) {
                          done(err);
                      });
              })
              .catch(function (err) {
                  done(err);
              });
      })
      .catch(function (err) {
          done(err);
      });
    });
  
    after(function () {
      Query.findOneAndDelete(newQuery);
    });
  });

});
