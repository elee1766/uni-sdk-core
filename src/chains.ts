export enum ChainId {
  MAINNET = 1,
  GOERLI = 5,
  SEPOLIA = 11155111,
  OPTIMISM = 10,
  OPTIMISM_GOERLI = 420,
  ARBITRUM_ONE = 42161,
  ARBITRUM_GOERLI = 421613,
  POLYGON = 137,
  POLYGON_MUMBAI = 80001,
  CELO = 42220,
  SAGA = 5464,
  LIGHTLINK = 1890,
  CELO_ALFAJORES = 44787,
  GNOSIS = 100,
  MOONBEAM = 1284,
  ZKSYNC = 324,
  XLAYER = 196,
  BOB = 60808,
  LISK = 1135,
  ZKLINK = 810180,
  TAIKO = 167000,
  SEI = 1329,
  MANTLE = 5000,
  SEI_TESTNET = 713715,
  LINEA = 59144,
  BLAST = 81457,
  MANTA = 169,
  POLYGON_ZKEVM = 1101,
  SCROLL = 534352,
  ROOTSTOCK = 30,
  FILECOIN = 314,
  BNB = 56,
  AVALANCHE = 43114,
  BASE_GOERLI = 84531,
  BASE = 8453,
  BOBA = 288,
  CORN = 21000000,
  METAL = 1750,
  SONIC = 146,
  HEMI = 43111,
  TELOS = 40,
  GOAT = 2345,
  REDBELLY = 151,
}

export const SUPPORTED_CHAINS = [
  ChainId.MAINNET,
  ChainId.OPTIMISM,
  ChainId.OPTIMISM_GOERLI,
  ChainId.ARBITRUM_ONE,
  ChainId.ARBITRUM_GOERLI,
  ChainId.POLYGON,
  ChainId.POLYGON_MUMBAI,
  ChainId.GOERLI,
  ChainId.SEPOLIA,
  ChainId.CELO_ALFAJORES,
  ChainId.CELO,
  ChainId.SAGA,
  ChainId.LIGHTLINK,
  ChainId.BNB,
  ChainId.AVALANCHE,
  ChainId.MOONBEAM,
  ChainId.ZKSYNC,
  ChainId.GNOSIS,
  ChainId.XLAYER,
  ChainId.BOB,
  ChainId.LISK,
  ChainId.ZKLINK,
  ChainId.TAIKO,
  ChainId.SEI,
  ChainId.MANTLE,
  ChainId.SEI_TESTNET,
  ChainId.LINEA,
  ChainId.BLAST,
  ChainId.MANTA,
  ChainId.POLYGON_ZKEVM,
  ChainId.SCROLL,
  ChainId.ROOTSTOCK,
  ChainId.FILECOIN,
  ChainId.BOBA,
  ChainId.BASE,
  ChainId.BASE_GOERLI,
  ChainId.CORN,
  ChainId.METAL,
  ChainId.SONIC,
  ChainId.HEMI,
  ChainId.TELOS,
  ChainId.GOAT,
  ChainId.REDBELLY,
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  MATIC = 'MATIC',
  CELO = 'CELO',
  SAGA = 'GAS',
  LIGHTLINK = 'ETH',
  GNOSIS = 'XDAI',
  MOONBEAM = 'GLMR',
  ZKSYNC = 'ETH',
  BOB = 'ETH',
  LISK = 'ETH',
  ZKLINK = 'ETH',
  TAIKO = 'ETH',
  SEI = 'SEI',
  MANTLE = 'MNT',
  SEI_TESTNET = 'SEI',
  LINEA = 'ETH',
  BLAST = 'ETH',
  MANTA = 'ETH',
  POLYGON_ZKEVM = 'ETH',
  SCROLL = 'ETH',
  ROOTSTOCK = 'RBTC',
  FILECOIN = 'FIL',
  BNB = 'BNB',
  AVAX = 'AVAX',
  BOBA = 'BOBA',
  CORN = 'BTCN',
  METAL = 'ETH',
  SONIC = 'SONIC',
  HEMI = 'ETH',
  TELOS = 'TLOS',
  GOAT = 'BTC',
  REDBELLY = 'RBNT',
}
