import Page from './page';

class LoginPage extends Page{

    get loginInput() { return $('input[id="index_email"]'); }
    get passwordInput() { return $('input[id="index_pass"]'); }
    get loginButton() { return $('button[id="index_login_button"]'); }

    open(){
        browser.url('https://vk.com/');
    }

    isLoginPageLoaded(){
        return super.isElementEnable(this.loginInput); 
    }
    
    typeLogin(login){
        this.loginInput.setValue(login);
    }

    typePassword(pass){
        this.passwordInput.setValue(pass);
    }

    clickLoginButton(){
        this.loginButton.click();
    }

    userLogin(login, pass){
        this.typeLogin(login);
        this.typePassword(pass);
        this.clickLoginButton();
    }

}
export default new LoginPage();