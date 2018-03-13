
var TwitterSharedGithub;

TwitterSharedGithub = (function() {


  function TwitterSharedGithub(arrayUrl) {
    this.initUI(arrayUrl);
  }




  TwitterSharedGithub.prototype.initUI = function(arrayUrl) {
    var sharedButton, insertLocation;
    insertLocation = ($('.js-repo-meta-edit').find(".edit-link"));
    sharedButton = ' <a href="http://twitter.com/home?status=' + encodeURIComponent("Acompanhe meu repositorio " + arrayUrl[4] + " no link " + arrayUrl[0]+"/"+arrayUrl[1]+"/"+arrayUrl[2]+"/"+arrayUrl[3]+"/"+arrayUrl[4]+" no meu github "+arrayUrl[3]) + '"><button type="button" class="btn btn-sm float-right " aria-expanded="false">Compartilhar repositorio no Twitter</button></a>';
    ($(sharedButton)).insertBefore(insertLocation);
    return this.observeToggle();
  };


  return TwitterSharedGithub;

})();

$(function() {
  var twitterSharedGithub, arrayUrl;
  arrayUrl = window.location.href 
  arrayUrl = arrayUrl.split("/");
  return twitterSharedGithub = new TwitterSharedGithub(arrayUrl);
});