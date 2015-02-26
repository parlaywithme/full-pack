Package.describe({
  name: 'parlay:full-pack',
  version: '1.0.0',
  summary: 'The best packages, bundled together! 🎁',
  git: 'https://github.com/parlaywithme/full-pack.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.0');
  api.imply('parlay:starter-pack');

  api.imply('reactive-var');
  api.imply('reactive-dict');
  api.imply('appcache');
  api.imply('spiderable');
  api.imply('audit-argument-checks');
  api.imply('browser-policy');
  api.imply('oauth-encryption');
  api.imply('meteorhacks:npm');
  api.imply('mquandalle:bower');
  api.imply('stevezhu:lodash');
  api.imply('msavin:mongol');
  api.imply('meteorhacks:kadira');
  api.imply('raix:handlebar-helpers');
  api.imply('zimme:iron-router-active');
  api.imply('dburles:collection-helpers');
  api.imply('mizzao:timesync');
  api.imply('u2622:persistent-session');
  api.imply('zimme:collection-softremovable');
  api.imply('meteorhacks:ssr');
  api.imply('meteorhacks:subs-manager');
  api.imply('peerlibrary:assert');

  // api.addFiles('parlay:full-pack.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('parlay:full-pack');
  api.addFiles('parlay:full-pack-tests.js');
});
