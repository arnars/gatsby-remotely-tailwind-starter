// React
import React from 'react';

// Gatsby
import { Link } from 'gatsby';
import Img from 'gatsby-image';

// Styling
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import tw from 'tailwind.macro';

// Packages

// Utilities

// Components

const HeaderComponent = props => {
    return (
        <>
            <Header>Header</Header>
        </>
    );
};

const Header = tw.div`
	block text-black
`;

export default HeaderComponent;
