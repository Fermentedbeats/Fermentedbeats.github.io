
function accordian() {

    var posts = document.getElementsByClassName("blogPost"); 
    for (var i = 0; i < posts.length; i++) {
        posts[i].addEventListener("click", function() {

            var blogContent = this.nextElementSibling;
            openClose(blogContent);
            
        }, true);
    }
    var closers = document.getElementsByClassName("close"); 
    for (var i = 0; i < closers.length; i++) {
        closers[i].addEventListener("click", function() {
            console.log(this.parentNode)
            var blogContent = this.parentNode;
            openClose(blogContent);

        }, true);
    }


        function openClose(blogContent) {
            if (blogContent.className === "invisible content") {
                blogContent.className = "visible content";
            }
            else {
                blogContent.className = "invisible content"
            }
        }

    }
    accordian();
