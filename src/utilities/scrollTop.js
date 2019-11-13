import hasWindow from './hasWindow';

const scrollTop = element => {
    if (hasWindow()) {
        return (
            (window.pageYOffset || document.documentElement.scrollTop) +
            element.getBoundingClientRect().top
        );
    }
    return 0;
};

export default scrollTop;
