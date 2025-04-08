var posts=["2025/04/04/hello-world1/","2025/04/07/构建单向链表/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };