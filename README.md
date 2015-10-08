# First things first... About DFS

Technically, by law, fantasy sports are a game of skill hence their legality.
But it has an aroma of gambling to it. Don't play with money that you aren't
prepared to lose. For the record, I, Nick, do not play any fantasy sports for
money and recommend that you don't either unless you, as previously stated, have
money that you are prepared to lose.

### Articles you should probably read
<a href="http://www.bloomberg.com/news/articles/2015-09-10/you-aren-t-good-enough-to-win-money-playing-daily-fantasy-football">
ONE
</a> and
<a href="http://www.nytimes.com/2015/10/06/sports/fanduel-draftkings-fantasy-employees-bet-rivals.html?_r=0">
TWO
</a>

## The idea behind this app

It's simple, you win daily fantasy sports by picking the better lineup. However,
some tournaments allow you to enter multiple lineups. In this case, an idea is
to create a list of players who you think could end up in the optimum lineup and
enter every single combination of those players. This app aids in the generation
of those lineups. You'll have to figure out which players to enter on your own.

Don't forget to read the last paragraph of the <a href="https://github.com/NicholasPurdy/FanDuel-Lineup-Generator/blob/master/LICENSE.md">license.</a>

# As for this repo...

To run the app on your own computer just download the zip and open up <b>view.html</b>.

form.html and results.html are templates and will not do anything if you open them first.

This app needs an internet connection to work as it makes AJAX calls to fetch the lists of
teams, positions, and rules for each league. I didn't feel like hard coding them into the 
app.

This app can generate about 4000-5000 lineups before your browser will give you a warning
that the script is taking too long. Click continue and the algorithm should finish just fine.

## Files in this repo

<b>view.html - </b>The main entry point for the app.<br>
<b>form.html - </b>The template that is initially loaded.<br>
<b>results.html - </b>The template used once the lineups are generated.<br>

<b>leagues.json - </b>This contains the data on what teams and positions are in each league.<br>
<b>rules.json - </b>This contains the rules in regards to how many of each position is allowed.<br>
<b>testCase.json - </b>Assign this object to <b>var data</b> in storageProvider.js to have play set of data to work with.<br>

<b>formController.js - </b>Sole controller for the insert screen.<br>
<b>resultsController.js - </b>Controller used for the results screen, contains the generate function.<br>
<b>routeProvider.js - </b>File name is self explanatory.<br>
<b>storageService.js - </b>Used to transfer data between the two controllers.<br>
<b>tableService.js - </b>Provides contains two arrays, one array which represents a lineup 
that checks for validity when trying to insert players into it, and array of lineups that
checks for further validity. This second array is the results.<br>


# LIVE DEMO

<a href="http://www.nicholaspurdy.net/webapps/lineupapp/view.html#/">http://www.nicholaspurdy.net/webapps/lineupapp/view.html#/</a>
