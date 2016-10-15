function Api (user, apikey) {
    this.user = user;
    this.apikey = apikey;
}

Api.prototype.getRepositories = function () {
    return $.get('https://api.github.com/users/'+this.user+'?access_token=' + this.apikey).then(function(response){
      return response;
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
};

exports.ApiModule = Api;
