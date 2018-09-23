describe("Peep", function() {

  var peep;
  var id = 1;
  var body = "Peep content";
  var createdAt = "2018-09-21T17:26:57.589Z";
  var updatedAt = "2018-09-21T17:26:57.589Z";
  var userID = 1;
  var userHandle = "Peep Handle";

  peep = new Peep(id, body, createdAt, updatedAt, userID, userHandle)

  it("has an id", function() {
    expect(peep.id).toBeDefined()
  });

})
