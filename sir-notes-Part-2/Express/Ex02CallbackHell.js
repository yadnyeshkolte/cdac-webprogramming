function getUser(userId, callback) {
    setTimeout(() => {
        console.log("Fetched user from database");
        callback({ id: userId, name: "Alice" });
    }, 2000);
}

function getPosts(user, callback) {
    setTimeout(() => {
        console.log("Fetched posts for user:", user.name);
        callback([
            { id: 1, title: "Post 1", author: user.name },
            { id: 2, title: "Post 2", author: user.name }
        ]);
    }, 2000);
}

function getComments(post, callback) {
    setTimeout(() => {
        console.log("Fetched comments for post:", post.title);
        callback([
            { id: 1, content: "Great post!", postId: post.id },
            { id: 2, content: "Thanks for sharing!", postId: post.id }
        ]);
    }, 2000);
}

//Callback hell example nested callbacks =  pyramid structure and difficult to read.
getUser(1, (user) => {
    getPosts(user, (posts) => {
        getComments(posts[0], (comments) => {
            console.log("Fetched comments:", comments);
        });
    });
});
