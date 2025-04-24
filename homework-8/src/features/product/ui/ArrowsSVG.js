export const LeftArrowSVG = () => {
    return (
        <svg width="30" height="30" fill="none">
            <defs>
                <clipPath>
                    <rect
                        rx="0"
                        width="30"
                        height="30"
                        transform="translate(.5 .5)"
                        fill="#fff"
                        fillOpacity="0"
                    />
                </clipPath>
            </defs>
            <rect
                rx="0"
                width="30"
                height="30"
                transform="translate(.5 .5)"
                fill="none"
            />
            <g clipPath="url(#a)">
                <path
                    d="m21.69 7.75-7.75 7.75 7.75 7.75-1.55 3.09L9.29 15.5 20.14 4.64l1.55 3.11z"
                    fill="#000"
                />
            </g>
        </svg>
    );
};

export const RightArrowSVG = () => {
    return (
        <svg
            width="31"
            height="31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <clipPath>
                    <rect
                        rx="0"
                        width="30"
                        height="30"
                        transform="translate(.5 .5)"
                        fill="#fff"
                        fillOpacity="0"
                    />
                </clipPath>
            </defs>
            <rect
                rx="0"
                width="30"
                height="30"
                transform="translate(.5 .5)"
                fill="none"
            />
            <g clipPath="url(#a)">
                <path
                    d="m9.29 23.25 7.75-7.75-7.75-7.75 1.55-3.11L21.69 15.5 10.84 26.34l-1.55-3.09z"
                    fill="#000"
                />
            </g>
        </svg>
    );
};
