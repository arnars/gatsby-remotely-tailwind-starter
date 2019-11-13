import changeCase from 'change-case';
import responsive from './responsive';

const _gridStep = (numberOfColumns, contentWidth, gutterWidth, unit) => ({
    numberOfColumns,
    contentWidth,
    gutterWidth,
    unit,
});

const _getColumnPropertyValue = (propertyStep, configStep) => {
    // Check property step for type
    const isArray = Array.isArray(propertyStep);
    const isFunction = typeof propertyStep === 'function';

    // If not function, fit to grid
    if (!isFunction) {
        // Get factors based on property step type
        const columnFactor = isArray ? propertyStep[0] : propertyStep;
        const gutterFactor = isArray
            ? propertyStep[1]
            : gridConfig.defaultGutter;

        // Get gutter size
        const gutterSize = gutterFactor * configStep.gutterWidth;

        // Get column size
        const columnSize =
            (configStep.contentWidth / configStep.numberOfColumns) *
            columnFactor;

        // Return
        return columnSize + gutterSize + configStep.unit;
    }

    // Function means custom step css
    else {
        return propertyStep();
    }
};

const _getGutterPropertyValue = (propertyStep, configStep) => {
    // Check property step for type
    const isFunction = typeof propertyStep === 'function';

    // If not function, fit to grid
    if (!isFunction) {
        // Get factors based on property step type
        const gutterFactor = propertyStep;

        // Get gutter size
        const gutterSize = gutterFactor * configStep.gutterWidth;

        // Return
        return gutterSize + configStep.unit;
    }

    // Function means custom step css
    else {
        return propertyStep();
    }
};
const gridConfig = {
    defaultGutter: -2,
    maximumNumberOfColumns: 12,
    steps: {
        0: _gridStep(4, 94, 2, 'vw'),
        10: _gridStep(4, 92, 2, 'vw'),
        20: _gridStep(6, 92, 1.5, 'vw'),
        30: _gridStep(12, 91.5, 1.2, 'vw'),
        40: _gridStep(12, 90, 0.8, 'vw'),
    },
};

const gridInfo = () => {
    // Get content widths for each breakpoint
    const content = responsive.breakpoints.reduce((acc, breakpoint) => {
        // Does config exist for current breakpoint?
        if (gridConfig.steps[breakpoint.label]) {
            // Add to accumulator
            acc = [
                ...acc,
                `"${breakpoint.label} / ${breakpoint.width}px / ${
                    gridConfig.steps[breakpoint.label].numberOfColumns
                } cols / ${gridConfig.steps[breakpoint.label].contentWidth}${
                    gridConfig.steps[breakpoint.label].unit
                } / ${gridConfig.steps[breakpoint.label].gutterWidth}${
                    gridConfig.steps[breakpoint.label].unit
                }"`,
            ];
        }

        // Return
        return acc;
    }, []);

    // Return
    return responsive.mediaQueries({
        content,
    });
};

const contentWidth = () => {
    // Get content widths for each breakpoint
    const width = responsive.breakpoints.reduce((acc, breakpoint) => {
        // Does config exist for current breakpoint?
        if (gridConfig.steps[breakpoint.label]) {
            // Add to accumulator
            acc = [
                ...acc,
                `${gridConfig.steps[breakpoint.label].contentWidth}vw`,
            ];
        }

        // Return
        return acc;
    }, []);

    // Return
    return responsive.mediaQueries({
        width,
    });
};

const gutter = (properties, propertySteps) => {
    // Preserve latest propertyValue for when nothing is defined
    let latestPropertyStep;

    // Get property values for each defined step
    const propertyValues = responsive.breakpoints.reduce((acc, breakpoint) => {
        // Get step property for current breakpoint
        const propertyStep = propertySteps[breakpoint.label];

        // Get step config for current breakpoint
        const configStep = gridConfig.steps[breakpoint.label];

        // Does property step exist for current breakpoint?
        if (propertyStep) {
            latestPropertyStep = propertyStep;
        }

        const propertyValue = _getGutterPropertyValue(
            latestPropertyStep,
            configStep
        );

        // Always add latest property value as facepaint expects 1:1
        acc = [...acc, propertyValue];

        // Return
        return acc;
    }, []);

    return responsive.mediaQueries(
        Array.isArray(properties)
            ? properties.map(property => ({
                  [changeCase.camelCase(property)]: propertyValues,
              }))
            : { [changeCase.camelCase(properties)]: propertyValues }
    );
};

const columns = (properties, propertySteps) => {
    // Preserve latest propertyStep for when nothing is defined
    let latestPropertyStep;

    // Get property values for each defined step
    const propertyValues = responsive.breakpoints.reduce((acc, breakpoint) => {
        // Get step property for current breakpoint
        const propertyStep = propertySteps[breakpoint.label];

        // Get step config for current breakpoint
        const configStep = gridConfig.steps[breakpoint.label];

        // Does property step exist for current breakpoint?
        if (propertyStep) {
            latestPropertyStep = propertyStep;
        }

        const propertyValue = _getColumnPropertyValue(
            latestPropertyStep,
            configStep
        );

        // Always add latest property value as facepaint expects 1:1
        acc = [...acc, propertyValue];

        // Return
        return acc;
    }, []);

    return responsive.mediaQueries(
        Array.isArray(properties)
            ? properties.map(property => ({
                  [changeCase.camelCase(property)]: propertyValues,
              }))
            : { [changeCase.camelCase(properties)]: propertyValues }
    );
};

export default {
    info: gridInfo,
    config: gridConfig,
    contentWidth,
    columns,
    gutter,
};
