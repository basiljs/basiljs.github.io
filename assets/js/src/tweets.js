export default function tweets(){
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
      if (xmlhttp.status == 200) {
        const tweets = JSON.parse(xmlhttp.responseText);
        const latest = tweets.data[0];
        const text = latest.text;
        const date = latest.created_at;
        document.querySelector('.tweettime').innerHTML = date;
        document.querySelector('.message').innerHTML = text;
      } else if (xmlhttp.status == 400) {
        console.log('There was an error 400');
      } else {
        console.log('something else other than 200 was returned');
        // console.log(xmlhttp);
      }
    }
  };
  // let devUrl = 'http://localhost:3000';
  xmlhttp.open('GET', 'https://basiljs-latest-tweets.now.sh/', true);
  xmlhttp.send();
}
