//var juice = "juice";
//console.log(juice);

var twit = require("twit");
//var config = require("./config");

var T = new twit({
consumer_key : "rXg5bBw2cKzTxozqQX7e3M1la"
, consumer_secret: "YzLgHSWGlzsWIiZB5now5dJL4yWKrCPv40xqoaybzv2uffH4Q0"
, access_token: "882832892103208960-bVRyFIcWwMUgX0FXAsK9bAvuBHnGYEZ"
, access_token_secret: "R552sAdrT8Yto4dFqkowmfvJAnTaOw5RJWb13nILUeiPr"
});

var jayID = "jappaji4"
var myID = "sethchade"
var rodID = "roddy97"
var rudraID = "pinchhitter11"

//?????????????????????????
//Stream needs to be following the right user account
var stream = T.stream('statuses/filter',{
   follow : 614668900
 });

//Tried to run for every tweet ever made. Needs to run for new tweets.
// Needs to respond to
stream.on("tweet", watchForTweet)

function spongebob(text){
  var meme = "";
  for(var i=0; i<text.length; i++)
          {

          var  n = Math.floor(Math.random()*2)

           if(text.charAt(i)===(' '))
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

//console.log(spongebob("this is a sample tweet"))

// Be notified when he is tweeting Get Tweet ID. status.id
function watchForTweet(jayTweet)
{
var replyID = jayTweet.id_str//toString();
var tweetText = jayTweet.text;
//var whatToSay = "@" + jayTweet.user.screen_name + " Mavs Suck"
//if(jayTweet.user.screen_name === "jappaji4")
if(jayTweet.user.screen_name !== "sethchade")
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
