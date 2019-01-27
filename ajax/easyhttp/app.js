const http = new easyHTTP;

// // get posts
// http.get('http://jsonplaceholder.typicode.com/posts', function(err, posts) {
    
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// // get single post
// http.get('http://jsonplaceholder.typicode.com/posts/1', function(err, posts) {
    
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// create data 
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// create the post
// http.post('http://jsonplaceholder.typicode.com/posts',data,function(err, posts) {
    
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// Update Post
// http.put('http://jsonplaceholder.typicode.com/posts/1',data,function(err,post){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// delete post
http.delete('http://jsonplaceholder.typicode.com/posts/1', function(err, post) {
    
    if(err) {
        console.log(err);
    } else {
        console.log(post);
    }
});