var posts=["2025/04/09/day 1 -二分法详解/","2025/04/04/hello-world1/","2025/04/07/构建单向链表/","2025/04/09/day 1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };