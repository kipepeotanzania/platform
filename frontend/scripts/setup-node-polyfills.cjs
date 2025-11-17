const nodeCrypto = require('node:crypto');
console.log('[polyfill] Applying crypto.hash shim');

function ensureHash(target) {
  if (typeof target.hash === 'function') {
    return;
  }

  const { createHash } = nodeCrypto;

  Object.defineProperty(target, 'hash', {
    value(algorithm, data, encoding = 'hex') {
      const hash = createHash(algorithm);

      if (typeof data === 'string' || Buffer.isBuffer(data)) {
        hash.update(data);
      } else if (ArrayBuffer.isView(data)) {
        hash.update(Buffer.from(data.buffer, data.byteOffset, data.byteLength));
      } else if (data instanceof ArrayBuffer) {
        hash.update(Buffer.from(data));
      } else if (data !== undefined && data !== null) {
        hash.update(Buffer.from(String(data)));
      }

      const supportedEncodings = new Set(['hex', 'latin1', 'base64']);
      if (encoding && supportedEncodings.has(encoding)) {
        return hash.digest(encoding);
      }
      if (encoding === 'buffer') {
        return hash.digest();
      }
      // Default to hex output when encoding es falsy o no soportado.
      return hash.digest('hex');
    },
    configurable: false,
    enumerable: false,
    writable: false,
  });
}

// Ensure default crypto export has hash (Vite imports from 'node:crypto').
ensureHash(nodeCrypto);

// Ensure global WebCrypto-style object also has hash (por compatibilidad).
if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto ?? {};
}
ensureHash(globalThis.crypto);
