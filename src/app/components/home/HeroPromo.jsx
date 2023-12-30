import { DateTime } from "luxon";

export default () => {
    const promoStarts = DateTime.local(2023, 12, 1, 0, 0)
    const promoEnds = DateTime.local(2024, 1, 31, 0, 0);
    const promoActive = DateTime.now() >= promoStarts && DateTime.now() <= promoEnds;

    return promoActive ? (
        <h3 className="font-semibold text-2xl md:text-2xl tracking-[-0.02em] text-white leading-[30px] backdrop-opacity-30 bg-neutral-900/50 p-3 pb-3 md:p-8 mb-[2rem]">
            For the month of January, earn up to $10 off your next bill by leaving us a review!
            <div className="mt-[1rem] text-[70%] leading-[1rem]">($5 credit applied per platform. Applicable for Facebook and Google reviews.)</div>
        </h3>
    ) : ''
}
