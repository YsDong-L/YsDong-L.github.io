var posts=["2025/04/04/hello-world - 副本/","2025/04/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };