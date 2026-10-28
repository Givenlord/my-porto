// Judul section dengan nomor gaya terminal, contoh "01. Currently"
export default function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <h2 className="flex items-baseline gap-3 text-2xl font-semibold">
      <span className="font-mono text-xl font-normal text-accent">{index}.</span>
      {title}
    </h2>
  );
}
