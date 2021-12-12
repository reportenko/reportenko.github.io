const Homepage = require('../../page_object/homepage/homepage-page');

describe('Homepage', () => {
    it('should not be able to login with none matching credentials', () => {
        browser.url('./');

        browser.debug();

        // Click on ModelS link on the top of the scree
        Homepage.modelSLnk.waitForClickable();
        Homepage.modelSLnk.click();

        // Wait for order button to appear
        $('.hero-region--center-bottom [data-gtm-interaction="order now"]').waitForClickable();
    })
})