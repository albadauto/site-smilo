import {
  LayoutDashboard,
  Users,
  ClipboardList,
  CalendarDays,
  CreditCard,
  Stethoscope,
  Layers,
  UserCog,
  Settings2,
  Lock,
  ShieldCheck,
  Eye,
  Check,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Building2,
  HeartHandshake,
  Clock,
  Star,
} from "lucide-react";

const registry = {
  LayoutDashboard,
  Users,
  ClipboardList,
  CalendarDays,
  CreditCard,
  Stethoscope,
  Layers,
  UserCog,
  Settings2,
  Lock,
  ShieldCheck,
  Eye,
  Check,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Building2,
  HeartHandshake,
  Clock,
  Star,
};

function WhatsApp({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.647-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.9 6.994c-.003 5.45-4.437 9.884-9.892 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

registry.WhatsApp = WhatsApp;

export default function Icon({ name, className, strokeWidth = 1.75, ...props }) {
  const Cmp = registry[name];
  if (!Cmp) return null;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" {...props} />;
}
