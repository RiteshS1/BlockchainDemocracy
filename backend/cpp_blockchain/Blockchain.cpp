#include "Blockchain.h"
#include <ctime>  

Blockchain::Blockchain() {
    chain.push_back(createGenesisBlock());
}

// Genesis block, which doesn't have a previous hash
Block Blockchain::createGenesisBlock() {
    std::vector<Vote> votes;
    return Block(0, votes, "0", std::to_string(std::time(0)));
}

// Retrieves the most recent block in the blockchain
Block Blockchain::getLastBlock() {
    return chain.back();
}

// Adds a new block to the blockchain
void Blockchain::addBlock(Block newBlock) {
    newBlock.previousHash = getLastBlock().hash;  // Set the previous hash
    newBlock.hash = newBlock.calculateHash();     // Calculate the new block's hash
    chain.push_back(newBlock);                    // Add to the chain
}
