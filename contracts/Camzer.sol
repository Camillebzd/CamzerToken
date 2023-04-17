//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Camzer is ERC20 {
    uint constant _initial_supply = 100 * (10**18);

    constructor() ERC20("Camzer", "CZR") {
        _mint(msg.sender, _initial_supply);
    }
}