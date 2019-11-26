import Page from './page';

class MainPage extends Page {
    get profileName() { return $('div[class="top_profile_name"]'); }

    isMainPageLoaded(){
        return super.isElementEnable(this.profileName);
    }

    getProfileName(){
        return this.profileName.getText();
    }
}

export default new MainPage();