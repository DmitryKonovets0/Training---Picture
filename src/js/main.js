import modals from "./modules/modals";
import slider from "./modules/slider";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import pictureSize from "./modules/pictureSize";
import filter from "./modules/filter";
import forms from "./modules/form";
import calc from "./modules/calc";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
window.addEventListener('DOMContentLoaded', () => {
    modals();
    accordion('.accordion-heading');
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    pictureSize('.sizes-block')
    filter()
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    forms()
    burger('.burger', '.burger-menu')
});
