import CryptoJS from "crypto-js";

const ITERATIONS = 65536;
const KEY_SIZE = 256 / 32; // 8 words
const IV = CryptoJS.enc.Hex.parse("00000000000000000000000000000000");
const VITE_SECRET_KEY = "1l@ntu$_C0mpact_1dEntitY_F3b_2o21";
export function encryptString(strToEncrypt) {
  const key = CryptoJS.PBKDF2(
    VITE_SECRET_KEY,
    CryptoJS.enc.Utf8.parse(import.meta.env.VITE_SALT),
    {
      keySize: KEY_SIZE,
      iterations: ITERATIONS,
      hasher: CryptoJS.algo.SHA256,
    }
  );

  const encrypted = CryptoJS.AES.encrypt(strToEncrypt, key, {
    iv: IV,
    mode: CryptoJS.mode.CTR,
    padding: CryptoJS.pad.NoPadding,
  });

  return encrypted.toString(); // Base64 string
}
