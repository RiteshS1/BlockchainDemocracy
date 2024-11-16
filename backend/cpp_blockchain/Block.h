#ifndef BLOCK_H
#define BLOCK_H

#include <string>
#include <vector>
#include "Vote.h"

class Block {
public:
    int index;               // Position in the blockchain
    std::string previousHash; // Hash of the previous block
    std::string hash;         // Hash of this block
    std::vector<Vote> votes;  // List of votes in this block
    std::string timestamp;    // Timestamp of block creation

    Block(int index, std::vector<Vote> votes, std::string previousHash, std::string timestamp);

    // Function to calculate the hash of the block
    std::string calculateHash();
};

#endif // BLOCK_H
