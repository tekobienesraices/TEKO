declare global {
    interface Window {
        fbq: any;
        _fbq: any;
    }
}

export const FB_PIXEL_ID = '2580526022309067';

export const pageview = () => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView');
    }
};

export const event = (name: string, options = {}) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', name, options);
    }
};

export const customEvent = (name: string, options = {}) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', name, options);
    }
};
