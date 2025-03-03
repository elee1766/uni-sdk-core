import { ChainId, SupportedChainsType, SUPPORTED_CHAINS } from './chains'

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  v3CoreFactoryAddress: string
  multicallAddress: string
  quoterAddress: string
  v3MigratorAddress?: string
  nonfungiblePositionManagerAddress?: string
  tickLensAddress?: string
  swapRouter02Address?: string
  v1MixedRouteQuoterAddress?: string
}

const DEFAULT_NETWORKS = [ChainId.MAINNET, ChainId.GOERLI, ChainId.SEPOLIA]

function constructSameAddressMap(address: string, additionalNetworks: ChainId[] = []): AddressMap {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = address
    return memo
  }, {})
}

export const UNI_ADDRESSES: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', [
  ChainId.OPTIMISM,
  ChainId.ARBITRUM_ONE,
  ChainId.POLYGON,
  ChainId.POLYGON_MUMBAI,
  ChainId.SEPOLIA
])

export const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78'

export const V2_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
export const V2_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_FACTORY_ADDRESS, [
  ChainId.POLYGON,
  ChainId.OPTIMISM,
  ChainId.CELO,
  ChainId.ARBITRUM_ONE,
  ChainId.BNB,
  ChainId.AVALANCHE,
  ChainId.BASE
])
export const V2_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
export const V2_ROUTER_ADDRESSES: AddressMap = constructSameAddressMap(V2_ROUTER_ADDRESS)

// Networks that share most of the same addresses i.e. Mainnet, Goerli, Optimism, Arbitrum, Polygon
const DEFAULT_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  multicallAddress: '0x1F98415757620B543A52E61c46B32eB19261F984',
  quoterAddress: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6',
  v3MigratorAddress: '0xA5644E29708357803b5A882D272c41cC0dF92B34',
  nonfungiblePositionManagerAddress: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88'
}
const MAINNET_ADDRESSES: ChainAddresses = {
  ...DEFAULT_ADDRESSES,
  v1MixedRouteQuoterAddress: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E'
}
const GOERLI_ADDRESSES: ChainAddresses = {
  ...DEFAULT_ADDRESSES,
  v1MixedRouteQuoterAddress: '0xBa60b6e6fF25488308789E6e0A65D838be34194e'
}

const OPTIMISM_ADDRESSES: ChainAddresses = DEFAULT_ADDRESSES
const ARBITRUM_ONE_ADDRESSES: ChainAddresses = {
  ...DEFAULT_ADDRESSES,
  multicallAddress: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  tickLensAddress: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573'
}
const POLYGON_ADDRESSES: ChainAddresses = DEFAULT_ADDRESSES

// celo v3 addresses
const CELO_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc',
  multicallAddress: '0x633987602DE5C4F337e3DbF265303A1080324204',
  quoterAddress: '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8',
  v3MigratorAddress: '0x3cFd4d48EDfDCC53D3f173F596f621064614C582',
  nonfungiblePositionManagerAddress: '0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A',
  tickLensAddress: '0x5f115D9113F88e0a0Db1b5033D90D4a9690AcD3D'
}

const SAGA_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x454050C4c9190390981Ac4b8d5AFcd7aC65eEffa',
  multicallAddress: '0x743E03cceB4af2efA3CC76838f6E8B50B63F184c',
  quoterAddress: '0x9db70E29712Cc8Af10c2B597BaDA6784544FF407',
  v3MigratorAddress: '0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2',
  nonfungiblePositionManagerAddress: '0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf',
  tickLensAddress: '0x6Aa54a43d7eEF5b239a18eed3Af4877f46522BCA',
  swapRouter02Address: '0x346239972d1fa486FC4a521031BC81bFB7D6e8a4'
}

const LIGHTLINK_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xcb2436774C3e191c85056d248EF4260ce5f27A9D',
  multicallAddress: '0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435',
  quoterAddress: '0x5911cB3633e764939edc2d92b7e1ad375Bb57649',
  v3MigratorAddress: '0x8B3c541c30f9b29560f56B9E44b59718916B69EF',
  nonfungiblePositionManagerAddress: '0x743E03cceB4af2efA3CC76838f6E8B50B63F184c',
  tickLensAddress: '0xB3309C48F8407651D918ca3Da4C45DE40109E641',
  swapRouter02Address: '0xaa52bB8110fE38D0d2d2AF0B85C3A3eE622CA455'
}

// BNB v3 addresses
const BNB_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7',
  multicallAddress: '0x963Df249eD09c358A4819E39d9Cd5736c3087184',
  quoterAddress: '0x78D78E420Da98ad378D7799bE8f4AF69033EB077',
  v3MigratorAddress: '0x32681814957e0C13117ddc0c2aba232b5c9e760f',
  nonfungiblePositionManagerAddress: '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613',
  tickLensAddress: '0xD9270014D396281579760619CCf4c3af0501A47C',
  swapRouter02Address: '0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2'
}

// optimism goerli addresses
const OPTIMISM_GOERLI_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xB656dA17129e7EB733A557f4EBc57B76CFbB5d10',
  multicallAddress: '0x07F2D8a2a02251B62af965f22fC4744A5f96BCCd',
  quoterAddress: '0x9569CbA925c8ca2248772A9A4976A516743A246F',
  v3MigratorAddress: '0xf6c55fBe84B1C8c3283533c53F51bC32F5C7Aba8',
  nonfungiblePositionManagerAddress: '0x39Ca85Af2F383190cBf7d7c41ED9202D27426EF6',
  tickLensAddress: '0xe6140Bd164b63E8BfCfc40D5dF952f83e171758e'
}

// arbitrum goerli v3 addresses
const ARBITRUM_GOERLI_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x4893376342d5D7b3e31d4184c08b265e5aB2A3f6',
  multicallAddress: '0x8260CB40247290317a4c062F3542622367F206Ee',
  quoterAddress: '0x1dd92b83591781D0C6d98d07391eea4b9a6008FA',
  v3MigratorAddress: '0xA815919D2584Ac3F76ea9CB62E6Fd40a43BCe0C3',
  nonfungiblePositionManagerAddress: '0x622e4726a167799826d1E1D150b076A7725f5D81',
  tickLensAddress: '0xb52429333da969a0C79a60930a4Bf0020E5D1DE8'
}

// sepolia v3 addresses
const SEPOLIA_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x0227628f3F023bb0B980b67D528571c95c6DaC1c',
  multicallAddress: '0xD7F33bCdb21b359c8ee6F0251d30E94832baAd07',
  quoterAddress: '0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3',
  v3MigratorAddress: '0x729004182cF005CEC8Bd85df140094b6aCbe8b15',
  nonfungiblePositionManagerAddress: '0x1238536071E1c677A632429e3655c799b22cDA52',
  tickLensAddress: '0xd7f33bcdb21b359c8ee6f0251d30e94832baad07'
}

// Avalanche v3 addresses
const AVALANCHE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD',
  multicallAddress: '0x0139141Cd4Ee88dF3Cdb65881D411bAE271Ef0C2',
  quoterAddress: '0xbe0F5544EC67e9B3b2D979aaA43f18Fd87E6257F',
  v3MigratorAddress: '0x44f5f1f5E452ea8d29C890E8F6e893fC0f1f0f97',
  nonfungiblePositionManagerAddress: '0x655C406EBFa14EE2006250925e54ec43AD184f8B',
  tickLensAddress: '0xEB9fFC8bf81b4fFd11fb6A63a6B0f098c6e21950',
  swapRouter02Address: '0xbb00FF08d01D300023C629E8fFfFcb65A5a578cE'
}

const MOONBEAM_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x28f1158795A3585CaAA3cD6469CD65382b89BB70',
  multicallAddress: '0xcefe54c7a797199ab4e7e9ebb0885f1ece4aa544',
  quoterAddress: '0x48aF91cDcad8FfdD7a8d4CdF73c16CB0632D3D17',
  v3MigratorAddress: '0x76776b10d782a1d194fBFC92d4b01db1cE1eEB4B',
  nonfungiblePositionManagerAddress: '0x9036D0DcB5a059C9371B05D508f0072Df773854e',
  tickLensAddress: '0x1f4F7b041895D9eB1A79be0896AF3E68e4160010',
  swapRouter02Address: '0xc507E22BA3140dc0A79fDF27e03c98aa20f3ee66'
}

const ZKSYNC_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x8FdA5a7a8dCA67BBcDd10F02Fa0649A937215422',
  multicallAddress: '0x0c68a7C72f074d1c45C16d41fa74eEbC6D16a65C',
  quoterAddress: '0x8Cb537fc92E26d8EBBb760E632c95484b6Ea3e28',
  v3MigratorAddress: '0x611841b24E43C4ACfd290B427a3D6cf1A59dac8E',
  nonfungiblePositionManagerAddress: '0x0616e5762c1E7Dc3723c50663dF10a162D690a86',
  tickLensAddress: '0xe10FF11b809f8EE07b056B452c3B2caa7FE24f89',
  swapRouter02Address: '0x99c56385daBCE3E81d8499d0b8d0257aBC07E8A3'
}

const GNOSIS_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xe32F7dD7e3f098D518ff19A22d5f028e076489B1',
  multicallAddress: '0x4dfa9a980efE4802E969AC33968E3d6E59B8a19e',
  quoterAddress: '0x7E9cB3499A6cee3baBe5c8a3D328EA7FD36578f4',
  v3MigratorAddress: '0x16dd75c567a07082452aB56fD1E673987289E6Ef',
  nonfungiblePositionManagerAddress: '0xAE8fbE656a77519a7490054274910129c9244FA3',
  tickLensAddress: '0x8fe3D346B53dCA838B228e0e53aCdBED5DEC70Dc',
  swapRouter02Address: '0xc6D25285D5C5b62b7ca26D6092751A145D50e9Be'
}

const XLAYER_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xcb2436774C3e191c85056d248EF4260ce5f27A9D',
  multicallAddress: '0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435',
  quoterAddress: '0xaa52bB8110fE38D0d2d2AF0B85C3A3eE622CA455',
  v3MigratorAddress: '0x8B3c541c30f9b29560f56B9E44b59718916B69EF',
  nonfungiblePositionManagerAddress: '0x743E03cceB4af2efA3CC76838f6E8B50B63F184c',
  tickLensAddress: '0xB3309C48F8407651D918ca3Da4C45DE40109E641',
  swapRouter02Address: '0x807F4E281B7A3B324825C64ca53c69F0b418dE40'
}

const BOB_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xcb2436774C3e191c85056d248EF4260ce5f27A9D',
  multicallAddress: '0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435',
  quoterAddress: '0x6Aa54a43d7eEF5b239a18eed3Af4877f46522BCA',
  nonfungiblePositionManagerAddress: '0x743E03cceB4af2efA3CC76838f6E8B50B63F184c',
  tickLensAddress: '0xB3309C48F8407651D918ca3Da4C45DE40109E641',
  swapRouter02Address: '0x807F4E281B7A3B324825C64ca53c69F0b418dE40'
}

const LISK_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x0d922Fb1Bc191F64970ac40376643808b4B74Df9',
  multicallAddress: '0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA',
  quoterAddress: '0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2',
  v3MigratorAddress: '0xaa52bB8110fE38D0d2d2AF0B85C3A3eE622CA455',
  nonfungiblePositionManagerAddress: '0x5911cB3633e764939edc2d92b7e1ad375Bb57649',
  tickLensAddress: '0x38EB9e62ABe4d3F70C0e161971F29593b8aE29FF',
  swapRouter02Address: '0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc'
}

const ZKLINK_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x9BD6230EDb501e28442B9deE9e35d01eeb946249',
  multicallAddress: '0xccca83bd6343fe9535E0e65AF4601424E95e3974',
  quoterAddress: '0x21B6C567c6b71fc6599A40134aEEb060Edd6b408',
  v3MigratorAddress: '0xD3239f8D4c6245359f4F050F5133A9F61F4e2ACF',
  nonfungiblePositionManagerAddress: '0xAA904d497e42608C014BE83a026E984aFc16129b',
  tickLensAddress: '0x6EF712E1f851d2E637a0FE7DF5C09ad7DC141CB0',
  swapRouter02Address: '0x7e0a29b7b7E2f4176062b8EDf8BDa96dFB1B7c9e'
}

const TAIKO_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x75FC67473A91335B5b8F8821277262a13B38c9b3',
  multicallAddress: '0x0d922Fb1Bc191F64970ac40376643808b4B74Df9',
  quoterAddress: '0x807F4E281B7A3B324825C64ca53c69F0b418dE40',
  v3MigratorAddress: '0x6Aa54a43d7eEF5b239a18eed3Af4877f46522BCA',
  nonfungiblePositionManagerAddress: '0x8B3c541c30f9b29560f56B9E44b59718916B69EF',
  tickLensAddress: '0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA',
  swapRouter02Address: '0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf'
}

const SEI_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x75FC67473A91335B5b8F8821277262a13B38c9b3',
  multicallAddress: '0x0d922Fb1Bc191F64970ac40376643808b4B74Df9',
  quoterAddress: '0x807F4E281B7A3B324825C64ca53c69F0b418dE40',
  v3MigratorAddress: '0x6Aa54a43d7eEF5b239a18eed3Af4877f46522BCA',
  nonfungiblePositionManagerAddress: '0x8B3c541c30f9b29560f56B9E44b59718916B69EF',
  tickLensAddress: '0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA',
  swapRouter02Address: '0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf'
}

const MANTLE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x0d922Fb1Bc191F64970ac40376643808b4B74Df9',
  multicallAddress: '0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA',
  quoterAddress: '0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf',
  v3MigratorAddress: '0xaa52bB8110fE38D0d2d2AF0B85C3A3eE622CA455',
  nonfungiblePositionManagerAddress: '0x5911cB3633e764939edc2d92b7e1ad375Bb57649',
  tickLensAddress: '0x38EB9e62ABe4d3F70C0e161971F29593b8aE29FF',
  swapRouter02Address: '0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2'
}

const SEI_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x32CB2e76E80B2A8abc968985B23408E2D5885341',
  multicallAddress: '0x474bD11F7777d0a1EE0B7c0bb48Acd9244A2afCE',
  quoterAddress: '0x254b4407D6D7f12F6146b65Ab2eE1bCA6dc3839e',
  v3MigratorAddress: '0x39f51aC699789A8020d176AA8D93555B5Fcc674f',
  nonfungiblePositionManagerAddress: '0x2d1886A4C71df03685ba1e6B0075e285a34e2c30',
  tickLensAddress: '0x09E6a35D9c4d6fA4257aeE015793Cd5Cbf8fa6D8',
  swapRouter02Address: '0x2774481f8326Fc4ad1E8c96437Bb9eADBe8A8F2a'
}

const LINEA_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x31FAfd4889FA1269F7a13A66eE0fB458f27D72A9',
  multicallAddress: '0x93e253D101519578A8DF0BCe2A43D8292BFb3A1F',
  quoterAddress: '0x42bE4D6527829FeFA1493e1fb9F3676d2425C3C1',
  v3MigratorAddress: '0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1',
  nonfungiblePositionManagerAddress: '0x4615C383F85D0a2BbED973d83ccecf5CB7121463',
  tickLensAddress: '0x3334d83e224aF5ef9C2E7DDA7c7C98Efd9621fA9',
  swapRouter02Address: '0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a'
}

const BLAST_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x792edAdE80af5fC680d96a2eD80A44247D2Cf6Fd',
  multicallAddress: '0xdC7f370de7631cE9e2c2e1DCDA6B3B5744Cf4705',
  quoterAddress: '0x6Cdcd65e03c1CEc3730AeeCd45bc140D57A25C77',
  v3MigratorAddress: '0x15CA7043CD84C5D21Ae76Ba0A1A967d42c40ecE0',
  nonfungiblePositionManagerAddress: '0xB218e4f7cF0533d4696fDfC419A0023D33345F28',
  tickLensAddress: '0x2E95185bCdD928a3e984B7e2D6560Ab1b17d7274',
  swapRouter02Address: '0x549FEB8c9bd4c12Ad2AB27022dA12492aC452B66'
}

const MANTA_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x06D830e15081f65923674268121FF57Cc54e4e23',
  multicallAddress: '0x3C7B6fA5376Ba88364e9BeAE6E1aEc9f738e8f63',
  quoterAddress: '0xEa9f30b3309AE3Ee890F02cDAa880857e2FD2F24',
  v3MigratorAddress: '0xe63b94a752bE0ddd4895D96Df173D7121d3D61e4',
  nonfungiblePositionManagerAddress: '0xA4F2Db71348697C65A64a146F709C73030C2ebcD',
  tickLensAddress: '0xC94Fb2D13587b0b5af78094933490B35E004eAbE',
  swapRouter02Address: '0x94AA89D2fAB79D4D2B301848748806f6209D60F1'
}

const POLYGON_ZKEVM_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xff83c3c800Fec21de45C5Ec30B69ddd5Ee60DFC2',
  multicallAddress: '0x9073E304a15b1522132848B461857cd8BA932ea7',
  quoterAddress: '0xFDC32821e491759e680eb4582ec2e65e8F925239',
  v3MigratorAddress: '0xbceE0bb1EDb1ABc94658e3C99c1213748A001f25',
  nonfungiblePositionManagerAddress: '0xf0D61Aeda516CCa1FF20Be65Cfb0213be688A24f',
  tickLensAddress: '0x64519b94A7248Bf17929fB03b9648ce277Fd7fDA',
  swapRouter02Address: '0x0E0434DDf5273F71250A99c6fbcABfeCA301DE5F'
}

const SCROLL_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x70C62C8b8e801124A4Aa81ce07b637A3e83cb919',
  multicallAddress: '0xC1D2e074C38FdD5CA965000668420C80316F0915',
  quoterAddress: '0x2566e082Cb1656d22BCbe5644F5b997D194b5299',
  v3MigratorAddress: '0xF00577B5Dd0DA227298E954Ed11356F264Cf93d4',
  nonfungiblePositionManagerAddress: '0xB39002E4033b162fAc607fc3471E205FA2aE5967',
  tickLensAddress: '0x85780e12e90D2a684eB8E7404c985b5B5c8ce7E9',
  swapRouter02Address: '0xfc30937f5cde93df8d48acaf7e6f5d8d8a31f636'
}

const ROOTSTOCK_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xaF37EC98A00FD63689CF3060BF3B6784E00caD82',
  multicallAddress: '0x162774E760568e3318CD4dD3756cb920AA09fC27',
  quoterAddress: '0xb51727c996C68E60F598A923a5006853cd2fEB31',
  v3MigratorAddress: '0x16678977CA4ec3DAD5efc7b15780295FE5f56162',
  nonfungiblePositionManagerAddress: '0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1',
  tickLensAddress: '0x55B9dF5bF68ADe972191a91980459f48ecA16afC',
  swapRouter02Address: '0x0B14ff67f0014046b4b99057Aec4509640b3947A'
}

const FILECOIN_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xB4C47eD546Fc31E26470a186eC2C5F19eF09BA41',
  multicallAddress: '0xffd927d6F17495B28635DD49d24638e97BD8c8b8',
  quoterAddress: '0xE45C06922228A33fFf1ED54638A0db78f69F9780',
  v3MigratorAddress: '0x409af45457D4779828BFBCbe7aA653C38Edb9Ed9',
  nonfungiblePositionManagerAddress: '0x4cd986dD509fbB6A695aE971d5C56c8795f640ee',
  tickLensAddress: '0x76c001ad9E527FEfA8Fa822a987Ad44ce720BAeD',
  swapRouter02Address: '0xcAb04058e60020d65D18D4B3DFF2cA1445D7099f'
}

const BOBA_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xFFCd7Aed9C627E82A765c3247d562239507f6f1B',
  multicallAddress: '0xd213Ff319F8d28Fe31EbDB75b23aA61a2b905320',
  quoterAddress: '0x483fc90DDC7aC847D4a752055DCF73483B6d97FD',
  v3MigratorAddress: '0x9ab1E646877732DD76bd662DC242723D7e4B42ba',
  nonfungiblePositionManagerAddress: '0x0bfc9aC7E52f38EAA6dC8d10942478f695C6Cf71',
  tickLensAddress: '0x36EBd44350E4406E67C5579026950793b8528402',
  swapRouter02Address: '0x759E8B0cb9d65291e258aE3e043258ae1dD0df16'
}
const BASE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x33128a8fC17869897dcE68Ed026d694621f6FDfD',
  multicallAddress: '0x091e99cb1C49331a94dD62755D168E941AbD0693',
  quoterAddress: '0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a',
  v3MigratorAddress: '0x23cF10b1ee3AdfCA73B0eF17C07F7577e7ACd2d7',
  nonfungiblePositionManagerAddress: '0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1',
  tickLensAddress: '0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d',
  swapRouter02Address: '0x2626664c2603336E57B271c5C0b26F421741e481'
}
const CORN_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xcb2436774C3e191c85056d248EF4260ce5f27A9D',
  multicallAddress: '0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435',
  quoterAddress: '0xaa52bB8110fE38D0d2d2AF0B85C3A3eE622CA455',
  v3MigratorAddress: '0x8B3c541c30f9b29560f56B9E44b59718916B69EF',
  nonfungiblePositionManagerAddress: '0x743E03cceB4af2efA3CC76838f6E8B50B63F184c',
  tickLensAddress: '0xB3309C48F8407651D918ca3Da4C45DE40109E641',
  swapRouter02Address: '0x807F4E281B7A3B324825C64ca53c69F0b418dE40'
}

const METAL_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xcb2436774C3e191c85056d248EF4260ce5f27A9D',
  multicallAddress: '0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435',
  quoterAddress: '0xaa52bB8110fE38D0d2d2AF0B85C3A3eE622CA455',
  v3MigratorAddress: '0x8B3c541c30f9b29560f56B9E44b59718916B69EF',
  nonfungiblePositionManagerAddress: '0x743E03cceB4af2efA3CC76838f6E8B50B63F184c',
  tickLensAddress: '0xB3309C48F8407651D918ca3Da4C45DE40109E641',
  swapRouter02Address: '0x807F4E281B7A3B324825C64ca53c69F0b418dE40'
}

const SONIC_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xcb2436774C3e191c85056d248EF4260ce5f27A9D',
  multicallAddress: '0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435',
  quoterAddress: '0x5911cB3633e764939edc2d92b7e1ad375Bb57649',
  v3MigratorAddress: '0x8B3c541c30f9b29560f56B9E44b59718916B69EF',
  nonfungiblePositionManagerAddress: '0x743E03cceB4af2efA3CC76838f6E8B50B63F184c',
  tickLensAddress: '0xB3309C48F8407651D918ca3Da4C45DE40109E641',
  swapRouter02Address: '0xaa52bB8110fE38D0d2d2AF0B85C3A3eE622CA455'
}

const TELOS_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xcb2436774C3e191c85056d248EF4260ce5f27A9D',
  multicallAddress: '0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435',
  quoterAddress: '0x5911cB3633e764939edc2d92b7e1ad375Bb57649',
  v3MigratorAddress: '0x8B3c541c30f9b29560f56B9E44b59718916B69EF',
  nonfungiblePositionManagerAddress: '0x743E03cceB4af2efA3CC76838f6E8B50B63F184c',
  tickLensAddress: '0xB3309C48F8407651D918ca3Da4C45DE40109E641',
  swapRouter02Address: '0xaa52bB8110fE38D0d2d2AF0B85C3A3eE622CA455'
}

const HEMI_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xcb2436774C3e191c85056d248EF4260ce5f27A9D',
  multicallAddress: '0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435',
  quoterAddress: '0x5911cB3633e764939edc2d92b7e1ad375Bb57649',
  v3MigratorAddress: '0x8B3c541c30f9b29560f56B9E44b59718916B69EF',
  nonfungiblePositionManagerAddress: '0x743E03cceB4af2efA3CC76838f6E8B50B63F184c',
  tickLensAddress: '0xB3309C48F8407651D918ca3Da4C45DE40109E641',
  swapRouter02Address: '0xaa52bB8110fE38D0d2d2AF0B85C3A3eE622CA455'
}

const GOAT_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xcb2436774C3e191c85056d248EF4260ce5f27A9D',
  multicallAddress: '0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435',
  quoterAddress: '0x5911cB3633e764939edc2d92b7e1ad375Bb57649',
  v3MigratorAddress: '0x8B3c541c30f9b29560f56B9E44b59718916B69EF',
  nonfungiblePositionManagerAddress: '0x743E03cceB4af2efA3CC76838f6E8B50B63F184c',
  tickLensAddress: '0xB3309C48F8407651D918ca3Da4C45DE40109E641',
  swapRouter02Address: '0xaa52bB8110fE38D0d2d2AF0B85C3A3eE622CA455'
}

const REDBELLY_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x75FC67473A91335B5b8F8821277262a13B38c9b3',
  multicallAddress: '0x0d922Fb1Bc191F64970ac40376643808b4B74Df9',
  quoterAddress: '0xaa52bB8110fE38D0d2d2AF0B85C3A3eE622CA455',
  v3MigratorAddress: '0x6Aa54a43d7eEF5b239a18eed3Af4877f46522BCA',
  nonfungiblePositionManagerAddress: '0x8B3c541c30f9b29560f56B9E44b59718916B69EF',
  tickLensAddress: '0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA',
  swapRouter02Address: '0x807F4E281B7A3B324825C64ca53c69F0b418dE40'
}

// Base Goerli v3 addresses
const BASE_GOERLI_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x9323c1d6D800ed51Bd7C6B216cfBec678B7d0BC2',
  multicallAddress: '0xB206027a9E0E13F05eBEFa5D2402Bab3eA716439',
  quoterAddress: '0xedf539058e28E5937dAef3f69cEd0b25fbE66Ae9',
  v3MigratorAddress: '0x3efe5d02a04b7351D671Db7008ec6eBA9AD9e3aE',
  nonfungiblePositionManagerAddress: '0x3c61369ef0D1D2AFa70d8feC2F31C5D6Ce134F30',
  tickLensAddress: '0x1acB873Ee909D0c98adB18e4474943249F931b92',
  swapRouter02Address: '0x8357227D4eDc78991Db6FDB9bD6ADE250536dE1d'
}

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.MAINNET]: MAINNET_ADDRESSES,
  [ChainId.OPTIMISM]: OPTIMISM_ADDRESSES,
  [ChainId.ARBITRUM_ONE]: ARBITRUM_ONE_ADDRESSES,
  [ChainId.POLYGON]: POLYGON_ADDRESSES,
  [ChainId.POLYGON_MUMBAI]: POLYGON_ADDRESSES,
  [ChainId.GOERLI]: GOERLI_ADDRESSES,
  [ChainId.CELO]: CELO_ADDRESSES,
  [ChainId.SAGA]: SAGA_ADDRESSES,
  [ChainId.LIGHTLINK]: LIGHTLINK_ADDRESSES,
  [ChainId.CELO_ALFAJORES]: CELO_ADDRESSES,
  [ChainId.BNB]: BNB_ADDRESSES,
  [ChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_ADDRESSES,
  [ChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_ADDRESSES,
  [ChainId.SEPOLIA]: SEPOLIA_ADDRESSES,
  [ChainId.AVALANCHE]: AVALANCHE_ADDRESSES,
  [ChainId.BASE]: BASE_ADDRESSES,
  [ChainId.BASE_GOERLI]: BASE_GOERLI_ADDRESSES,
  [ChainId.MOONBEAM]: MOONBEAM_ADDRESSES,
  [ChainId.ZKSYNC]: ZKSYNC_ADDRESSES,
  [ChainId.GNOSIS]: GNOSIS_ADDRESSES,
  [ChainId.XLAYER]: XLAYER_ADDRESSES,
  [ChainId.BOB]: BOB_ADDRESSES,
  [ChainId.LISK]: LISK_ADDRESSES,
  [ChainId.ZKLINK]: ZKLINK_ADDRESSES,
  [ChainId.TAIKO]: TAIKO_ADDRESSES,
  [ChainId.SEI]: SEI_ADDRESSES,
  [ChainId.MANTLE]: MANTLE_ADDRESSES,
  [ChainId.SEI_TESTNET]: SEI_TESTNET_ADDRESSES,
  [ChainId.LINEA]: LINEA_ADDRESSES,
  [ChainId.BLAST]: BLAST_ADDRESSES,
  [ChainId.MANTA]: MANTA_ADDRESSES,
  [ChainId.POLYGON_ZKEVM]: POLYGON_ZKEVM_ADDRESSES,
  [ChainId.SCROLL]: SCROLL_ADDRESSES,
  [ChainId.ROOTSTOCK]: ROOTSTOCK_ADDRESSES,
  [ChainId.FILECOIN]: FILECOIN_ADDRESSES,
  [ChainId.BOBA]: BOBA_ADDRESSES,
  [ChainId.CORN]: CORN_ADDRESSES,
  [ChainId.METAL]: METAL_ADDRESSES,
  [ChainId.SONIC]: SONIC_ADDRESSES,
  [ChainId.HEMI]: HEMI_ADDRESSES,
  [ChainId.TELOS]: TELOS_ADDRESSES,
  [ChainId.GOAT]: GOAT_ADDRESSES,
  [ChainId.REDBELLY]: REDBELLY_ADDRESSES,
}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress
    return memo
  }, {})
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress
    }
    return memo
  }, {})
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    return memo
  }, {})
}

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
)
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6'
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3'
}

export const TIMELOCK_ADDRESSES: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e'
}

export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8'
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress
    return memo
  }, {})
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress
    }
    return memo
  }, {})
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e')
}

export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd'
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress
    }
    return memo
  }, {})
}

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
  const v1MixedRouteQuoterAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v1MixedRouteQuoterAddress
  if (v1MixedRouteQuoterAddress) {
    memo[chainId] = v1MixedRouteQuoterAddress
  }
  return memo
}, {})

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (
    chainId == ChainId.BNB ||
    chainId == ChainId.BOBA ||
    chainId == ChainId.MOONBEAM ||
    chainId == ChainId.ZKSYNC ||
    chainId == ChainId.BOB ||
    chainId == ChainId.LISK ||
    chainId == ChainId.ZKLINK ||
    chainId == ChainId.TAIKO ||
    chainId == ChainId.SEI ||
    chainId == ChainId.MANTLE ||
    chainId == ChainId.SEI_TESTNET ||
    chainId == ChainId.LINEA ||
    chainId == ChainId.BLAST ||
    chainId == ChainId.MANTA ||
    chainId == ChainId.SCROLL ||
    chainId == ChainId.ROOTSTOCK ||
    chainId == ChainId.GNOSIS ||
    chainId == ChainId.XLAYER ||
    chainId == ChainId.FILECOIN ||
    chainId == ChainId.CORN ||
    chainId == ChainId.METAL ||
    chainId == ChainId.SONIC ||
    chainId == ChainId.HEMI || 
    chainId == ChainId.TELOS ||
    chainId == ChainId.GOAT ||
    chainId == ChainId.REDBELLY ||
    chainId == ChainId.SAGA ||
    chainId == ChainId.LIGHTLINK
  ) {
    CHAIN_TO_ADDRESSES_MAP[chainId].swapRouter02Address
  }
  return '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45'
}
