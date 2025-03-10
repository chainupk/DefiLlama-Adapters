const ADDRESSES = require('../helper/coreAssets.json')
const { sumTokensExport } = require("../helper/unwrapLPs");

const AUSDC = '0x98C23E9d8f34FEFb1B7BD6a91B7FF122F4e16F5c';
const AUSDT = '0x23878914EFE38d27C4D67Ab83ed1b93A74D4086a';

const LEVEL_WRAPPED_AUSDC = '0x78c6B27Be6DB520d332b1b44323F94bC831F5e33';
const LEVEL_WRAPPED_AUSDT = '0xb723377679b807370Ae8615ae3E76F6D1E75a5F2';

const LEVEL_STAKING_CONTRACT = '0x7FDA203f6F77545548E984133be62693bCD61497';
const LEVEL_RESERVE_MANAGERS = ['0x70D544F75c2228D68EE04BC63e6e4Bae8F31fCEF', '0x7B2c2C905184CEf1FABe920D4CbEA525acAa6f14', '0x21c937d436f2d86859ce60311290a8072368932d'];
const LEVEL_WRAPPED_TOKENS = [LEVEL_WRAPPED_AUSDC, LEVEL_WRAPPED_AUSDT];

const LEVEL_USD_POINTS_FARM = '0x80B73eF4534FE245300017A5197451973559c00f';

const LEVEL_USD_USDC_CURVE_LP_TOKEN = '0x1220868672d5b10f3e1cb9ab519e4d0b08545ea4';

const TOKEN_CONTRACTS = [
    ADDRESSES.ethereum.USDT, // USDT
    ADDRESSES.ethereum.USDC, // USDC
    ADDRESSES.ethereum.DAI, // DAI
    ADDRESSES.ethereum.SDAI, // sDAI
    ADDRESSES.ethereum.sUSDe, // sUSD
    ADDRESSES.ethereum.USDe, // USDe
    ADDRESSES.ethereum.FRAX, // FRAX
    "0x0022228a2cc5E7eF0274A7Baa600d44da5aB5776", // stUSD
    "0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32", // sFRAX
    "0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32", // sFRAX
    "0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812", // wUSDM
    ADDRESSES.ethereum.USD0, // USD0
    "0x35D8949372D46B7a3D5A56006AE77B215fc69bC0", // USD0++
    ADDRESSES.ethereum.deUSD, // deUSD
    "0x5C5b196aBE0d54485975D1Ec29617D42D9198326", // stdeUSD
    AUSDC,
    AUSDT,
    "0x437cc33344a0B27A429f795ff6B469C72698B291", // smart M
    "0x8a60e489004ca22d775c5f2c657598278d17d9c2", // USDa (Avalon)
    "0x2b66aade1e9c062ff411bd47c44e0ad696d43bd9", // staked USDa (Avalon)
    "0x4956b52aE2fF65D74CA2d61207523288e4528f96", // RLP
    "0x66a1E37c9b0eAddca17d3662D6c05F4DECf3e110", // USR
    "0xfd03723a9a3abe0562451496a9a394d2c4bad4ab" // DYAD
];

module.exports = {
    ethereum: {
        tvl: sumTokensExport({ 
          owners: [LEVEL_STAKING_CONTRACT, ...LEVEL_RESERVE_MANAGERS, ...LEVEL_WRAPPED_TOKENS], 
          tokens: TOKEN_CONTRACTS,
        }),
        pool2: sumTokensExport({ owner: LEVEL_USD_POINTS_FARM, tokens: [LEVEL_USD_USDC_CURVE_LP_TOKEN] })
    }
};
