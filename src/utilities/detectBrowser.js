import { detect } from 'detect-browser';
import hasWindow from './hasWindow';

const detectBrowser = () => {
    if (hasWindow()) {
        const browser = detect();
        return browser ? browser : { name: 'node', version: '0', os: 'linux' };
    }

    // Assume node
    return { name: 'node', version: '0', os: 'linux' };
};

const legacy = () => {
    const browser = detectBrowser();
    return ['ie'].indexOf(browser.name.toLowerCase()) > -1;
};

const modern = () => {
    const browser = detectBrowser();
    return (
        [
            'safari',
            'chrome',
            'firefox',
            'edge',
            'ios',
            'opera',
            'crios',
        ].indexOf(browser.name.toLowerCase()) > -1
    );
};

const touch = () => {
    const browser = detectBrowser();
    return ['android', 'ios'].indexOf(browser.os.toLowerCase()) > -1;
};

export default { detectBrowser, legacy, modern, touch };
