class DataNotFoundError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export default DataNotFoundError;
