const Play = ({ className }) => {
    return (
        <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <mask
                id="mask0_1914_5675"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="2"
                y="2"
                width="42"
                height="42"
            >
                <path
                    d="M23 42.1668C33.5858 42.1668 42.1667 33.5859 42.1667 23.0002C42.1667 12.4144 33.5858 3.8335 23 3.8335C12.4143 3.8335 3.83334 12.4144 3.83334 23.0002C3.83334 33.5859 12.4143 42.1668 23 42.1668Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M19.1667 23.0002V16.3608L24.9167 19.6805L30.6667 23.0002L24.9167 26.3198L19.1667 29.6395V23.0002Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </mask>
            <g mask="url(#mask0_1914_5675)">
                <path d="M0 0H46V46H0V0Z" fill="white" />
            </g>
        </svg>
    );
};

export default Play;
