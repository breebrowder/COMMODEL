// Vanila Blockchain written in javascript
// Each block has a hash, a previous hash, a data, and a signature.
import sha256 from 'crypto-js/sha256.js';
import ecLib from 'elliptic/lib/elliptic/ec/index.js';

const ec = new ecLib('secp256k1');

// Encryption: signature, public key encryption, and private key decryption
export class Encryption {
    constructor(data, publicKeySeller, publicKeyBuyer) {
        // data: the data to be encrypted, should be the same as the data in the block
        // publicKeySeller: the public key of the seller
        // publicKeyBuyer: the public key of the buyer
        this.data = data;
        this.from = publicKeySeller;
        this.to = publicKeyBuyer;
    }

    // compute the hash of the data, prepared for signing
    computeHash() {
        return sha256(JSON.stringify(this.data) + this.from + this.to).toString();
    }
    // signature generating, sign the data with the private key
    sign(key) {
        this.signature = key.sign(this.computeHash(), 'base64').toDER('hex');
    }
    // verify the signature with the public key
    isValid() {
        if(this.from === ""){
            return true;
        }
        const keyObj = ec.keyFromPublic(this.from, 'hex')
        return keyObj.verify(this.computeHash(), this.signature);
    }
}

// Block
export class Block {
    constructor(data, encryption, previousHash = '') {
        // data: the string
        // previousHash: the hash of the previous block
        // hash: the hash of the block
        // signature: the signature of the block
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.signature = encryption;

        // const publicKey = ec.keyFromPublic(key.getPublic('hex'), 'hex');
        // this.publicKey = encryption.publicKey;
        // this.signature = new Signature(this.index, this.data, publicKey);
    }

    // fuction to calculate the hash of the block
    calculateHash() {
        return sha256(this.index + this.previousHash + JSON.stringify(this.data)).toString();
    }
}

// Chain
export class Chain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    // function to create the genesis block
    createGenesisBlock() {
        const genesisBlock = new Block('Genesis Block', '', '0')
        return genesisBlock;
    }
    // function to get the latest block
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    // function to add a new block to the chain
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    // function to check if the chain is valid
    isChainValid() {
        // Genesis block is always valid
        for (let i = 1; i < this.chain.length; i++) {
            // object can be declared as const, ES6 feature
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            const blockSignature = currentBlock.signature;
            // check if the hash of the block is valid
            // check if the hash of the previous block is valid
            // check if the signature of the block is valid
            // check if the data used for generating the signature is valid
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
            if (!blockSignature.isValid()) {
                return false;
            }
            if (currentBlock.signature.data !== currentBlock.data) {
                return false;
            }
        }
        return true;
    }
}