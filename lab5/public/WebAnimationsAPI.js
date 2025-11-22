export class WebAnimationsAPI {
    static animateResultContainer(element) {
        element.animate([
            { transform: 'scale(0.95)', opacity: 0 },
            { transform: 'scale(1)', opacity: 1 }
        ], {
            duration: 400,
            easing: 'ease-out'
        });
    }

    static animateSection(element) {
        element.animate([
            { transform: 'translateY(30px)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 }
        ], {
            duration: 500,
            easing: 'ease-out'
        });
    }
}