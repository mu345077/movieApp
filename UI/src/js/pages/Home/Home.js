var React = require('react');
var MainLayout = require('../../components/MainLayout');
var MovieBox = require('../../components/MovieSet');
var MovieList = require('../../components/AllMovies');
var Movie = require('../../components/Movie');

var Home = React.createClass({
  render () {
    return (
          <MainLayout />
    );
  }
});

module.exports = Home;
