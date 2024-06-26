#!/bin/sh

set -o errexit -o nounset

CHAINID=$1
GENACCT=$2

if [ -z "$1" ]; then
  echo "Need to input chain id..."
  exit 1
fi

if [ -z "$2" ]; then
  echo "Need to input genesis account address..."
  exit 1
fi

# Build genesis file incl account for passed address
coins="10000000000stake,100000000000samoleans"
gaiad init --chain-id $CHAINID $CHAINID
gaiad keys add validator --keyring-backend="test"
gaiad genesis add-genesis-account $(gaiad keys show validator -a --keyring-backend="test") $coins
gaiad genesis add-genesis-account $GENACCT $coins
gaiad genesis gentx validator 5000000000stake --keyring-backend="test" --chain-id $CHAINID
gaiad genesis collect-gentxs

# Set proper defaults and change ports
echo "Setting rpc listen address"
# sed -i '' 's#"tcp://127.0.0.1:26657"#"tcp://0.0.0.0:26657"#g' ~/.gaia/config/config.toml
sleep 1
sed -i -r 's/timeout_commit = "5s"/timeout_commit = "1s"/g' ~/.gaia/config/config.toml
sed -i -r 's/timeout_propose = "3s"/timeout_propose = "1s"/g' ~/.gaia/config/config.toml
sed -i -r 's/index_all_keys = false/index_all_keys = true/g' ~/.gaia/config/config.toml
sed -i -r 's/minimum-gas-prices = ""/minimum-gas-prices = "0stake"/g' ~/.gaia/config/app.toml

# Start the gaia
gaiad start --pruning=nothing
