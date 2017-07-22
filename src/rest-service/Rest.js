import axios from 'axios';

export default {
  
  baseurl : 'https://api.api.ai/v1/',
  accessToken : "386136fc531a4f7da9226b169ff07a07",

  postText : function(callback, text){
 	
  	// curl 'https://api.api.ai/api/query?v=20150910&query=sali&lang=de&sessionId=50161518-c9f6-426b-bf5a-d2d1ba831f53&timezone=2017-07-22T16:37:32+0200' -H 'Authorization:Bearer 386136fc531a4f7da9226b169ff07a07'

  	axios({
  			method: "POST",
			url: this.baseurl + "query?v=20150910",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			headers: {
				"Authorization": "Bearer " + this.accessToken
			},
			data: {
				query: text,
				lang: "de",
				sessionId: "somerandomthing"
			}
  		})
    .then(response => {
      // JSON responses are automatically parsed.
      callback(response);
    })
    .catch(e => {
       
    })

  }
}