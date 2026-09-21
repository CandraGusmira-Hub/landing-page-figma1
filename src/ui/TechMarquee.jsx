// import PropTypes from "prop-types";

/**
 * Deretan logo teknologi yang berjalan otomatis (marquee).
 * Dipakai sebagai pengganti kartu tech stack di layar kecil.
 */
const TechMarquee = ({ items, className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] ${className}`}
    >
      <ul className="flex w-max animate-marquee py-2 hover:[animation-play-state:paused] motion-reduce:animate-none">
        {/* Dua salinan supaya loop-nya mulus (translateX -50%) */}
        {[0, 1].map((copy) =>
          items.map(({ id, name, icon: Icon, colorClass }) => (
            <li
              key={`${copy}-${id}`}
              className="mr-3 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-900/5"
            >
              <Icon className={`h-4 w-4 ${colorClass}`} />
              {name}
            </li>
          )),
        )}
      </ul>
    </div>
  );
};

// TechMarquee.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       icon: PropTypes.elementType.isRequired,
//       colorClass: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   className: PropTypes.string,
// };

export default TechMarquee;