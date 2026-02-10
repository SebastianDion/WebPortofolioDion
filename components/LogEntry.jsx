const LogEntry = ({ period, title, content }) => {
  return (
    <article className="max-w-3xl">
      <p className="text-sm text-white/40 mb-2">{period}</p>

      <h2 className="text-3xl font-semibold text-white mb-6">
        {title}
      </h2>

      <div className="flex flex-col gap-4 text-white/70 leading-relaxed text-justify">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default LogEntry;