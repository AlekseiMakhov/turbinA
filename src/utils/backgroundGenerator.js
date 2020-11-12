export function backgroundGenerator ({ step, nextStep }) {
    
    let bg = '';
    const MAX_STEP = 1535;
    const MIN_STEP = 0;

    function getColorWheel(step) {

        let red = 0;
        let green = 0;
        let blue = 0;

        if (step > MAX_STEP) {
            step = MIN_STEP + (step - MAX_STEP);
        } else if (step > 1279) {
            red = 255;
            blue = MAX_STEP - step
            green = 0
        } else if (step > 1023) {
            blue = 255
            red = 1279 - step;
            green = 0
        } else if (step > 767) {
            blue = 255
            red = 0;
            green = step - 767
        } else if (step > 511) {
            blue = 0
            red = 767 - step;
            green = 255
        } else if (step > 255) {
            blue = 0
            red = step - 255;
            green = 255
        } else if (step >= 0) {
            blue = 0
            red = 255;
            green = step 
        } else {
            step += MAX_STEP;
        }

        return { red, green, blue };
    }

    // bg = `linear-gradient(to top right, rgb(${bottom.red}, ${bottom.green}, ${bottom.blue}), rgb(${top.red}, ${top.green}, ${top.blue})`;

    bg =  `radial-gradient(ellipse at top, rgb(${getColorWheel(step + nextStep).red}, ${getColorWheel(step + nextStep).green}, ${getColorWheel(step + nextStep).blue}), transparent),
            radial-gradient(ellipse at bottom, rgb(${getColorWheel(step).red}, ${getColorWheel(step).green}, ${getColorWheel(step).blue}), transparent)`;

  return bg;
}


