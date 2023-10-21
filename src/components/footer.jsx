import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="footer bg-[#131313] mt-10 text-white">
        <div className="container mx-auto py-8 md:px-0 px-4">
          <div className="flex items-center flex-col gap-6">
            <div className="brandLogo select-none">
              <img src="/logo-light.png" alt="" />
            </div>
            <div className="disclaimer flex flex-col items-center gap-3">
              <p className="italic text-xs text-center opacity-60 select-none">
                This site does not store any files on our server, we only linked to the media which
                is hosted on 3rd party services.
              </p>
              <h1 className="font-semibold text-sm">© 2023 AniDesu [です]</h1>
            </div>
            <div className="links flex gap-2 font-semibold text-sm tracking-widest">
              <Link href={""}>Github</Link>
              <Link href={""}>Twitter</Link>
              <Link href={""}>Linkedin</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
