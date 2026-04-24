import { supabase } from "./supabase";

type TipSkill = "reading" | "listening" | "general";

export interface TipItem {
  id: string;
  title: string;
  content: string;
  skill: TipSkill;
  sort_order: number;
}

export interface ListeningTipItem extends TipItem {
  badge: string;
}

export interface ResourceTipItem extends TipItem {
  badge: string;
  tags: string[];
}

const normalizeLabel = (value: string): string =>
  value
    .split("-")
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(" ");

const pickBadge = (
  tags: Array<{ tip_tags: { name: string; tag_type: string } | null }>
): string => {
  if (!tags?.length) return "General";
  const resolved = tags
    .map((row) => row.tip_tags)
    .filter(Boolean) as Array<{ name: string; tag_type: string }>;

  const examPart = resolved.find((tag) => tag.tag_type === "exam_part");
  if (examPart) return examPart.name;

  return resolved[0]?.name ?? "General";
};

export const getReadingTips = async (): Promise<TipItem[]> => {
  const { data, error } = await supabase
    .from("tips")
    .select("id, title, content, skill, sort_order")
    .eq("skill", "reading")
    .eq("status", "published")
    .eq("is_active", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (error) {
    console.error("[tipsService] getReadingTips error:", error);
    return [];
  }

  return (data ?? []) as TipItem[];
};

export const getListeningTips = async (): Promise<ListeningTipItem[]> => {
  const { data, error } = await supabase
    .from("tips")
    .select(
      "id, title, content, skill, sort_order, tip_tag_map(tip_tags(name, tag_type))"
    )
    .eq("skill", "listening")
    .eq("status", "published")
    .eq("is_active", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (error) {
    console.error("[tipsService] getListeningTips error:", error);
    return [];
  }

  return (data ?? []).map((row: any) => ({
    id: row.id,
    title: row.title,
    content: row.content,
    skill: row.skill,
    sort_order: row.sort_order,
    badge: pickBadge(row.tip_tag_map ?? []),
  }));
};

export const getResourceTips = async (): Promise<ResourceTipItem[]> => {
  const { data, error } = await supabase
    .from("tips")
    .select(
      "id, title, content, skill, sort_order, tip_tag_map(tip_tags(name, slug, tag_type))"
    )
    .eq("status", "published")
    .eq("is_active", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (error) {
    console.error("[tipsService] getResourceTips error:", error);
    return [];
  }

  return (data ?? []).map((row: any) => ({
    id: row.id,
    title: row.title,
    content: row.content,
    skill: row.skill,
    sort_order: row.sort_order,
    badge:
      row.tip_tag_map?.[0]?.tip_tags?.name ??
      normalizeLabel(row.skill ?? "general"),
    tags: (row.tip_tag_map ?? [])
      .map((item: any) => item.tip_tags?.slug)
      .filter(Boolean),
  }));
};

