import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parse } from "cookie";
import jwt from "jsonwebtoken";

export function withAdminAuth<P extends Record<string, unknown>>(gssp: GetServerSideProps<P>): GetServerSideProps<P> {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parse(ctx.req.headers.cookie || "");
    const token = cookies.admin_token;

    if (!token) {
      return {
        redirect: {
          destination: "/admin/login",
          permanent: false,
        },
      };
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      return await gssp(ctx);
    } catch {
      return {
        redirect: {
          destination: "/admin/login",
          permanent: false,
        },
      };
    }
  };
}
