import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to Block.exe
const blockPath = path.join(__dirname, '../cpp_blockchain/Block.exe');

// Function to execute Block.exe and handle voting
export const vote = (req, res) => {
    const { voterId, candidate } = req.body;

    // Execute Block.exe with arguments (e.g., voterId and candidate)
    exec(`${blockPath} ${voterId} ${candidate}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${stderr}`);
            return res.status(500).send('Error processing vote');
        }
        console.log('Blockchain output:', stdout); // Log the output from the blockchain
        res.send({ message: 'Vote processed successfully', result: stdout });
    });
};
