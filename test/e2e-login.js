describe('E2E Tests - Login/ Logout', () =>{
    it('Should not login to Invalid credentials', async () => {
// Open the application
await browser.maximizeWindow();
await browser.url('http://zero.webappsecurity.com/')
await $('#signin_button').isDisplayed();
await $('#signin_button').click();
await $('#login_form').isDisplayed();
await $('#user_login').setValue('Invalid');
await $('#user_password').setValue('Invalid');
await $('input[type=submit]').click();

// Verify the error message 
        await expect(await $('//div[@class="alert alert-error"]').getText()).toBe('Login and/or password are wrong.');
        
    });

    it('Should login to Valid credentials', async () => {
        // Open the application
        await browser.url('http://zero.webappsecurity.com/')
        await $('#signin_button').isDisplayed();
        await $('#signin_button').click();
        await $('#login_form').isDisplayed();
        await $('#user_login').setValue('username');
        await $('#user_password').setValue('password');
        await $('input[type=submit]').click();
        await $('.nav-tabs').isDisplayed();

        
    });
    it('Should logout', async () => {

        // Logout
        await $('.icon-user').isDisplayed();
        await $('.icon-user').click();
        await $('#logout_link').isDisplayed();
        await $('#logout_link').click();
        await $('#pages-nav').isDisplayed();
        // await expect(await $('//div[@class="alert alert-success"]').getText()).toBe('You have been logged out!');
    });


    });
        
