const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.login': '',
      'sonar.password': '',
      'sonar.sources': '.',
      'sonar.inclusions': 'client/src/**/*.js',
      'sonar.exclusions': 'client/src/**/*.spec.js, node_modules/**'
    }
  },
  () => {}
);
