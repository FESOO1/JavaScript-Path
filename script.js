const showContentButton = document.querySelectorAll('.js-path-itself-show-content-button-itself');
const showContentButtonText = document.querySelectorAll('.js-path-itself-show-content-button-itself-text');
const unorderedListContent = document.querySelectorAll('.js-path-itself-un-content');
let isContentShown = false;

// SHOWING AND HIDING THE CONTENT

for (let i = 0; i < showContentButton.length; i++) {
    showContentButton[i].addEventListener('click', () => {
        if (isContentShown === false) {

            // SHOW AND HIDE BUTTON
            for (const showContentButtons of showContentButton) {
                showContentButtons.classList.remove('js-path-itself-show-content-button-itself-shown');
            };
            showContentButton[i].classList.add('js-path-itself-show-content-button-itself-shown');
            // SHOW AND HIDE BUTTON TEXT
            for (const showContentButtonTexts of showContentButtonText) {
                showContentButtonTexts.textContent = 'Show Content';
            };
            showContentButtonText[i].textContent = 'Hide Content';

            // CONTENT
            for (const unorderedListContents of unorderedListContent) {
                unorderedListContents.classList.remove('js-path-itself-un-content-active');
            };
            unorderedListContent[i].classList.add('js-path-itself-un-content-active');
            
            
            isContentShown = true;
        } else {
            // SHOW AND HIDE BUTTON
            for (const showContentButtons of showContentButton) {
                showContentButtons.classList.remove('js-path-itself-show-content-button-itself-shown');
            };
            // SHOW AND HIDE BUTTON TEXT
            for (const showContentButtonTexts of showContentButtonText) {
                showContentButtonTexts.textContent = 'Show Content';
            };
            // CONTENT
            for (const unorderedListContents of unorderedListContent) {
                unorderedListContents.classList.remove('js-path-itself-un-content-active');
            };

            isContentShown = false;
        };
    });
};