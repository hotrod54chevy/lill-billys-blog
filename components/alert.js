import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";
import { useRouter } from "next/router";

export default function Alert({ preview }) {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className='py-2 text-center text-sm'>
          <div className='flex flex-row-reverse'>
            <img
              className='px-2'
              style={{ height: 24, cursor: "pointer" }}
              alt='VietNam'
              src='http://purecatamphetamine.github.io/country-flag-icons/3x2/VN.svg'
              onClick={() =>
                router.push({ pathname, query }, asPath, { locale: "vi-VN" })
              }
            />
            <img
              style={{ height: 24, cursor: "pointer" }}
              alt='VietNam'
              src='http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg'
              onClick={() =>
                router.push({ pathname, query }, asPath, { locale: "en-US" })
              }
            />
          </div>

          {/* {preview ? (
            <>
              This is page is a preview.{" "}
              <a
                href='/api/exit-preview'
                className='underline hover:text-cyan duration-200 transition-colors'
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className='underline hover:text-success duration-200 transition-colors'
              >
                available on GitHub
              </a>
              .
            </>
          )} */}
        </div>
      </Container>
    </div>
  );
}
