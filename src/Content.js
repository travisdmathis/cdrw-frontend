import React from 'react';
import moment from 'moment';
import logo from "./assets/logo.png";
import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";
import BigNumber from "bignumber.js"
import abi from 'human-standard-token-abi';

export default class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            web3: null,
        }

        this.updatePrincipalAmount = this.updatePrincipalAmount.bind(this);
        this.updateTermLength = this.updateTermLength.bind(this);
        this.submitDeposit = this.submitDeposit.bind(this);
    }

    async componentDidMount() {
        const torus = new Torus();
        await torus.init();
        await torus.login(); // await torus.ethereum.enable()
        this.setState({
            web3: new Web3(torus.provider)
        });

        console.error(this.state.web3);
    }

    updatePrincipalAmount(event) {
        this.setState({
            principalAmount: event.target.value
        });
    }

    updateTermLength(event) {
        this.setState({
            termLength: event.target.value
        });
    }

    submitDeposit() {
        // const daiInstance = new this.state.web3.eth.Contract(abi, '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea', {
        //     from: '0x9bB6ef32025C142cD22d20Fe96dcf05D424b5594', // default from address
        //     gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
        // });
    
        // daiInstance.methods.approve('0xbfa72C88A464B31Ec3c0e2a8826D3db35A897141', 30).send().then((res) => {
        //     console.log('approved', res);
        // }).catch('fuck', console.error);


        const bankInstance = new this.state.web3.eth.Contract([
            {
                "constant": true,
                "inputs": [],
                "name": "registeredBankersCount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "banker",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "termLength",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "principleAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "interestAmount",
                        "type": "uint256"
                    }
                ],
                "name": "addBuyerDepositToPool",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "rateIndex",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "redeemCertificateOfDeposit",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "registeredBankers",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "termLength",
                        "type": "uint256"
                    }
                ],
                "name": "getBestRate",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "rate",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "interestPoolBalance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "bankerOpenCDs",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "oneMonth",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "threeMonths",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "sixMonths",
                        "type": "uint256"
                    }
                ],
                "name": "registerBanker",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "oneMonth",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "threeMonths",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "sixMonths",
                        "type": "uint256"
                    }
                ],
                "name": "updateBankerInterestRates",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "threeMonthRates",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "removeBankerInterestFromPool",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "isOwner",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "addBankerInterestToPool",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "sixMonthRates",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "bankerPoolBalance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "oneMonthRates",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getUserIndexPosition",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "indexPosition",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_cdTokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_dai",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "bankerAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "BankerInterestAddedToPool",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "bankerAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "BankerInterestRemovedFromPool",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "bankerAddress",
                        "type": "address"
                    }
                ],
                "name": "BankerRegistered",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "bankerAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "oneMonthRate",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "threeMonthRate",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "sixMonthRate",
                        "type": "uint256"
                    }
                ],
                "name": "UpdatedBankerInterestRates",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "bankerAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "termLength",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "principleAmount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "interestRate",
                        "type": "uint256"
                    }
                ],
                "name": "OpenedCertificateOfDeposit",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "RedeemedCertificateOfDeposit",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            }
        ], '0xbfa72C88A464B31Ec3c0e2a8826D3db35A897141', {
            from: '0x9bB6ef32025C142cD22d20Fe96dcf05D424b5594', // default from address
            gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
        });

        bankInstance.methods.addBuyerDepositToPool(1, '0xC5bd4320b163dbFcCe0d3E80c0CfaC250BB74Aca', 3, 1, 5).send();
    }

    render() {
        return(
            <div className="container-fluid">
                <nav className="navbar navbar-light bg-light">
                    <div className="container header-container">
                        <a className="navbar-brand mr-auto header-nav">MAKE A DEPOSIT</a>

                        <img className="logo" src={logo}/>

                        <a className="navbar-brand header-nav">
                            BE A BANKER
                        </a>
                    </div>
                </nav>

                <div className="container content-container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h1 className="text-center">stream money the way you stream your music</h1>
                        </div>

                        <div className="col-md-6">
                            <label>CHOOSE TERM LENGTH</label>
                            <select onChange={this.updateTermLength}>
                                <option value={1}>1 MONTH</option>
                                <option value={3}>3 MONTHS</option>
                                <option value={6}>6 MONTHS</option>
                            </select>

                            <label className="mt-5">ENTER DEPOSIT AMOUNT</label>
                            <input type="text" placeholder="500" onChange={this.updatePrincipalAmount}></input> <span>DAI</span>
                            <br/>
                            <button onClick={this.submitDeposit} className="btn btn-success">Deposit</button>
                        </div>

                        <div className="col-md-6">
                            <table className="table data-table">
                                <thead>
                                    <tr>
                                        <th scope="col">AMOUNT</th>
                                        <th scope="col">RATE</th>
                                        <th scope="col">MATURITY</th>
                                        <th scope="col">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">$500</th>
                                        <td>5%</td>
                                        <td>{moment().add(30, 'days').format('MM/DD/YYYY')}</td>
                                        <td>
                                            <button className="btn btn-success">REDEEM</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}