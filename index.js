const { Configuration, OpenAIApi } = require("openai");
const { ROLE, msg, PAYLOAD } = require("./config");
const { errorStack, generatedTitle } = require("./helpers");

class OpenAITitleGenerator {
  constructor(apiKey, model) {
    this.config = new Configuration({ apiKey });
    this.openai = new OpenAIApi(this.config);
    this.model = model;
  }

  async generateTitle(inputText) {
    const prompt = {
      role: ROLE,
      content: msg(inputText),
    };

    try {
      const response = await this.openai.createChatCompletion(
        PAYLOAD(this.model, prompt)
      );
      return generatedTitle(response);
    } catch (error) {
      return errorStack(error.response.status);
    }
  }
}

module.exports = OpenAITitleGenerator;
