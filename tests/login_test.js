const assert = require('assert');
import LoginPage from '../pages/login_page';
import MainPage from '../pages/main_page';

describe('Login Tests', ()=>{

    it('should allow access with correct creds', ()=>{
        LoginPage.open();
        assert.equal(LoginPage.isLoginPageLoaded(), true, 'Login Page is not loaded');
        LoginPage.userLogin('+79252752982', '1488aret1488');
        assert.equal(MainPage.isMainPageLoaded(), true, 'Main Page is not loaded');
        assert.equal(MainPage.getProfileName(), 'Петр', 'Profile name not correct');
    });
});
