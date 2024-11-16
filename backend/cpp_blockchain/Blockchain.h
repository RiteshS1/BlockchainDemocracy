#ifndef BLOCKCHAIN_H
#define BLOCKCHAIN_H

#include <vector>
#include "Block.h"

class Blockchain {
public:
    std::vector<Block> chain;  // The chain of blocks (i.e., the blockchain)

    Blockchain();

    // Creates the first block (genesis block) in the blockchain
    Block createGenesisBlock();

    // Returns the last block in the chain
    Block getLastBlock();

    // Adds a new block to the chain
    void addBlock(Block newBlock);
};

#endif // BLOCKCHAIN_H
