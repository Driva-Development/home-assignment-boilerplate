export const logger = {
  log: (message: string, ...optionalParams: any[]): void => {
    console.info(`[LOG] ${message}`, ...optionalParams);
  },

  info: (id: string, message: string, ...optionalParams: any[]): void => {
    console.info(`[INFO] ${id} - ${message}`, ...optionalParams);
  },

  error: (id: string, message: string | Error, ...optionalParams: any[]): void => {
    const errorMessage = message instanceof Error ? (message.stack ?? message.message) : message;
    console.error(`[ERROR] ${id} - ${errorMessage}`, ...optionalParams);
  },

  warn: (id: string, message: string, ...optionalParams: any[]): void => {
    console.warn(`[WARN] ${id} - ${message}`, ...optionalParams);
  }
};
