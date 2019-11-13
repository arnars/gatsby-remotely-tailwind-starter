// Preamble
import 'normalize.css';

// React
import React, { Component } from 'react';

// Styling
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import s from 'styles';

// Packages

// Utilities

// Components
import Grid from 'components/_layout/grid';

class LayoutComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
            <>
                <Global styles={s.global} />
                <Wrapper>{children}</Wrapper>
                {process.env.NODE_ENV === 'development' && <Grid />}
            </>
        );
    }
}

const Wrapper = styled.div`
    ${s.grid.contentWidth};
    ${tw`overflow-hidden mx-auto bg-red-200`};
`;

export default LayoutComponent;
