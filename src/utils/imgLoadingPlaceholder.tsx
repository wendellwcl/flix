//Instructions for use
//1.The "<img>" element that will receive this function must have "display: none" as default
//2.A "<div>" element with the "loading_placeholder" class must be inserted before the "<img>" element
//3.The "<img>" and "<div>" elements must be inside a parent element that will serve exclusively as a container
//4.The container / parent element must have CSS rules that establish the desired width and height for the "<img>" element
//5.The container / parent element must have CSS rules to center its content

function imgLoadingPlaceholder(imgEl: HTMLImageElement) {
    const parentEl = imgEl.parentNode;

    try {
        const placeholderEl = parentEl!.querySelector<HTMLDivElement>(
            ".loading_placeholder"
        );

        if (!placeholderEl) {
            throw new Error(
                'To use the "imgLoadingPlaceholder" function, you must insert a "<div>" with the class "loading_placeholder" before the "<img>" element that will invoke the function'
            );
        }

        placeholderEl.remove();
        imgEl.style.display = "flex";
    } catch (err) {
        console.error(err);
    }
}

export default imgLoadingPlaceholder;
