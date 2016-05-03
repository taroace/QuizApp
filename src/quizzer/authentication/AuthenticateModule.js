/**
 * ******************************************************************************************************
 *
 *   QuizModule
 *
 *   Defines controllers and services for the Authentication Module Quiz
 *
 *  @author     Thomas Burleson
 *  @date       December 2013
 *
 * ******************************************************************************************************
 */

(function ( define, angular ) {
    "use strict";

    define([
            'auth/Session',
            'auth/Authenticator',
            'auth/SessionController',
            'auth/RegisterController',
            'auth/LoginController'
        ],
        function ( Session, Authenticator, SessionController, RegisterController, LoginController )
        {
            var moduleName = "quizzer.Authenticate";

            angular
                .module(     moduleName,    [ ]                     )
                .service(    "session",           Session           )
                .service(    "authenticator",     Authenticator     )
                .controller( "SessionController", SessionController )
                .controller( "SessionController", RegisterController )
                .controller( "LoginController",   LoginController   );

            return moduleName;
        });


}( define, angular ));

