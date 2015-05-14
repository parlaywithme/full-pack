Package.describe({
  name: 'parlay:full-pack',
  version: '1.0.3_2',
  summary: 'The best packages, bundled together! 🎁',
  git: 'https://github.com/parlaywithme/full-pack.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.imply('parlay:starter-pack@1.0.3_2');

  api.imply('reactive-var@1.0.4');
  api.imply('reactive-dict@1.0.5');
  api.imply('appcache@1.0.3');
  api.imply('spiderable@1.0.6');
  api.imply('audit-argument-checks@1.0.2');
  api.imply('browser-policy@1.0.3');
  api.imply('oauth-encryption@1.0.2');
  api.imply('meteorhacks:npm@1.2.2');
  api.imply('mquandalle:bower@1.3.12_2');
  api.imply('stevezhu:lodash@1.0.2');
  api.imply('msavin:mongol@0.5.4');
  api.imply('meteorhacks:kadira@2.19.6');
  api.imply('raix:handlebar-helpers@0.2.4');
  api.imply('zimme:iron-router-active@1.0.1');
  api.imply('dburles:collection-helpers@1.0.2');
  api.imply('mizzao:timesync@0.3.0');
  api.imply('u2622:persistent-session@0.2.2');
  api.imply('zimme:collection-softremovable@1.0.3');
  api.imply('meteorhacks:ssr@2.1.2');
  api.imply('meteorhacks:subs-manager@1.3.0');
  api.imply('peerlibrary:assert@0.2.5');
  api.imply('meteorhacks:fast-render@2.4.0');

  // api.addFiles('parlay:full-pack.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('parlay:full-pack');
  api.addFiles('parlay:full-pack-tests.js');
});
