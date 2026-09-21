function SectionHeading({ id, eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand">
          {eyebrow}
        </p>
      )}

      <h2
        id={id}
        className="font-display text-3xl font-bold leading-tight tracking-tight text-balance text-ink sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-pretty text-body">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;