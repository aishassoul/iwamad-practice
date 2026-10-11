# Week 5 — Handoff notes (SIS 2 starter design)

**Routes (from the prototype):**  
Posts list → Single post → Back to all posts; 404 → Page not found

**Components → React files:**  
PostCard → `src/components/PostCard.tsx`  
Button → `src/components/ui/Button.tsx`  
Tag → `src/components/ui/Tag.tsx`

**Button variants → prop:**  
`variant = "primary" | "secondary"`

**PostCard layout:**  
Direction: vertical  
Gap: 12px  
Padding: 16px (`space/4`)  
Radius: 8px (`radius/md`)  
Width: 320px  
Height: 386px  
Border: 1px

**Breakpoint change:**  
Phone: 1 column, vertically stacked header  
Desktop: 3 columns, horizontal header

**Tokens (all ten):**
- `color/primary` = `#1D4ED8`
- `color/on-primary` = `#FFFFFF`
- `color/text` = `#1F2937`
- `color/text-muted` = `#9CA3AF`
- `color/surface` = `#FFFFFF`
- `color/border` = `#D1D5DB`
- `space/2` = `8px`
- `space/4` = `16px`
- `space/6` = `24px`
- `radius/md` = `8px`