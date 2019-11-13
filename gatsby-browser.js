// React
import React from 'react';

// Components
import Layout from './src/components/_layout/layout';

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
