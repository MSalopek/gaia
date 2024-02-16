"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[4173],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(o),g=n,h=u["".concat(l,".").concat(g)]||u[g]||p[g]||r;return o?a.createElement(h,i(i({ref:t},c),{},{components:o})):a.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var m=2;m<r;m++)i[m]=o[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}g.displayName="MDXCreateElement"},733:(e,t,o)=>{o.d(t,{g:()=>a});const a={lastRelease:{releaseName:"v11",releaseDate:"",blockHeight:"",governanceProposalLink:""},currentRelease:{releaseName:"v12",releaseDate:"",blockHeight:"",governanceProposalLink:"",gaidExecutionOutput:"\u276f gaiad version --long\nname: gaia\nserver_name: gaiad\nversion: v12.0.0\ncommit: 6f8067d76ce30996f83645862153ccfaf5f13dd1\nbuild_tags: netgo,ledger\ngo: go version go1.20.4 darwin/arm64\nbuild_deps:\n- cosmossdk.io/api@v0.2.6\n- cosmossdk.io/core@v0.5.1\n- cosmossdk.io/depinject@v1.0.0-alpha.3\n- cosmossdk.io/errors@v1.0.0\n- filippo.io/edwards25519@v1.0.0-rc.1\n- github.com/99designs/go-keychain@v0.0.0-20191008050251-8e49817e8af4\n- github.com/99designs/keyring@v1.2.1 => github.com/cosmos/keyring@v1.2.0\n- github.com/ChainSafe/go-schnorrkel@v1.0.0\n- github.com/Workiva/go-datastructures@v1.0.53\n- github.com/armon/go-metrics@v0.4.1\n- github.com/beorn7/perks@v1.0.1\n- github.com/bgentry/speakeasy@v0.1.1-0.20220910012023-760eaf8b6816\n- github.com/btcsuite/btcd/btcec/v2@v2.3.2\n- github.com/cenkalti/backoff/v4@v4.1.3\n- github.com/cespare/xxhash/v2@v2.1.2\n- github.com/coinbase/rosetta-sdk-go@v0.7.9\n- github.com/cometbft/cometbft-db@v0.7.0\n- github.com/confio/ics23/go@v0.9.0\n- github.com/cosmos/btcutil@v1.0.4\n- github.com/cosmos/cosmos-db@v0.0.0-20221226095112-f3c38ecb5e32\n- github.com/cosmos/cosmos-proto@v1.0.0-beta.1\n- github.com/cosmos/cosmos-sdk@v0.45.16-ics => github.com/cosmos/cosmos-sdk@v0.45.16-ics-lsm\n- github.com/cosmos/go-bip39@v1.0.0\n- github.com/cosmos/iavl@v0.19.5\n- github.com/cosmos/ibc-apps/middleware/packet-forward-middleware/v4@v4.1.0\n- github.com/cosmos/ibc-go/v4@v4.4.2\n- github.com/cosmos/interchain-security/v2@v2.0.0 => github.com/cosmos/interchain-security/v2@v2.0.0-lsm\n- github.com/cosmos/ledger-cosmos-go@v0.12.2\n- github.com/creachadair/taskgroup@v0.3.2\n- github.com/davecgh/go-spew@v1.1.1\n- github.com/decred/dcrd/dcrec/secp256k1/v4@v4.0.1\n- github.com/desertbit/timer@v0.0.0-20180107155436-c41aec40b27f\n- github.com/dvsekhvalnov/jose2go@v1.5.0\n- github.com/felixge/httpsnoop@v1.0.2\n- github.com/fsnotify/fsnotify@v1.6.0\n- github.com/go-kit/kit@v0.12.0\n- github.com/go-kit/log@v0.2.1\n- github.com/go-logfmt/logfmt@v0.5.1\n- github.com/gogo/gateway@v1.1.0\n- github.com/gogo/protobuf@v1.3.3 => github.com/regen-network/protobuf@v1.3.3-alpha.regen.1\n- github.com/golang/protobuf@v1.5.3\n- github.com/golang/snappy@v0.0.4\n- github.com/google/btree@v1.1.2\n- github.com/google/orderedcode@v0.0.1\n- github.com/gorilla/handlers@v1.5.1\n- github.com/gorilla/mux@v1.8.0\n- github.com/gorilla/websocket@v1.5.0\n- github.com/gravity-devs/liquidity@v1.6.0 => github.com/gravity-devs/liquidity@v1.6.0-forced-withdrawal\n- github.com/grpc-ecosystem/go-grpc-middleware@v1.3.0\n- github.com/grpc-ecosystem/grpc-gateway@v1.16.0\n- github.com/grpc-ecosystem/grpc-gateway/v2@v2.10.2\n- github.com/gtank/merlin@v0.1.1\n- github.com/gtank/ristretto255@v0.1.2\n- github.com/hashicorp/go-immutable-radix@v1.3.1\n- github.com/hashicorp/golang-lru@v0.5.5-0.20210104140557-80c98217689d\n- github.com/hashicorp/hcl@v1.0.0\n- github.com/hdevalence/ed25519consensus@v0.0.0-20220222234857-c00d1f31bab3\n- github.com/iancoleman/orderedmap@v0.2.0\n- github.com/improbable-eng/grpc-web@v0.15.0\n- github.com/klauspost/compress@v1.15.11\n- github.com/lib/pq@v1.10.7\n- github.com/libp2p/go-buffer-pool@v0.1.0\n- github.com/magiconair/properties@v1.8.7\n- github.com/mattn/go-colorable@v0.1.13\n- github.com/mattn/go-isatty@v0.0.17\n- github.com/matttproud/golang_protobuf_extensions@v1.0.2-0.20181231171920-c182affec369\n- github.com/mimoo/StrobeGo@v0.0.0-20210601165009-122bf33a46e0\n- github.com/minio/highwayhash@v1.0.2\n- github.com/mitchellh/mapstructure@v1.5.0\n- github.com/mtibben/percent@v0.2.1\n- github.com/pelletier/go-toml/v2@v2.0.8\n- github.com/pkg/errors@v0.9.1\n- github.com/pmezard/go-difflib@v1.0.0\n- github.com/prometheus/client_golang@v1.14.0\n- github.com/prometheus/client_model@v0.3.0\n- github.com/prometheus/common@v0.37.0\n- github.com/prometheus/procfs@v0.8.0\n- github.com/rakyll/statik@v0.1.7\n- github.com/rcrowley/go-metrics@v0.0.0-20201227073835-cf1acfcdf475\n- github.com/regen-network/cosmos-proto@v0.3.1\n- github.com/rs/cors@v1.8.2\n- github.com/rs/zerolog@v1.27.0\n- github.com/spf13/afero@v1.9.5\n- github.com/spf13/cast@v1.5.1\n- github.com/spf13/cobra@v1.7.0\n- github.com/spf13/jwalterweatherman@v1.1.0\n- github.com/spf13/pflag@v1.0.5\n- github.com/spf13/viper@v1.16.0\n- github.com/stretchr/testify@v1.8.4\n- github.com/subosito/gotenv@v1.4.2\n- github.com/syndtr/goleveldb@v1.0.1-0.20210819022825-2ae1ddf74ef7\n- github.com/tendermint/go-amino@v0.16.0\n- github.com/tendermint/tendermint@v0.34.27 => github.com/cometbft/cometbft@v0.34.29\n- github.com/tendermint/tm-db@v0.6.7\n- github.com/tidwall/btree@v1.5.0\n- github.com/zondax/hid@v0.9.1\n- github.com/zondax/ledger-go@v0.14.1\n- golang.org/x/crypto@v0.11.0\n- golang.org/x/exp@v0.0.0-20221205204356-47842c84f3db\n- golang.org/x/net@v0.12.0\n- golang.org/x/sys@v0.10.0\n- golang.org/x/term@v0.10.0\n- golang.org/x/text@v0.11.0\n- google.golang.org/genproto@v0.0.0-20230410155749-daa745c078e1\n- google.golang.org/grpc@v1.56.2 => google.golang.org/grpc@v1.33.2\n- google.golang.org/protobuf@v1.31.0\n- gopkg.in/ini.v1@v1.67.0\n- gopkg.in/yaml.v2@v2.4.0\n- gopkg.in/yaml.v3@v3.0.1\n- nhooyr.io/websocket@v1.8.6\ncosmos_sdk_version: v0.45.16-ics",golangVersion:"1.20.x"},nextRelease:{releaseName:"v12",releaseDate:"",blockHeight:"",governanceProposalLink:""},proposals:{numberOfValidatorsProp:"https://www.mintscan.io/cosmos/proposals/797"},auth:{max_memo_characters:"512",tx_sig_limit:"7",sig_verify_cost_ed25519:"590",tx_size_cost_per_byte:"10",sig_verify_cost_secp256k1:"1000"},baseapp:{BlockParams:{max_bytes:"200000",max_gas:"40000000"},EvidenceParams:{max_age_duration:"172800000000000",max_age_num_blocks:"1000000",max_bytes:"50000"},ValidatorParams:{pub_key_types:["ed25519"]}},crisis:{ConstantFee:{amount:"1333000000",denom:"uatom"}},distribution:{base_proposer_reward:"0.010000000000000000",bonus_proposer_reward:"0.040000000000000000",community_tax:"0.020000000000000000",withdraw_addr_enabled:!0},gov:{deposit_params:{max_deposit_period:"1209600000000000",min_deposit:[{amount:"250000000",denom:"uatom"}]},tally_params:{quorum:"0.400000000000000000",threshold:"0.500000000000000000",veto_threshold:"0.334000000000000000"},voting_params:{voting_period:"1209600000000000"},params:{min_deposit:[{denom:"stake",amount:"10000000"}],max_deposit_period:"172800s",voting_period:"60s",quorum:"0.334000000000000000",threshold:"0.500000000000000000",veto_threshold:"0.334000000000000000",min_initial_deposit_ratio:"0.000000000000000000",burn_vote_quorum:!1,burn_proposal_deposit_prevote:!1,burn_vote_veto:!0,min_deposit_ratio:"0.010000000000000000"}},mint:{blocks_per_year:"4360000",goal_bonded:"0.670000000000000000",inflation_max:"0.200000000000000000",inflation_min:"0.070000000000000000",inflation_rate_change:"1.000000000000000000",mint_denom:"uatom"},slashing:{downtime_jail_duration:"600000000000",min_signed_per_window:"0.050000000000000000",signed_blocks_window:"10000",slash_fraction_double_sign:"0.050000000000000000",slash_fraction_downtime:"0.000100000000000000"},staking:{unbonding_time:"86400s",max_validators:100,max_entries:7,historical_entries:1e4,bond_denom:"stake",min_commission_rate:"0.000000000000000000",validator_bond_factor:"-1.000000000000000000",global_liquid_staking_cap:"1.000000000000000000",validator_liquid_staking_cap:"1.000000000000000000"},transfer:{ReceiveEnabled:!0,SendEnabled:!0}}},1488:(e,t,o)=>{o.d(t,{E6:()=>r,nd:()=>n});var a=o(7294);const n=e=>{let{children:t}=e;return a.createElement("code",null,JSON.stringify(t))},r=e=>{let{children:t}=e;return a.createElement("span",null,JSON.stringify(t))}},1788:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var a=o(7462),n=(o(7294),o(3905)),r=o(733),i=o(1488);const s={title:"Introduction",order:1,sidebar_position:1},l=void 0,m={unversionedId:"index",id:"index",title:"Introduction",description:"v14 Upgrade",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",order:1,sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/getting-started/"}},c={},u=[{value:"The ATOM",id:"the-atom",level:2},{value:"Cosmos Hub Wallets",id:"cosmos-hub-wallets",level:2},{value:"Metamask Snaps",id:"metamask-snaps",level:2},{value:"Cosmos Hub Explorers",id:"cosmos-hub-explorers",level:2},{value:"Cosmos Hub CLI",id:"cosmos-hub-cli",level:2},{value:"Running a full-node on the Cosmos Hub Mainnet",id:"running-a-full-node-on-the-cosmos-hub-mainnet",level:2},{value:"Join the Community",id:"join-the-community",level:2}],p={toc:u},g="wrapper";function h(e){let{components:t,...s}=e;return(0,n.kt)(g,(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("h3",{parentName:"admonition",id:"v14-upgrade"},(0,n.kt)("strong",{parentName:"h3"},"v14 Upgrade")),(0,n.kt)("p",{parentName:"admonition"},"Cosmos Hub will be upgraded to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/releases/tag/v14.1.0"},"v14.1")," at block height: ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.mintscan.io/cosmos/blocks/18262000"},"18,262,000"))),(0,n.kt)("p",{parentName:"admonition"},"To upgrade from v13 check the ",(0,n.kt)("a",{parentName:"p",href:"/migration/cosmoshub-4-v14-upgrade"},(0,n.kt)("strong",{parentName:"a"},"upgrade guide")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Welcome to the Cosmos Hub",src:o(1942).Z,width:"1920",height:"1080"})),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The Cosmos Hub is the first of ",(0,n.kt)("a",{parentName:"p",href:"https://cosmos.network"},"thousands of interconnected blockchains")," that will eventually comprise the ",(0,n.kt)("strong",{parentName:"p"},"Cosmos Network"),". The primary token of the Cosmos Hub is the ",(0,n.kt)("strong",{parentName:"p"},"ATOM"),", but the Hub will support many tokens in the future."),(0,n.kt)("h2",{id:"the-atom"},"The ATOM"),(0,n.kt)("p",null,"Do you have ATOM tokens? With ATOM, you have the superpower to contribute to the security and governance of the Cosmos Hub. Delegate your ATOM to one or more of the ",(0,n.kt)(i.E6,{children:r.g.staking.MaxValidators,mdxType:"PlainVar"})," validators on the Cosmos Hub blockchain to earn more ATOM through Proof-of-Stake. You can also vote with your ATOM to influence the future of the Cosmos Hub through on-chain governance proposals."),(0,n.kt)("p",null,"Learn more about ",(0,n.kt)("a",{parentName:"p",href:"/delegators/delegator-faq"},"being a delegator"),", learn about ",(0,n.kt)("a",{parentName:"p",href:"/delegators/delegator-security"},"the security risks"),", and start participating with one of the following wallets."),(0,n.kt)("h2",{id:"cosmos-hub-wallets"},"Cosmos Hub Wallets"),(0,n.kt)("div",{class:"theme-doc-version-banner alert alert--warning margin-bottom--md",role:"alert"},"Do your own research and take precautions in regards to wallet security. Neither Tendermint Inc nor the Interchain Foundation is liable if you lose your funds using these third party wallets."),(0,n.kt)("p",null,"These community-maintained web and mobile wallets allow you to store & transfer ATOM, delegate ATOM to validators, and vote on on-chain governance proposals. Note that we do not endorse any of the wallets, they are listed for your convenience."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://atomicwallet.io/"},"Atomic Wallet")," - Android, Linux, macOS, Windows"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://citadel.one/#mobile"},"Citadel.One")," - Android, iOS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cobo.com/"},"Cobo")," - Android, iOS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.cosmostation.io/"},"Cosmostation")," - Android, iOS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://crypto.com/"},"Crypto.com")," - Android, iOS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.huobiwallet.com/"},"Huobi Wallet")," - Android, iOS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://app.shapeshift.com/"},"ShapeShift Wallet")," - Android, iOS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://token.im/"},"imToken")," - Android, iOS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wallet.keplr.app"},"Keplr")," - Web"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ledger.com/cosmos-wallet"},"Ledger")," - Hardware"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.mathwallet.org/en/"},"Math Wallet")," - Android, iOS, Web"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.rainbow.one"},"Rainbow Wallet")," - Android, iOS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://trustwallet.com/"},"Trust Wallet")," Android, iOS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://atomicdex.io/en/"},"Komodo Wallet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.leapwallet.io/"},"Leap Wallet")," - Android, iOS, Web")),(0,n.kt)("h2",{id:"metamask-snaps"},"Metamask Snaps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.leapwallet.io/snaps"},"Leap Wallet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://metamask.mysticlabs.xyz/"},"Mystic Lab"))),(0,n.kt)("h2",{id:"cosmos-hub-explorers"},"Cosmos Hub Explorers"),(0,n.kt)("p",null,"These block explorers allow you to search, view and analyze Cosmos Hub data","\u2014","like blocks, transactions, validators, etc."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://atomscan.com"},"ATOMScan")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cosmos.bigdipper.live"},"Big Dipper")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cosmoshub.iobscan.io/"},"IOBScan")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mintscan.io"},"Mintscan")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/cosmos"},"Ping.Pub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://monitor.bronbro.io/d/cosmos-stats/cosmos"},"BronBro")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.datalenses.zone/chain/cosmos"},"Numia")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cosmos.smartstake.io/stats"},"SmartStake"))),(0,n.kt)("h2",{id:"cosmos-hub-cli"},"Cosmos Hub CLI"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"gaiad")," is a command-line interface that lets you interact with the Cosmos Hub. ",(0,n.kt)("inlineCode",{parentName:"p"},"gaiad")," is the only tool that supports 100% of the Cosmos Hub features, including accounts, transfers, delegation, and governance. Learn more about ",(0,n.kt)("inlineCode",{parentName:"p"},"gaiad")," with the ",(0,n.kt)("a",{parentName:"p",href:"/delegators/delegator-guide-cli"},"delegator's CLI guide"),"."),(0,n.kt)("h2",{id:"running-a-full-node-on-the-cosmos-hub-mainnet"},"Running a full-node on the Cosmos Hub Mainnet"),(0,n.kt)("p",null,"In order to run a full-node for the Cosmos Hub mainnet, you must first ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/installation"},"install ",(0,n.kt)("inlineCode",{parentName:"a"},"gaiad")),". Then, follow ",(0,n.kt)("a",{parentName:"p",href:"/hub-tutorials/join-mainnet"},"the guide"),".\nIf you are looking to run a validator node, follow the ",(0,n.kt)("a",{parentName:"p",href:"/validators/validator-setup"},"validator setup guide"),"."),(0,n.kt)("h2",{id:"join-the-community"},"Join the Community"),(0,n.kt)("p",null,"Have questions, comments, or new ideas? Participate in the Cosmos community through one of the following channels. Also check out the ",(0,n.kt)("a",{parentName:"p",href:"https://cosmos.network/community"},"latest events"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/cosmosnetwork"},"Cosmos Community Discord")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/cosmosproject"},"Cosmos Community Telegram")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/hubgov"},"Cosmos Hub Governance Working Group Telegram")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://forum.cosmos.network"},"Cosmos Forum")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://reddit.com/r/cosmosnetwork"},"Cosmos on Reddit"))),(0,n.kt)("p",null,"To learn more about the Cosmos Hub and how it fits within the Cosmos Network, visit ",(0,n.kt)("a",{parentName:"p",href:"https://cosmos.network"},"cosmos.network"),"."))}h.isMDXComponent=!0},1942:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/cosmos-hub-image-64b35193bcb3998afd27f30060ed5ab5.jpg"}}]);