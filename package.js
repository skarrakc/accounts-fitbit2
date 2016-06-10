Package.describe({
  name: 'skarrakc2:accounts-fitbit2',
  version: '0.0.1',
  summary: 'OAuth2 for Fitbit',
  git: 'https://github.com/skarrakc/skarrakc-accounts-fitbit',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('skarrakc2:fitbit2@0.0.1', ['client', 'server']);


  api.addFiles('accounts-fitbit.js');
});
