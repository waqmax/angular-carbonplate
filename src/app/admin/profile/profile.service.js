/**
 * Created by mac on 9/14/16.
 */
(function () {
    'use strict';

    angular.module("app.admin.profile")
        .factory("ProfileService",ProfileService);

    function ProfileService(TokenRestangular,$http,localStorageService,Upload) {
        var service = TokenRestangular.service("users");
        service.getCurrentUser = getCurrentUser;
        service.updateCurrentUser = updateCurrentUser;

        function getCurrentUser() {
            return TokenRestangular.one("users/me/").customGET('');
        }

        function updateCurrentUser(user,file){
            if (file){
                user.profile.profile_picture = file;
            }
            else{
                delete user.profile.profile_picture;
            }
            return Upload.upload({
                    url: "http://localhost:8000/api/users/"+ user.pk + "/",
                    data: user,
                    objectKey: '.k',
                    headers: {'Authorization': 'Token ' + localStorageService.get("Token")},
                    method:'PATCH',
                });
        }

        return service;

    }

})();