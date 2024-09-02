
describe('First Steps with WebdriverIO', () => {
    it('Load Example website', async () => {
        await browser.maximizeWindow();
        await browser.url('https://example.com');
        await browser.pause(3000);  // Pause for 3 seconds

        // Verify URL
        await expect(browser).toHaveUrl('https://example.com/');
          // Maximize the browser window
        

        // Verify Title
        await expect(browser).toHaveTitle('Example Domain');
    });

    // Uncomment the test if you want to use it
    // it('Load WebdriverIO website', async () => {
    //     await browser.url('https://webdriver.io');
    //     await browser.pause(3000);  // Pause for 3 seconds
    // });

    it('H1 should be visible on Example website', async () => {
        // Locate the H1 element
        const h1 = await $('h1');
        await h1.waitForDisplayed();

        
        // Check if the H1 element is displayed
        await expect(h1).toBeDisplayed();
    });
    it('P should be visible on Example website', async () =>{
        const p = await $('p');
        await p.waitForDisplayed();

        await expect(p).toBeDisplayed();
    });
    it('Check Link value', async () =>{

        const link = await $('a');
        //link.waitForExists();
        await expect(link).toHaveHref('https://www.iana.org/domains/example');
        
    });
    it('Get Elemeent Text',async () => {
        const text = await $('h1').getText();
        expect(text).toBe('Example Domain');
    });
    it('Assert Attributes',async () => {
      await  browser.url('https://devexpress.github.io/testcafe/example/');
      const button = await $('#submit-button');
      await button.waitForDisplayed();
      await expect(button).toHaveAttribute('type','submit');
    });
    it('Assert Value', async () => {
        const button = $('#populate');
        await button.waitForDisplayed();
        await expect(button).toHaveValue('Populate');
    });
    it('Save SS', async () => {
        await browser.saveScreenshot('web-ss.png');
    });
});
