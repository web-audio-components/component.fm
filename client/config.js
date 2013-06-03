var config = {

};

var development = {
  apiURL: 'http://localhost:8000/',
  root: '/component.fm/public'
};

var production = {
  apiURL: 'http://api.component.fm/',
  root: '/'
};

module.exports = _.extend(config, ENV === 'development' ? development : production);
