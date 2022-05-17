export function logIn(userAddress){
    return {
        type: "LOG_IN",
        payload: userAddress
    }
}

export function logOut(){
    return {
        type: "LOG_OUT",
        payload: ""
    }
}

export function setWeb3(web3){
    return {
        type: "SET_WEB3",
        payload: web3
    }
}

export function setEthers(ethers){
    return {
        type: "SET_ETHERS",
        payload: ethers
    }
}

export function setProvider(provider){
    return {
        type: "SET_PROVIDER",
        payload: provider
    }
}

export function setWeb3Loading(loading){
    return {
        type: "SET_WEB3_LOADING",
        payload: loading
    }
}

export function setHasWeb3True(){
    return {
        type: "SET_HAS_WEB3_TRUE",
        payload: ""
    }
}

export function setHasProviderTrue(){
    return {
        type: "SET_HAS_PROVIDER_TRUE",
        payload: ""
    }
}

export function setBalance(balance){
    return {
        type: "SET_BALANCE",
        payload: balance
    }
}


export function setPoolLiquidity(liquidity){
    return {
        type: "SET_POOL_LIQUIDITY",
        payload: liquidity
    }
}

export function setUserLiquidity(u_liquidity){
    return {
        type: "SET_USER_LIQUIDITY",
        payload: u_liquidity
    }
}

export function setCurrentNetwork(currentNetwork){
    return {
        type: "SET_CURRENT_NETWORK",
        payload: currentNetwork
    }
}



