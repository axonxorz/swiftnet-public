import { DateTime } from "luxon";
import style from "@/app/styles/styles.module.css";
import Link from "next/link";

export default () => {
    const promoStarts = DateTime.local(2024, 5, 24, 0, 0)
    const promoEnds = DateTime.local(2024, 10, 1, 0, 0);
    const promoActive = DateTime.now() >= promoStarts && DateTime.now() <= promoEnds;
    // const promoActive = false;

    return promoActive ? (
        <Link href={"/sign-up"}>
          <div className={`${style.promoimg} md:h-[450px] h-[250px] `} >
          </div>
        </Link>

        // <h3 className="font-semibold text-2xl md:text-2xl tracking-[-0.02em] text-white leading-[30px] backdrop-opacity-30 bg-neutral-900/50 p-3 pb-3 md:p-8 mb-[2rem]">
          //   Supercharge your Internet with plans starting at $39.95!*
          //   <div className="mt-[1rem] text-[70%] leading-[1rem]">(Plan availability varies by location.  Visit Pricing & Plans to verify eligibility.)</div>
        // </h3>
    ) : ''
}
