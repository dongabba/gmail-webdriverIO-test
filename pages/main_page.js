import Page from './page';

class MainPage extends Page {
    get profileName() { return $('div[class="top_profile_name"]'); }
    get logoutlink() { return $('=Выйти'); }

    isMainPageLoaded(){
        return super.isElementEnable(this.profileName);
    }

    getProfileName(){
        return this.profileName.getText();
    }

    clickProfileName(){
        this.profileName.click();
    }

    clickLogout(){
        this.logoutlink.click();
    }

    userLogout(){
       this.clickProfileName();
       this.logoutlink.waitForDisplayed(10000);
       this.clickLogout(); 
    }
}

export default new MainPage();