# OpenAI Title Generator

A simple npm package to generate titles using OpenAI's GPT model.

## Installation

```bash
npm install openai-title-generator

## Usage
Using the OpenAI Title Generator is straightforward. Follow the example below to generate titles:


const OpenAITitleGenerator = require("openai-title-generator");

const apiKey = "api-key";
const generator = new OpenAITitleGenerator(apiKey, "model-name");

const inputText =
  "hi";
generator
  .generateTitle(inputText.toUpperCase())
  .then((title) => {
    console.log(title);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```
