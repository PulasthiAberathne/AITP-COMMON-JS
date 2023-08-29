exports.msg = (txt) =>
  `Generate a suitable title for the following passage:\n\n${txt}\n\nTitle:`;

exports.ROLE = "user";

exports.PAYLOAD = (model, prompt) => ({
  model: model,
  messages: [prompt],
  max_tokens: 15,
  temperature: 0.7,
});
