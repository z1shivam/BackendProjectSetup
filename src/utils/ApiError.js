class ApiError extends Error {
  constructor(statusCode, message, errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;

    this.timestamp = new Date().toISOString();
  }

  getTimestamp() {
    return this.timestamp;
  }

  toString() {
    return JSON.stringify({
      timestamp: this.timestamp,
      statusCode: this.statusCode,
      message: this.message,
      errors: this.errors,
    });
  }
}

export default ApiError
