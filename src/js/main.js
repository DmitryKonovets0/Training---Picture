import modals from "./modules/modals";
import slider from "./modules/slider";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
window.addEventListener('DOMContentLoaded', () => {
    modals();
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
});
