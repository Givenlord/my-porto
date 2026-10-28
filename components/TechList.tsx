export default function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <li key={item} className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
          {item}
        </li>
      ))}
    </ul>
  );
}
