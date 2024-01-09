import modals from "./modules/modals";
import slider from "./modules/slider";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import pictureSize from "./modules/pictureSize";
import filter from "./modules/filter";
window.addEventListener('DOMContentLoaded', () => {
    modals();
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '.styles-2');
    pictureSize('.sizes-block')
    filter()
});
