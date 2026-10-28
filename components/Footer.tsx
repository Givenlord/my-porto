import SocialIcon from "@/components/SocialIcon";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-4xl justify-end px-4 py-6 text-sm text-muted sm:px-6">
        <ul className="flex gap-2">
          {profile.socials.map((social) => {
            // mailto ga perlu tab baru
            const external = social.icon !== "email";
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border transition-colors hover:border-accent hover:text-accent"
                >
                  <SocialIcon name={social.icon} className="h-4 w-4" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
