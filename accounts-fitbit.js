'use strict';

/**
 * Register this service (boilerplate).
 */
Accounts.oauth.registerService('fitbit');

/**
 * Client functionality (boilerplate).
 */
if (Meteor.isClient) {
  Meteor.loginWithFitbit = function(options, callback) {
    
    /**
     * support (options, callback) and (callback)
     */
    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    /**
     * 
     */
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Fitbit.requestCredential(options, credentialRequestCompleteCallback);
  };

/**
 * Server functionality (boilerplate).
 * Ensures sanity of published user object.
 */
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: _.map(
      /**
       * Logged in user gets whitelisted fields + accessToken + expiresAt.
       */
  
    Fitbit.whitelistedFields.concat(['accessToken', 'expiresAt']), // don't publish refresh token
      function(subfield) {
        return 'services.fitbit.' + subfield;
      }),

    forOtherUsers: _.map(
      /**
       * Other users get whitelisted fields without emails, because even with
       * autopublish, no legitimate web app should be publishing all users' emails.
       */
      _.without(Fitbit.whitelistedFields, 'email', 'verified_email'),
      function(subfield) {
        return 'services.fitbit.' + subfield;
      })
  });
}
