exports.errorStack = (err) => {
  if (err === 401) {
    return "Api key is invalid or not authorized.";
  } else if (err === 404) {
    return `The provided api key is not supported for ${this.model}`;
  }
  return err;
};

exports.generatedTitle = (response) =>
  response.data.choices[0].message.content.replace(/"/g, "");
