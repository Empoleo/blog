$(function () {
    var APPLICATION_ID = "119CF616-6BCB-C750-FFE4-DF4F6FE81D00",
    SECRET_KEY = "62F4611F-4E7F-AF77-FF61-C1A9DF55BC00",
    VERSION = "v1";
    
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var user = new Backendless.user();
    user.email = "matthewbrittain3d@gmail.com"
    user.password = "password";
    Backendless.userService.register(user);
    
});