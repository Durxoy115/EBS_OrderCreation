describe('Login and Order Creation Flow', () => {

    it('Should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await browser.url('https://ebs2t.azurewebsites.net/');
        
        // Ensure the login form is displayed
        await expect($('.text-14')).toBeDisplayed();
        
        // Enter phone number
        const phoneNumberInput = await $('input[type=number]');
        await phoneNumberInput.setValue('01934864566');
        
        // Select the "terms" checkbox
        const checkbox = await $('//ion-checkbox[@value="terms"]');
        await checkbox.click();
        
        // Click the login button
        const loginButton = await $('.text-20');
        await loginButton.click();
        
        // Ensure the password input is displayed
        await expect($('.text-14')).toBeDisplayed();
        
        // Enter the password
        const passwordInput = await $('input[type=password]');
        await passwordInput.setValue('1234');
        
        // Click the login button to complete login
        await loginButton.click();
        
        // Pause to allow the login process to complete
        await browser.pause(5000);
        
        // Optionally, verify successful login by checking a post-login element
        const svgElement = await $('//div[@class="flex items-center justify-center h-10 w-10 mr-4 rounded-[10px] bg-FB766E"]');
        await expect(svgElement).toBeDisplayed();
    });

    it('Should create an order successfully', async () => {
        // Click on the SVG element (post-login button)
        const svgElement = await $('//div[@class="flex items-center justify-center h-10 w-10 mr-4 rounded-[10px] bg-FB766E"]');
        await svgElement.click();

        // Select the second purchase option
        const purchaseOption = await $('(//span[@class="pro-item-content"])[2]');
        await purchaseOption.click();
        
        // Pause to ensure the purchase option selection is processed
        await browser.pause(5000);

        // Click on the second supplier tab
        const supplierTab = await $('(//ion-segment-button)[2]');
        await supplierTab.click();

        // Click on a specific supplier
        const specificSupplier = await $('//div[@class="flex flex-col justify-center px-1"]');
        await specificSupplier.click();
        
        // Pause to ensure the supplier selection is processed
        await browser.pause(5000);

        // Scroll down the page by 1000 pixels
        await browser.execute(() => window.scrollBy(0, 1000));

        // Click on a specific product
        const product = await $('(//div[@class="rounded-xl overflow-hidden bg-white  mb-[5px] relative"])[5]');
        await product.click();

        // Click on the "Order Now" button
        const orderNowButton = await $('(//ion-button)');
        await orderNowButton.click();

        // Scroll down the page by 1000 pixels
        await browser.execute(() => window.scrollBy(0, 400));

        // Select the delivery date
        const deliveryDateSelector = await $('(//div[@class="flex justify-between items-center"])[2]');
        await deliveryDateSelector.scrollIntoView();
        await deliveryDateSelector.click();
        const deliveryDate = await $('//div[@class="react-datepicker__day react-datepicker__day--011"]');
        await deliveryDate.click();
        
        // Scroll down the page by 1000 pixels
        await browser.execute(() => window.scrollBy(0, 100));

        // Select payment terms
        const paymentTermsSelector = await $('(//div[@class="flex justify-between items-center"])[3]');
        await paymentTermsSelector.click();
        const paymentTermsOption = await $('//ion-radio[@value="Pay Now"]');
        await paymentTermsOption.click();

        // Confirm the payment terms
        const confirmButton = await $('//ion-button[@class="ion-color ion-color-primary md button button-solid ion-activatable ion-focusable hydrated"]');
        await confirmButton.click();

        // // Scroll down the page by 1000 pixels
        // await browser.execute(() => window.scrollBy(0, 1000));

        // Select payment method
        const paymentMethodSelector = await $('(//div[@class="flex justify-between items-center"])[4]');
        await paymentMethodSelector.click();
        const paymentMethodOption = await $('//ion-radio[@value="Pubali Bank PLC"]');
        await paymentMethodOption.click();

        // Confirm the payment Method
        const paymentMethodConfirmButton = await $('//ion-button[@class="ion-color ion-color-primary md button button-solid ion-activatable ion-focusable hydrated"]');
        await paymentMethodConfirmButton.click();

        //Conform Order
        const confirmOrderButton = await $('(//ion-button)[2]');
        await confirmOrderButton.click();
        
        //Click yes or No button
        const yesButton = await $('//button[2]');
        await yesButton.click();
        // Pause to ensure the payment method selection is processed
        await browser.pause(5000);
    });

});


    // it('Should not login with wrong password', async () => {
    //     await browser.url('https://ebs2t.azurewebsites.net/');
    //     await $('.text-14').isDisplayed();
    //     await $('input[type=number]').setValue('01934864566    ')
    //     // Locate the checkbox using XPath
    //     const checkbox = await $('//ion-checkbox[@value="terms"]');
    //     await checkbox.click();
    //     await $('.text-20').click()
    //     await $('.text-14').isDisplayed();
    //     await $('input[type=password]').setValue('wrong_password')
    //     await $('.text-20').click()
    //     // Locate the <p> element using XPath
    //     const errorMessage = await $('//p[text()="Password is not matched with phone number"]');

    //     // Verify the text content of the element
    //     const messageText = await errorMessage.getText();
    //     console.log(messageText); // Output: Password is not matched with phone number

    //     // Optional: You can add an assertion to ensure the text matches the expected value
    //     await expect(errorMessage).toHaveText('Password is not matched with phone number');

    // })
          // Locate the SVG element using XPath
        
