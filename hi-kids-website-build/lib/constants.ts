import {
    Star,
    Sparkles,
    Layers,
    Shield,
    Users,
    Briefcase,
    GraduationCap,
    Heart,
} from "lucide-react";

export const LEVEL_COLORS = [
    "bg-hikids-blue/10 text-foreground border-hikids-blue/20",
    "bg-hikids-blue/10 text-foreground border-hikids-blue/20",
    "bg-primary/10 text-foreground border-primary/20",
    "bg-hikids-yellow/10 text-foreground border-hikids-yellow/30",
];

export const LEVEL_ICONS = [Star, Sparkles, Layers, Shield];

export const FEATURE_ICONS = [Layers, Sparkles, Shield, Users];

export const AUDIENCE_ICONS = {
    franchise: Briefcase,
    educators: GraduationCap,
    parents: Heart
}
