$(function () {
    var APPLICATION_ID = "119CF616-6BCB-C750-FFE4-DF4F6FE81D00",
    SECRET_KEY = "62F4611F-4E7F-AF77-FF61-C1A9DF55BC00",
    VERSION = "v1";
    
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var dataStore = Backendless.Persistence.of(Posts);
    var post = new Posts({title: "My First Blog Post", content:"My first blog post content", authorEmail:"email@email.com"});
    dataStore.save(post);
    
});

function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}