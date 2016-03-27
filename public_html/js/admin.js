$(function () {
    var APPLICATION_ID = "119CF616-6BCB-C750-FFE4-DF4F6FE81D00",
    SECRET_KEY = "62F4611F-4E7F-AF77-FF61-C1A9DF55BC00",
    VERSION = "v1";
    
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var loginScript = $("#login-template").html();
    var loginTemplate = Handlebars.compile(loginScript);
    
    $('.main-container').html(loginTemplate);
    
    $(document).on('submit', 'form-signin', function(event) {
        event.preventDefault();
        
        var data = $(this).serializeArray(),
            email = data[0].value,
            password = data[1].vale;
            
        Backendless.UserService.login(email, password, true, Backendless.Async(userLoggedIn, gotError))
    })
});

function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}