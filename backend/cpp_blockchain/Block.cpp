#include "Block.h"
#include <ctime>
#include <sstream>
#include <iomanip>
#include <openssl/sha.h> 

Block::Block(int index, std::vector<Vote> votes, std::string previousHash, std::string timestamp)
    : index(index), votes(votes), previousHash(previousHash), timestamp(timestamp) {
    hash = calculateHash(); // Calculate the hash when the block is created
}

std::string Block::calculateHash() {
    std::stringstream ss;
    ss << index << previousHash << timestamp;

    for (const auto& vote : votes) {
        ss << vote.voterId << vote.candidateId;
    }

    unsigned char hash[SHA256_DIGEST_LENGTH];
    SHA256(reinterpret_cast<const unsigned char*>(ss.str().c_str()), ss.str().length(), hash);

    std::stringstream hashString;
    for (int i = 0; i < SHA256_DIGEST_LENGTH; ++i) {
        hashString << std::hex << std::setw(2) << std::setfill('0') << (int)hash[i];
    }
    return hashString.str();
}
