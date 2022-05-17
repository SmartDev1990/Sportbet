export const LoaderSpin = () => {
    return (
        <div className="load">
            <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
            <style>{`

            .load{
                height:200px;
                display:flex;
                align-content: center;
                justify-content: center;
                align-items: center;
            }

            .spinner {
                animation: rotator 1.4s linear infinite;
            }

            .path {
                stroke-dasharray: 187;
                stroke-dashoffset: 0;
                transform-origin: center;
                animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
            }

            @keyframes rotator {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(270deg);
                }
            }

            @keyframes colors {
                0% {
                    stroke: #4285f4;
                }
                25% {
                    stroke: #b93bff;
                }
                50% {
                    stroke: #329bff;
                }
                75% {
                    stroke: #ff7ae5;
                }
                100% {
                    stroke: #4285f4;
                }
            }
            @keyframes dash {
                0% {
                    stroke-dashoffset: 187;
                }
                50% {
                    stroke-dashoffset: 46.75;
                    transform: rotate(135deg);
                }
                100% {
                    stroke-dashoffset: 187;
                    transform: rotate(450deg);
                }
            }
        `}</style>
    </div>)
}
