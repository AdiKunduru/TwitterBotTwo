
var twit = require("twit");
//var config = require("./config");

var T = new twit({
//Your API KEYS
});

var myID = "sethchade"


//Stream needs to be following the right user account
var stream = T.stream('statuses/filter',{
   follow : //user Twitter ID
 });

//Tried to run for every tweet ever made. Needs to run for new tweets.
// Needs to respond to
stream.on("tweet", watchForTweet)

function spongebob(text){
  var meme = "";
  for(var i=0; i<text.length; i++)
          {

          var  n = Math.floor(Math.random()*2)

           if(text.charAt(i)===(' ')|| text.charAt(i)===('@'))
           {
               meme += text.charAt(i);
           }
           else if(n === 1)
           {
                var upper = text.charAt(i);
                meme += upper.toUpperCase();
           }
           else
           {
               var lower = text.charAt(i);
                meme += lower.toLowerCase();
           }
          }
  return meme;
}



// Be notified when he is tweeting Get Tweet ID. status.id
function watchForTweet(userTweet)
{
var replyID = userTweet.id_str//toString();
var tweetText = userTweet.text;

if(userTweet.user.screen_name !== myID)
{
  tweet(spongebob(tweetText),replyID);
}
//var fs= require("fs")
//var json = JSON.stringify(jayTweet,null,1)
//fs.writeFile("tweet.json" , json)

}
//Respond to his tweet (in_reply_to_status_id).
function tweet (theTweet,tweetID)
{

  var params = {status: theTweet, in_reply_to_status_id: tweetID}
    function callback(err, data, response)
    {
      if (err)
      {
        console.log("something went wrong")
      //  console.log(tweetID)
      }
      else {
        console.log("it worked")
      //  console.log(replied)
      }
    }
    T.post("statuses/update",params,callback)

}
