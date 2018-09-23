(function (exports) {

  function PeepListView(peepList) {
    this.peepList = peepList;
  }

  PeepListView.prototype.showHTML = function() {

    this.peepList.returnPeepList().forEach(function(peep) {
      htmlString = `<p>${peep.body} Created by: ${peep.userHandle}</p></div>`
    });

    var fullHTML = "<div>" + htmlString + "</div>";

    return fullHTML
  }

  exports.PeepListView = PeepListView;
})(this);
