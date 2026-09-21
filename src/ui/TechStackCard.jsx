// import PropTypes from "prop-types";

const TechStackCard = ({ title, items, className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-3xl bg-white p-4 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.2)] ring-1 ring-slate-900/5 ${className}`}
    >
      {/* Header ala jendela aplikasi */}
      <div className="mb-4 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 text-xs font-semibold text-slate-500">{title}</span>
      </div>

      <ul className="grid grid-cols-3 gap-3 lg:grid-cols-4">
        {items.map(({ id, name, icon: Icon, colorClass }) => (
          <li
            key={id}
            className="flex flex-col items-center gap-2 rounded-2xl bg-slate-50 px-2 py-3 ring-1 ring-slate-900/5"
          >
            <Icon className={`h-8 w-8 ${colorClass}`} />
            <span className="text-[11px] font-semibold text-slate-600">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// TechStackCard.propTypes = {
//   title: PropTypes.string.isRequired,
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

export default TechStackCard;