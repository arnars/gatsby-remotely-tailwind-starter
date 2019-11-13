export default {
    cubic: {
        in: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
        out: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        inOut: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    },
    circ: {
        in: 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
        out: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
        inOut: 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
    },
    expo: {
        in: 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
        out: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
        inOut: 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
    },
    quad: {
        in: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
        out: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        inOut: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
    },
    quart: {
        in: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
        out: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
        inOut: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
    },
    quint: {
        in: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
        out: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
        inOut: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',
    },
    sine: {
        in: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
        out: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
        inOut: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
    },
    back: {
        in: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
        out: 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
        inOut: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
    },
    smooth: {
        in: 'cubic-bezier(0.81, 0.0, 0.5, 0.965)',
        out: 'cubic-bezier(0.5, 0.035, 0.19, 1.0)',
    },
    custom: {
        // ButterOut: Even smoother than $SmoothOut!
        butterOut: 'cubic-bezier(0.35, 0.0, 0.0, 1.0)',

        // WipeOut: Useful for wipe transitions - especially where an element moves a long distance
        wipeOut: 'cubic-bezier(0.335, 0.0, 0.225, 1.0)',

        // SilkOut: Similar to QuartInOut, but weighted a bit more towards a smoother ending.
        silkOut: 'cubic-bezier(0.645, 0.045, 0.1, 1.0)',

        // SmoothLine: linear (no ease) mixed with a little bit easing (like SineInOut, but much less Useful for long animation durations and/or very large distances)
        smoothLine: 'cubic-bezier(0.2, 0.005, 0.8, 1.0)',

        // SmoothCirc: A lot like CircOut, but with a little smoother beginning and end
        smoothCirc: 'cubic-bezier(0.1, 0.0, 0.0, 1.0)',
    },
};
