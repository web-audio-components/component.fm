var config = {

}

var development = {
  // TODO set up mocks for this
  apiURL: 'http://api.component.fm/'
}

var production = {
  apiURL: 'http://api.component.fm/'
}

module.exports = _.extend(config, ENV === 'development' ? development : production);
