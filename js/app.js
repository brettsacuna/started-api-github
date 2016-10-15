(function () {
    'use-strict';

    var apiKey = require('./../.env').apiKey, apiModule = require('./../js/api.js').ApiModule;

    $("#form-login").submit(function (event) {
        event.preventDefault();

        var user = $("#username").val(), password = $("#password").val();

        var api = new apiModule(user, password);

        api.getRepositories().then(function (response) {
            $("#response-github").append("<div class='row'><div class='col-md-12 text-center'><img src='"+response.avatar_url+"' style='max-width: 100%' width='20%'>&nbsp;&nbsp;<p class='label label-danger'>"+response.html_url+"</p></div></div>");
        }).catch(function (reason) {
            console.log(reason);
        });
    });
})();
