import changeCase from 'change-case';
import facepaint from 'facepaint';

const _breakpoint = (label, width) => ({
    label,
    width,
});

const breakpoints = [
    _breakpoint(0, 0),
    _breakpoint(10, 375),
    _breakpoint(20, 768),
    _breakpoint(30, 1024),
    _breakpoint(40, 1440),
];

const mq = bp => {
    return `@media (min-width: ${
        breakpoints.filter(breakpoint => bp === breakpoint.label)[0].width
    }px)`;
};

const mediaQueries = facepaint(
    breakpoints.map(bp => `@media (min-width: ${bp.width}px)`),
    { literal: true, overlap: true }
);

const propertySection = propertySteps => {
    // Preserve latest propertyValue for when nothing is defined
    let latestPropertyStep;

    // Get property values for each defined step
    const propertyValues = breakpoints.reduce((acc, breakpoint) => {
        // Get step property for current breakpoint
        const propertyStep = propertySteps[breakpoint.label];

        // Does property step exist for current breakpoint?
        if (propertyStep) {
            latestPropertyStep = propertyStep;
        }

        // Always add latest property value as facepaint expects 1:1
        acc = [...acc, latestPropertyStep];

        // Return
        return acc;
    }, []);

    return mediaQueries(propertyValues);
};

const property = (properties, propertySteps) => {
    // Preserve latest propertyValue for when nothing is defined
    let latestPropertyStep;

    // Get property values for each defined step
    const propertyValues = breakpoints.reduce((acc, breakpoint) => {
        // Get step property for current breakpoint
        const propertyStep = propertySteps[breakpoint.label];

        // Does property step exist for current breakpoint?
        if (propertyStep) {
            latestPropertyStep = propertyStep;
        }

        // Always add latest property value as facepaint expects 1:1
        acc = [...acc, latestPropertyStep];

        // Return
        return acc;
    }, []);

    return mediaQueries(
        Array.isArray(properties)
            ? properties.map(property => ({
                  [changeCase.camelCase(property)]: propertyValues,
              }))
            : { [changeCase.camelCase(properties)]: propertyValues }
    );
};

export default { mediaQueries, mq, breakpoints, property, propertySection };
