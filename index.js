// Blog Post Object
// title
// body
// author
// views
// comments
//    (author, body)
// isLive

// BlogPost Constructor Function
function BlogPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const post = new BlogPost("a", "b", "c");

console.log(post);
