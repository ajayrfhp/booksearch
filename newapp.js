var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:4546',
  log: 'trace'
});
function create_index(json)
{
  console.log(json.id);

  client.create({
    index: json.index,
    id: json.id,
    body: {
      title: json.body.title,
      tags: json.body.tags,
    }
  }, function (error, response) {
     console.log('done');
  });
}

create_index({
    "index":"ind","id":'1',"body":{
      "title":"hellbook",
      "tags":"its me"
    }
  });

create_index({
    "index":"ind","id":'2',"body":{
      "title":"hellbook",
      "tags":"its meeeeee"
    }
  });
client.ping({
  requestTimeout: 1000,
  hello: "elasticsearch!"
}, function (error) {
  if (error) {
    console.log(error);
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});