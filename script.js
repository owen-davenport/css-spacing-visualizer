const root = document.documentElement;

function bindRangeSlider(sliderId, valueId, cssVar) {
    const slider = document.getElementById(sliderId);
    const value = document.getElementById(valueId);

    value.textContent = slider.value;
    root.style.setProperty(cssVar, `${slider.value}px`);

    slider.addEventListener("input", () => {
        value.textContent = slider.value;
        root.style.setProperty(cssVar, `${slider.value}px`);
    });
}

function bindColorPicker(inputId, cssVar) {
    const input = document.getElementById(inputId);
    root.style.setProperty(cssVar, input.value);

    input.addEventListener("input", () => {
        root.style.setProperty(cssVar, input.value);
    });
}

bindColorPicker("bodyBg", "--body-bg");
bindColorPicker("h1Color", "--h1-color");
bindColorPicker("pColor", "--p-color");
bindColorPicker("pBg", "--p-bg");

bindRangeSlider("bodyMargin", "bodyMarginValue", "--body-margin");
bindRangeSlider("bodyPadding", "bodyPaddingValue", "--body-padding");
bindRangeSlider("bodyOutline", "bodyOutlineValue", "--body-outline");
bindRangeSlider("bodyBorder", "bodyBorderValue", "--body-border");
bindRangeSlider("pMargin", "pMarginValue", "--p-margin");
bindRangeSlider("pPadding", "pPaddingValue", "--p-padding");
bindRangeSlider("pOutline", "pOutlineValue", "--p-outline");
bindRangeSlider("pFontSize", "pFontSizeValue", "--p-font-size");
