export const Loader = () => {
    return (
        <div className="load">
            <div className="load-one"></div>
            <div className="load-two"></div>
            <div className="load-three"></div>
            <style>{`
                * {
                    margin:0px;
                    }
                    .load {
                    width:100%;
                    height:100vh;
                    background-color: #4a4a4a;
                    /*     margin:0px; */
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .load div {
                        width: 30px;
                        height: 30px;
                        background-color: #6bd2ff;
                        margin-left: 5px;
                        border-radius: 50%;
                        -webkit-border-radius: 50%;
                        -moz-border-radius: 50%;
                        -ms-border-radius: 50%;
                        -o-border-radius: 50%;
                        margin-top: calc(50px - 12.5px);
                        animation-name: loading;
                        animation-duration: 1.2s;
                        animation-iteration-count: infinite;
                        animation-direction: alternate;
                    }
                    .load-two {
                        animation-delay: 0.4s;
                    }
                    .load-three {
                        animation-delay: 0.8s;
                    }
                    @keyframes loading {
                        to {
                            opacity: 0.3;
                            transform: translateY(-30px);
                            -webkit-transform: translateY(-30px);
                            -moz-transform: translateY(-30px);
                            -ms-transform: translateY(-30px);
                            -o-transform: translateY(-30px);
                }

            }
        `}</style>
    </div>)
}
