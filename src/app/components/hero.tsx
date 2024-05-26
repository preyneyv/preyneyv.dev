export default function Hero() {
  return (
    <div
      className="text-3xl leading-none relative pb-32 flex flex-col justify-end"
      style={{
        height: `calc(100vh - 360px)`,
        minHeight: '320px',
      }}
    >
      <div className="">
        <p className="mb-[1em]">
          Full-stack engineer with a passion for
          <br />
          user experience and real-time systems.
        </p>
        <p>
          Currently transforming client experiences <br />
          at McKinsey Digital.
        </p>
      </div>
    </div>
  )
}
