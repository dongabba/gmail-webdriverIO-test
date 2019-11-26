export default class Page {
    
    isElementEnable(element){
        try{
            element.waitForEnabled(10000);
            return true;
        } catch (err){
            return false;
        }
    }
}