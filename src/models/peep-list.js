(function (exports) {

  function PeepList() {
    this.peepList = []
  }

  PeepList.prototype.returnPeepList = function () {
    return this.peepList;
  }

  Peeps.prototype.fetchPeeps = function() {
     var fetchedPeeps = [];
     fetch("https://chitter-backend-api.herokuapp.com/peeps")
      .then(function(response) {
        return response.json();
      })
      .then(function(peepList) {
        peepList.forEach(function(peep) {
          fetchedPeeps.push(peep);
        });
      });
    this.peepList = fetchedPeeps;
  }
  // sets constructor variable "peepList" to be last fetched peeps

  exports.PeepList = PeepList;
})(this);
