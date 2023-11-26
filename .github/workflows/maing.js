var GhPolyglot = require("gh-polyglot");

var me = new GhPolyglot("Drakkarrr/git-stats");

me.repoStats(function (err, stats) {
    console.log(err || stats);
});

me.userStats(function (err, stats) {
    console.log(err || stats);
});
