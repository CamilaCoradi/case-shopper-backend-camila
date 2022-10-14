export class CustomError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

export class MissingInformation extends CustomError {
  constructor() {
    super(
      400,
      'It is necessary to complete the fields "clientName", "dueDate" and "list".'
    );
  }
}
