// export { GET, POST } from "@/app/_lib/auth";

import NextAuth from "next-auth";
import { authConfig } from "@/app/_lib/auth";
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
export { authConfig };
