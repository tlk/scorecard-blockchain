# Paper-based Scorecard "Blockchain"

This is a small web application that was used to keep track of the points given to a team at any given post (station) during an outdoor game that was played by a group of 40 people. It is a toy project that lives and breathes only because of the blockchain hype, but maybe - just maybe, it will encourage more people to get to know the details of a real [blockchain](https://en.wikipedia.org/wiki/Blockchain).

This was inspired by https://anders.com/blockchain/ which is great for understanding some of the mechanics behind a blockchain.

See http://www.thomaslkjeldsen.com/scorecard-blockchain/ for a live demo (mobile friendly)


### The outdoor game
The outdoor game was made up of the following:
* six teams and
* six posts (station)
* activities/challenges at each post

When the game started there was one team at each post. After 15 minutes each team walked to the next post. The game ended when the teams had completed all posts.

At each post there was an activity/challenge to be completed by the team, and each post had a person (fixed) in charge of giving the team instructions and to evaluate the performance at the end. Points were given in the range of  0-10 by the person in charge of the post.

There was one "blockchain" per team and each "blockchain" was stored on a [piece of paper](https://github.com/tlk/scorecard-blockchain/blob/master/printouts/Scorecard.pdf) carried by the team.

### The web application
The application has two views:
* the *miner* where you type in the points and it will compute a nonce that satisfies the requirements for "proof of work"
* the *verifier* where you type in a scorecard to validate it

The application was shared only with the people in charge of a post. Before a team would walk to the next post, the person in charge of the post would do the following:
1. ask for the latest hash value on the team's scorecard
2. enter the latest hash value and the points into the *miner* app
3. tell the team to add the points, the nonce and the hash to their scorecard

### Finding the winner!
At the end all scorecards were collected and sorted by the total points. The scorecard with the most points was entered into the *verifier* app in order to ensure the validity of the scorecard :-)

[![Simplicity](https://img.youtube.com/vi/K8Xq4Cr4HoI/0.jpg)](http://www.youtube.com/watch?v=K8Xq4Cr4HoI)


### Is this really a blockchain?!
The proof of work is a nonce that makes the computed hash start with the string "00". Since the proof of work requirements are so relaxed any smartphone is able to compute the "proof of work" as you type. Also, there is no record number and there is no timestamp recorded in a block, so it is very easy to falsify blocks.

This is a toy project and it very much relies on team members being in a forest without access to computers :-)

### Wait, you said there was one blockchain per team?!
Right. This is totally different from the normal concept of a blockchain. We could move this toy project closer to a real blockchain if we added the team number to the blocks and made the mining application able to communicate with the other miners (posts/stations). The only problem with this is that the posts would require network connectivity (there was no mobile signal coverage in the forest), the upside is that we would not need to store the blockchain on a piece of paper - but where is the fun in that!

As you can tell, the concept of a blockchain has *really* been stretched here :-)
