export class Post {
    id?: number 
    title: string 
    categories: string 
    content: string

    constructor(post: Post) {
        this.id = post.id;
        this.title = post.title;
        this.categories = post.categories;
        this.content = post.content;
    }

    valid(){
        return !(!!!this.title || !!!this.categories || !!!this.content)
    }

    getErrors() {
        if(this.valid()){
            return { };
        } else {
            let errors: any = {}
            if(!!!this.title) {
                errors.title = "Please enter a title";
            }
            if(!!!this.categories) {
                errors.categories = "Please enter some categories";
            }
            if(!!!this.content) {
                errors.content = "Please enter some content";
            }
            return errors;
        }
    }

}