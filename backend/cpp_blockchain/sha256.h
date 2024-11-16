#ifndef SHA256_H
#define SHA256_H

#include <stddef.h> // for size_t

// SHA256 context
typedef unsigned char BYTE;  // 8 bits
typedef unsigned int WORD;    // 32 bits
#define SHA256_BLOCK_SIZE 32  // SHA256 outputs a 256 bit hash
#define SHA256_DIGEST_LENGTH 32  // SHA256 digest length

typedef struct {
    BYTE data[64];            // Data block
    unsigned int datalen;     // Length of data
    unsigned long long bitlen; // Total length of input data
    WORD state[8];            // Intermediate hash state
} SHA256_CTX;

void sha256_init(SHA256_CTX *ctx);
void sha256_update(SHA256_CTX *ctx, const BYTE data[], size_t len);
void sha256_final(SHA256_CTX *ctx, BYTE hash[]);

#endif // SHA256_H
