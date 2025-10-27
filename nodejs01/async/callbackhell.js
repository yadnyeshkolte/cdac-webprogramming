console.log("Getting the data ...")

function getUser(id, callback){
    setTimeout(() => {
        const user = {id: id, name:"Yadnyesh Kolte"}
        callback(user);
        console.log("User Data received")
    }, 1000)
}

function getPosts(user, callback){
    setTimeout(() => {
        console.log("Fetching the post of user: " + user.name);
        const posts = [{pid: 1, title: "Post 1", content: "Content of Post 1", author: user.name}, 
            {pid: 2, title: "Post 2", content: "Content of Post 2", author: user.name}]
        
        callback(posts);
        console.log("Posts Data received")
    }, 2000)
}

function getComments(posts, callback){
    setTimeout(() => {
        const comments = [
            {cid:1, postid: posts[0].pid, content: posts[0].content, comments: "It was great post!"},
            {cid:2, postid: posts[1].pid, content: posts[1].content, comments: "Very Interesting post!"},
            {cid:3, postid: posts[1].pid, content: posts[1].content, comments: "Very informative post!"}
        ]
        callback(comments);
        console.log("Comments Data received")
    }, 3000)
}


getUser(1, user => {
    getPosts(user, posts =>{
        getComments(posts, comments =>{
            console.log("Comments: ", comments);
        })
    })
})