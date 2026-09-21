import PropTypes from "prop-types";

/**
 * Badge kartu kecil untuk menampilkan metrik (mis. Lighthouse Score, Uptime).
 * Dilengkapi animasi melayang + efek hover.
 *
 * @example
 * <Badge icon={Gauge} label="Lighthouse Score" value="99 / 100" tag="A+" subtext="Under 0.8s Initial Load" />
 * <Badge icon={Server} label="Production Reliability" value="99.98% Uptime" subtext="Cloud Enterprise SLA" showDot />
 */
const Badge = ({
  icon: Icon,
  label,
  value,
  tag = "",
  subtext = "",
  showDot = false,
  className = "",
}) => {
  return (
    <div
      className={`group flex animate-float items-center gap-4 rounded-2xl bg-white p-3 pr-7 shadow-[0_12px_40px_-8px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/5 transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-10px_rgba(249,115,22,0.3)] hover:ring-orange-200 motion-reduce:animate-none ${className}`}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
        <Icon className="h-6 w-6" strokeWidth={2.25} aria-hidden="true" />
      </div>

      <div className="min-w-0">
        <p className="text-[13px] font-medium leading-tight text-slate-500">
          {label}
        </p>

        <div className="mt-0.5 flex items-center gap-2">
          <p className="whitespace-nowrap text-xl font-bold leading-tight tracking-tight text-slate-900">
            {value}
          </p>
          {tag && (
            <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 text-[11px] font-bold leading-none text-emerald-600">
              {tag}
            </span>
          )}
        </div>

        {subtext && (
          <p
            className={`mt-1 flex items-center gap-1.5 whitespace-nowrap text-xs leading-tight ${
              showDot ? "font-medium text-slate-700" : "text-slate-500"
            }`}
          >
            {showDot && (
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
            )}
            {subtext}
          </p>
        )}
      </div>
    </div>
  );
};

Badge.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  tag: PropTypes.string,
  subtext: PropTypes.string,
  showDot: PropTypes.bool,
  className: PropTypes.string,
};

export default Badge;