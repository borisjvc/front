function sanitizeInput(value: string) {
  return value
    .replace(/<[^>]*>?/gm, '')         // elimina etiquetas HTML
    .replace(/[\u0000-\u001F\u007F]/g, '') // caracteres de control
    .trim();                           // quita espacios
}

export { sanitizeInput};