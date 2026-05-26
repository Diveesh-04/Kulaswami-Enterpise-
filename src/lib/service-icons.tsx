import {
  Award,
  BookOpen,
  Briefcase,
  Building,
  CreditCard,
  FileCheck,
  FileText,
  Receipt,
  ScrollText,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIconName } from "@/data/services";

export const serviceIconMap: Record<ServiceIconName, LucideIcon> = {
  BookOpen,
  Building,
  Receipt,
  FileCheck,
  Briefcase,
  FileText,
  Users,
  CreditCard,
  ScrollText,
  Award,
};

export const getServiceIcon = (name: ServiceIconName): LucideIcon =>
  serviceIconMap[name];
