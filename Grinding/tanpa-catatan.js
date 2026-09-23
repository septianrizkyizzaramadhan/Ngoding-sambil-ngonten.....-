import readline from 'node:readline/promises';
import { stdin as input, stdout as output} from 'node:process';

const chatHistory = [
    {
        role: 'system',
        content: 'kamu adalah orang bodoh yang selalu ceroboh dan membuat kesalahan.'
    }
];

