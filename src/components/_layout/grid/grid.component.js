// React
import React, { Component } from 'react';

// Styling
import styled from '@emotion/styled';
import s from 'src/styles';
import tw from 'tailwind.macro';

class GridComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };

        this.keyDown = this.keyDown.bind(this);
    }

    keyDown(event) {
        if (event.key === 'c') {
            this.setState(prevState => ({
                visible: !prevState.visible,
            }));
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.keyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyDown);
    }

    renderColumns() {
        const columns = [];
        for (
            let index = 0;
            index < s.grid.config.maximumNumberOfColumns;
            index++
        ) {
            columns.push(<Column key={index} index={index + 1} />);
        }
        return columns;
    }

    render() {
        return (
            <>
                <Grid visible={this.state.visible}>
                    <ColumnWrapper>
                        <GridInfo />
                        {this.renderColumns()}
                    </ColumnWrapper>
                </Grid>
            </>
        );
    }
}

const Grid = styled.div`
    ${s.grid.contentWidth};
    ${tw`fixed top-0 h-screen left-screen-1/2 items-stretch z-999 pointer-events-none bg-alpha-white-100`};
    ${props => (props.visible ? tw`flex` : tw`hidden`)};
    transform: translateX(-50%);
    &::before,
    &::after {
        ${tw`absolute top-0 bottom-0 w-screen-1/2 bg-alpha-white-100`}
        content: '';
    }
    &::before {
        ${tw`right-full`}
    }
    &::after {
        ${tw`left-full`}
    }
`;

const ColumnWrapper = tw.div`
    absolute inset-0 overflow-hidden shadow-grid-wrap
`;

const GridInfo = styled.div`
    ${tw`absolute top-0 right-0 p-1 text-center text-white text-xs bg-gray-600`};
    &::before {
        font-family: -apple-system, sans-serif;
        ${s.grid.info()}
    }
`;

const Column = styled.div`
    ${s.grid.columns('width', {
        0: [1, 0],
    })};

    ${s.grid.gutter(['padding-right', 'padding-left'], {
        0: 1,
    })};

    ${props =>
        props.index > 1 &&
        s.grid.columns('left', {
            0: [props.index - 1, 0],
        })}

    ${tw`absolute top-0 bottom-0 shadow-grid-col flex flex-col items-stretch`};

    &:after {
        ${tw`w-full h-full block bg-alpha-black-50`};
        content: '';
`;

export default GridComponent;
