var config = {

}

var development = {
  // TODO set up mocks for this
  apiURL: 'http://api.component.fm/',
  root: '/component.fm/public'
}

var production = {
  apiURL: 'http://api.component.fm/',
  root: '/'
}

module.exports = _.extend(config, ENV === 'development' ? development : production);
