#!/usr/bin/env node
import { engine } from '../src/index.js';
import even from '../games/g-brain-even.js';

const string = 'Answer "yes" if the number is even, otherwise answer "no".';
engine(string, even);
