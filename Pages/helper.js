

export async function fillinput(locator, value) {

    await locator.fill(value);


}

export async function click(locator) {

    await locator.click();  

}

export async function selectOption(locator, value) {

    await locator.selectOption(value);
}

export async function getText(locator) {

    return await locator.textContent();
}

export async function getAttribute(locator, attribute) {
    return await locator.getAttribute(attribute);
}

export async function isVisible(locator) {
    return await locator.isVisible();
}

export async function isEnabled(locator) {
    return await locator.isEnabled();
}

export async function isChecked(locator) {
    return await locator.isChecked();
}
export async function waitForElement(locator, timeout = 5000) {
    await locator.waitFor({ state: 'visible', timeout });
}

export async function waitForElementToBeHidden(locator, timeout = 5000) {
    await locator.waitFor({ state: 'hidden', timeout });
}

export async function waitForElementToBeEnabled(locator, timeout = 5000) {
    await locator.waitFor({ state: 'enabled', timeout });
}

export async function waitForElementToBeDisabled(locator, timeout = 5000) {
    await locator.waitFor({ state: 'disabled', timeout });
}
export async function waitForElementToBeChecked(locator, timeout = 5000) {
    await locator.waitFor({ state: 'checked', timeout });
}
export async function waitForElementToBeUnchecked(locator, timeout = 5000) {
    await locator.waitFor({ state: 'unchecked', timeout });
}