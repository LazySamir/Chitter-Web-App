(function(exports) {
  function Peep(id, body, createdAt, updatedAt, userID, userHandle) {
    this.id = id
    this.body = body
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.userID = userID
    this.userHandle =userHandle
  }
  exports.Peep = Peep
})(this)
