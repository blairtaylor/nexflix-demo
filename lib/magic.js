import { Magic } from "@magic-sdk/admin";

// set admin key for Magic
export const magicAdmin = new Magic(process.env.MAGIC_SERVER_KEY); // ✨
